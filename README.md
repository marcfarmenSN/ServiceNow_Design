# ServiceNow Design — Claude plugin

On-brand ServiceNow **PowerPoint decks** and **animations** with Claude Code and Claude Desktop.

- Builds decks from the official **Corporate Template v2.3** (42 layouts)
- **Every PowerPoint is output at 13.33 × 7.5 in (custom size)**, enforced by `scripts/enforce_slide_size.py`
- Brand tokens, ServiceNow Sans fonts, logos, gradients and 225 icons
- HTML animation starter with MP4 export
- Feature spotlight videos: drop in a screenshot, Claude zooms and highlights each feature and renders an MP4

## Install: Claude Code
1. Push this folder to an internal Git repo (e.g. `github.com/<org>/servicenow-design-plugin`).
2. Each colleague runs:
   ```
   /plugin marketplace add <org>/servicenow-design-plugin
   /plugin install servicenow-design@servicenow-design-marketplace
   ```
3. Updates: push to the repo; colleagues run `/plugin marketplace update`.

Dependencies for full output: `pip install python-pptx`. For video, also `npm i playwright`, `npx playwright install chromium` and `ffmpeg`.

## Install: Claude Desktop / claude.ai
1. Zip the folder `skills/servicenow-design/` so `SKILL.md` sits at the top level of the zip.
2. Settings → Capabilities → Skills → Upload skill → choose the zip. Code execution must be on.
3. Team/Enterprise: an admin can provision the skill org-wide instead.

## Try it
- "Make a 10-slide ServiceNow deck on AI Control Tower for a CIO audience."
- "Turn these notes into a ServiceNow pitch deck." (attach notes)
- "Create a 15-second ServiceNow brand animation of our three proof points and export it as MP4."
- "Make a feature spotlight video from this dashboard screenshot. Highlight completion rate, entitlements processed and autonomous vs AI assisted." (attach screenshot)

## Structure
```
.claude-plugin/        plugin.json, marketplace.json
skills/servicenow-design/
  SKILL.md             procedure + hard rules (13.33 x 7.5 in)
  readme.md            full brand guide
  templates/           Corporate Template .pptx, outline example, animation starter
  scripts/             build_deck.py, enforce_slide_size.py, list_layouts.py, render_video.mjs
  reference/           layout catalogue
  tokens/ fonts/ assets/ components/ slides/
```

## Notes
- Keep this repo **internal**: fonts and template are licensed brand assets.
- Bump `version` in `.claude-plugin/plugin.json` and `marketplace.json` with each release.
