import React from 'react';

// Geometry transcribed from the Figma frames "dark-*-gradient-1920x1080" / "mid-*-gradient-1920x1080".
// Glows are 50%-opacity ellipses, heavily blurred; rendered in a 1920×1080 SVG that scales to cover.
const HUES = {
  green:  { ur: '#52B8FF', ll: '#63DF4E', mid: ['#005F1E', '#003310'] },
  blue:   { ur: '#7661FF', ll: '#52B8FF', mid: ['#035D99', '#032D42'] },
  indigo: { ur: '#BF71F2', ll: '#7661FF', mid: ['#3C288D', '#14103B'] },
  purple: { ur: '#7661FF', ll: '#BF71F2', mid: ['#412C58', '#1E012E'] },
};

export function GradientBackground({ tone = 'dark', hue = 'green', blur = 220, children, style, ...rest }) {
  const h = HUES[hue] || HUES.green;
  const base = tone === 'mid'
    ? `linear-gradient(119.358deg, ${h.mid[0]} 0%, ${h.mid[1]} 100%)`
    : 'var(--sn-infinite-blue)';
  const op = tone === 'mid' ? 0.62 : 0.5;
  const id = `snglow-${tone}-${hue}`;
  return (
    <div style={{ position: 'relative', overflow: 'hidden', background: base, color: 'var(--text-primary)', ...style }} {...rest}>
      <svg viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" aria-hidden="true"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        <defs><filter id={id} x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation={blur} /></filter></defs>
        <g filter={`url(#${id})`}>
          <ellipse cx="1875.6" cy="37.1" rx="481.8" ry="459.3" fill={h.ur} opacity={op} />
          <ellipse cx="85.2" cy="1159.4" rx="577.1" ry="441.8" fill={h.ll} opacity={op} transform="rotate(11.2 85.2 1159.4)" />
        </g>
      </svg>
      <div style={{ position: 'relative', height: '100%' }}>{children}</div>
    </div>
  );
}
