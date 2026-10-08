#!/usr/bin/env node
// Render a ServiceNow brand animation HTML to MP4, frame by frame.
// Usage: node render_video.mjs page.html out.mp4 [--fps 30] [--width 1920] [--height 1080]
// Requires: npm i playwright && npx playwright install chromium ; ffmpeg on PATH.
// The page must expose window.__seek(seconds) and window.__duration (see brand-animation.html).
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf(`--${k}`); return i >= 0 ? Number(args[i + 1]) : d; };
const [input, output = 'out.mp4'] = args.filter((a, i) => !a.startsWith('--') && !args[i - 1]?.startsWith('--'));
if (!input) { console.error('Usage: node render_video.mjs page.html out.mp4 [--fps 30]'); process.exit(1); }
const fps = opt('fps', 30), width = opt('width', 1920), height = opt('height', 1080);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
await page.goto(pathToFileURL(path.resolve(input)).href + '?render=1');
await page.waitForFunction(() => typeof window.__seek === 'function' && document.fonts.status === 'loaded');
const duration = await page.evaluate(() => window.__duration);
const frames = Math.round(duration * fps);

const ff = spawn('ffmpeg', ['-y', '-f', 'image2pipe', '-framerate', String(fps), '-i', '-',
  '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '18', output], { stdio: ['pipe', 'inherit', 'inherit'] });

for (let f = 0; f < frames; f++) {
  await page.evaluate(t => window.__seek(t), f / fps);
  ff.stdin.write(await page.screenshot({ type: 'png' }));
  if (f % fps === 0) process.stdout.write(`\r${f}/${frames} frames`);
}
ff.stdin.end();
await new Promise(r => ff.on('close', r));
await browser.close();
console.log(`\n${output}: ${duration}s @ ${fps}fps, ${width}x${height}`);
