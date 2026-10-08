---
name: servicenow-design
description: ServiceNow brand design system. Use whenever creating anything ServiceNow-branded — PowerPoint decks/slides (.pptx), animations or motion videos, social/banner assets, one-pagers or mocks. Contains the official Corporate PowerPoint Template v2.3 (42 layouts), brand tokens, ServiceNow Sans fonts, logos, gradient backgrounds, 225 icons and build scripts.
---

# ServiceNow Design System

Read `readme.md` for the full brand guide (voice, colour, type, layout, iconography). This file is the operating procedure.

## Non-negotiable output rules
1. **Every PowerPoint file is 13.33 in × 7.5 in (custom size, 12188952 × 6858000 EMU).** No exceptions, no other sizes, regardless of library, source or user-supplied file.
   - Always run `python scripts/enforce_slide_size.py <file.pptx>` as the **final step** before delivering any .pptx — including files built by other tools, edited user files or exports from HTML.
   - python-pptx: `prs.slide_width = Emu(12188952); prs.slide_height = Emu(6858000)`
   - PptxGenJS: `pptx.defineLayout({ name: 'SN_CUSTOM', width: 13.33, height: 7.5 }); pptx.layout = 'SN_CUSTOM';`
2. **Build decks from the Corporate Template**, `templates/ServiceNow_Corporate_Template_v2.3.pptx`. Use its slide layouts (masters, backgrounds, logos, footers, fonts come with them). Never draw a ServiceNow deck from a blank presentation.
3. Never use the layout named "Do not use". Delete the template's sample slides (the build script does this).
4. Brand fonts: ServiceNow Sans (body Light, titles Bold), ServiceNow Sans Display (big numbers), ServiceNow Mono (UPPERCASE labels). Fonts are in `fonts/`. Tell the user to install them if PowerPoint shows substitutes.
5. Headline spacing: in PowerPoint keep the template's 85% line spacing. In HTML/CSS that equals `line-height: 1.02`; never set multi-line headlines below `1.0` (descenders like g, y, p collide with the next line). Body copy 1.15–1.25.
6. Copy: sentence-case headlines, no emoji, no exclamation marks in headlines, "ServiceNow" with a capital N. Short declarative pairs ("You start it. Otto finishes it.").

## PowerPoint workflow
1. Plan the outline: one idea per slide. Pick a layout per slide from `reference/pptx-layouts.md`. Vary the rhythm: cover → title/content → divider → cards/columns → statement → thank you.
2. Write the outline as JSON (see `templates/deck-outline.example.json`).
3. Build: `python scripts/build_deck.py outline.json out.pptx` (requires `pip install python-pptx`).
4. For custom visuals the layouts don't cover (diagrams, stat rows), add shapes with python-pptx on top of a "Title Only" or "Blank" slide, using brand hex values from `tokens/colors.css`: Infinite Blue #032D42, Wasabi Green #63DF4E, Blue #52B8FF, Indigo #7661FF, Purple #BF71F2, Orange #FFBC39 (warnings only). Cards: rounded rectangle, white 1px hairline, no shadows.
5. Icons: `assets/icons/<name>.svg` (index in `assets/icons/index.json`). Convert to PNG before inserting (e.g. `cairosvg`). Size 0.3–0.65 in. Never recolour, never on Wasabi Green.
6. **Final step: `python scripts/enforce_slide_size.py out.pptx`**, then confirm the printed size reads `13.33 x 7.50 in`.
7. Optional check: render to images (`soffice --headless --convert-to pdf out.pptx`) and inspect for overflow.

`python scripts/list_layouts.py` prints every layout and its placeholders, so you can map content correctly.

## Animation workflow
1. Start from `templates/animation/brand-animation.html`: a 1920×1080 stage, a scene timeline, brand gradients and fonts. Edit the `SCENES` array and scene markup. Keep motion calm: fades and slides, `cubic-bezier(.2,0,0,1)`, 200–600 ms, no bounces.
2. Preview: open the HTML in a browser. Space plays/pauses, ←/→ scrub.
3. Export MP4: `node scripts/render_video.mjs templates/animation/brand-animation.html out.mp4 --fps 30` (requires `npm i playwright` and `ffmpeg`). The page exposes `window.__seek(t)` and `window.__duration` for frame-accurate capture.
4. Need the animation inside PowerPoint? Insert the MP4 on a "Demo Full Screen" or "Blank" slide, then run `enforce_slide_size.py`.

## Feature spotlight videos (from a screenshot)
Turn a product screenshot into an MP4 that zooms in on and highlights features one at a time. Template: `templates/animation/feature-spotlight.html`. Example: `examples/ai-performance-dashboard.png`.
1. Copy the template and the user's screenshot into the working folder. Read the image's pixel size and set `CONFIG.image`, `width`, `height`.
2. Look at the screenshot and decide 2–5 regions to spotlight, in the order that tells the story. For each, write a box in **screenshot pixels** (`x, y, w, h` from top-left), a mono `label` (the widget name), a short `title` (the number or outcome) and an optional one-line `body`. Copy rules: sentence case, no emoji, big rounded numbers.
3. Set `eyebrow`, `title` (two-tone: wrap the lead phrase in `<em>`) and `outro`.
4. Check the boxes: open the page with `?debug=1`. Orange dashed boxes show every region; adjust until each one hugs its widget.
5. Timing: `intro`, `move` (camera travel), `hold` (seconds per highlight), `outroHold`. Leave at least 3 s of hold so viewers can read each callout.
6. Render: `node scripts/render_video.mjs feature-spotlight.html spotlight.mp4 --fps 30`.
The camera zooms each region up to 2.4×, with the rest of the screen dimmed under an Infinite Blue scrim, a Wasabi Green outline and a glass callout card. Never redraw or retouch the screenshot itself.

## HTML slides (previews / web)
`slides/*.html` are reference compositions (1920×1080) built with the React components in `components/` + `_ds_bundle.js` (namespace `ServiceNowDesignSystem_82fff6`). Use them as visual references. For PowerPoint delivery, always rebuild natively from the template rather than screenshotting HTML.

## File map
- `templates/ServiceNow_Corporate_Template_v2.3.pptx`: master template
- `templates/deck-outline.example.json`: outline format
- `templates/animation/brand-animation.html`: animation starter
- `templates/animation/feature-spotlight.html`: screenshot zoom-and-highlight video
- `scripts/`: `build_deck.py`, `enforce_slide_size.py`, `list_layouts.py`, `render_video.mjs`
- `reference/pptx-layouts.md`: layout catalogue and when to use each
- `tokens/`, `fonts/`, `assets/` (logos, backgrounds, icons, brand), `components/`, `slides/`

## Logos
- Dark backgrounds (default): `assets/logos/ServiceNow_logo_RGB_White_WasabiGreen.png` or `servicenow-wordmark-white*.svg`
- Light backgrounds: `assets/logos/ServiceNow_logo_RGB_BL_WasabiGreen.png`
- Never recolour, stretch or redraw the logo.
