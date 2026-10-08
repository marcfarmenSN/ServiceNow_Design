# ServiceNow Design System

Brand foundations, assets and slide-scale components for **ServiceNow** — "the AI platform for business transformation." Built for design agents producing decks, social/banner assets, one-pagers and marketing mocks.

## Company & product context
ServiceNow positions itself beyond agentic AI to **autonomous workflows** that sense context, decide the right action and execute work across the enterprise — "without constant human intervention but never without human control." People interact through **ServiceNow Otto**, the unified AI experience across voice, chat, search, web and apps ("You start it. Otto finishes it.").

Four platform capabilities (each has a brand colour in diagrams):
- **Sense** (Indigo) — Workflow Data Fabric (450+ connected systems), data catalog, continuous asset discovery, RaptorDB Pro.
- **Decide** (Purple) — Context Engine grounded in CMDB and the enterprise graph; aligned, predictable, auditable decisions.
- **Act** (Blue) — Agent Orchestrator, Agent Studio, Agentic Playbooks, App Engine, Build Agent.
- **Secure** (Wasabi Green) — AI Control Tower; governs every human, machine and AI-agent identity.

Proof points used in copy: 100B workflows/year · 100K+ AI use cases · 90% of the Fortune 500 · leader in 36 market categories · 97% renewal rate · 20-year IT history.

## Sources
- Figma: **"ServiceNow Gradients_RGB.fig"** (mounted file; pages Gradients (58 frames: dark/mid × green/blue/indigo/purple × 7 sizes), Cover). Defines 4 variables (Infinity Blue, Wasabi Green, White, White-50%), **0 components, 0 text styles**.
- `uploads/ServiceNow_Corporate_Template_v2.3_14JUL2026.pptx` — theme colours, custom palette, type scale, 42 layouts, logos, backgrounds.
- `uploads/0_Icon_Library_ICON_AUG2025.pptx` — icon library (225 icons converted to SVG) + usage rules.
- `uploads/patterns-color.png`, `uploads/output.auto.jpg` — gradient guidance boards.
- 4 pitch-deck screenshots (four pillars, AI control tower, architecture, stats) → `assets/reference/`.
- `Short Pitch Deck.pptx` was listed but **not present** in uploads — its 3D renders (glass cylinders, sparkles, globe) are therefore missing.
- http://servicenow.com (not crawled).

---

## CONTENT FUNDAMENTALS
- **Voice:** confident, declarative, enterprise-grade. Short punchy sentences, often in pairs or triplets: "You start it. Otto finishes it." / "100 billion workflows a year. Powering over 100K AI use cases. For 90% of the Fortune 500."
- **We / you:** "we" = ServiceNow, "you/your" = the customer ("We give you enterprise context"). Never "I".
- **Contrast framing:** position against generic AI — "Most LLMs give you models trained on the internet. We give you enterprise context." "This is where most AI stops and ServiceNow keeps going."
- **"Because" argument cards:** noun + reason — "Data — because AI is only as good as the context it has." "Security — because autonomy without governance and control is chaos."
- **Casing:** Sentence case for titles and headlines ("Businesses need more than just intelligence"); Title Case for product names (AI Control Tower, Workflow Data Fabric, Agent Orchestrator). Mono labels are UPPERCASE. The literal chip "ANY" is uppercase.
- **Numbers:** big, rounded, with plus signs — 90%, 100K+, 100B+, 97%+. Pair with a two-line plain label.
- **Brand name:** "ServiceNow" (camel N) in copy; the logo is lowercase "servicenow".
- **Emoji:** never. No exclamation marks in headlines.
- **Closers:** aspirational two-liners — "ServiceNow has always been the system where work gets done. Now we're the platform where AI gets to work."

## VISUAL FOUNDATIONS
- **Colour:** Dark-first. Infinite Blue `#032D42` is the page. Wasabi Green `#63DF4E` is the signature accent (headline lead phrase, subheads, positive callouts, the "o" in the logo). Supporting brights Blue `#52B8FF`, Indigo `#7661FF`, Purple `#BF71F2`; each has Light / Mid / Dark steps (see `tokens/colors.css`). Bright Orange `#FFBC39` only for warnings/negative callouts. Theme order (charts): green, blue, indigo, purple, then lights. PowerPoint-generated tints are **not** brand colours.
- **Backgrounds:** never flat on hero surfaces — soft gradient fields. *Dark* = Infinite Blue + two 50% blurred glows (upper-right + lower-left); for brand marketing, **Dark Green is default**. *Mid* = saturated linear base (119°) + glows; for owned channels. Hue order encodes "single → multiple executions": Green → Blue → Indigo → Purple. Glow pairs: green (blue/green), blue (indigo/blue), indigo (purple/indigo), purple (indigo/purple). A diagonal extruded-column pattern variant exists for Mid (`assets/brand/gradient-patterns-mid.png`).
- **Type:** ServiceNow Sans. Titles Bold, PowerPoint line spacing 85% (= CSS line-height ≈1.02; never below 1.0 on multi-line titles so descenders clear the next line); body Light, line-height 100% with 10pt space-after. Scale (1920 canvas): 240 poster / 144 cover & statement / 120 quote / 80 title / 40 subtitle / 36·32·28 body levels / 24 card copy / 16 footer. Signature: **two-tone headlines** (accent lead phrase + white). Mono uppercase labels with wide tracking for axes/eyebrows.
- **Layout:** 1920×1080 grid, 86px side margins, title top 84, subtitle 173, content 283–308, gutter 28. Footer wordmark bottom-left (75,1001, 154×44); page number bottom-right (x 1742). Content is left-aligned; pitch slides center the headline between two rows of cards.
- **Cards:** rounded ≈23px (on 1920). Template card: Infinite Blue at 5% + 1px white hairline. Pitch "glass" card: translucent lighter gradient, soft white edge (~18%), 3D render bleeding off the right. No drop shadows; no coloured left borders.
- **Capsules:** "ANY x" pills — dark translucent capsule, white outline, bright green "ANY" chip. Layer pills in architecture diagrams use pastel fills with dark text.
- **Capability tiles:** hue-topped gradient columns (Sense indigo, Decide purple, Act blue, Secure green) with light-weight titles.
- **Imagery:** glossy 3D renders (glass, translucent green/blue/purple, sparkles, cubes), cool palette, glowing, on dark fields. Photography only on the "Thank you with photography" layout.
- **Transparency & blur:** glass cards and glows; backdrop blur is subtle. Protection comes from the dark field itself — no scrims.
- **Borders:** 1px (0.5pt) white hairlines; 2px white outlines on capsules.
- **Shadows:** essentially none; glow comes from the background.
- **Animation:** none specified in sources. Recommend calm fades/slides (200ms, ease-out `cubic-bezier(.2,0,0,1)`); no bounces.
- **Hover/press (web):** not specified in sources; recommend lightening to the Light tint on hover and slight opacity drop on press. Links: Wasabi Green → Light Wasabi on hover.
- **Corners:** cards ≈23px, capsules fully round, logo mark 5.61px.

## ICONOGRAPHY
- **System:** the ServiceNow Icon Library (Aug 2025) — two-tone pictograms, ~2px-equivalent outline in black/Infinite Blue with a solid **green accent** (`#62D84E`). 225 glyphs converted programmatically from the PPTX vector shapes into `assets/icons/<slug>.svg` (names in `assets/icons/index.json`) and bundled in the `Icon` component. Categories: return-to-workplace, industries, general business 1–6 (security, IT, CRM, people, media controls…).
- **Rules (from the library):** size 0.3in–0.65in on slides; don't enlarge into main graphics/illustrations; don't use an icon to represent a product or identity; don't change icon colours or use on a Wasabi Green background. Light and dark-background versions exist in the source; the SVGs use `currentColor` for the ink so set `color:#fff` on dark.
- Architecture diagrams additionally use glossy 3D mini-icons and partner logos (AWS, Azure, SAP, Salesforce, Workday…) — **not supplied**, do not redraw.
- No icon font, no emoji, no unicode-glyph icons (arrows in mono labels are drawn rules).

## Fonts
Self-hosted from `fonts/` via `tokens/fonts.css`:
- **ServiceNow Sans** — Thin 100, Light 300, Book 350, Regular 400, Medium 500, Bold 700 (all with italics). Body copy = Light; titles = Bold.
- **ServiceNow Sans Display** — Medium 500, Bold 700. Big headlines and stat numbers.
- **ServiceNow Mono** — Regular 400 (file: ServiceNowSansMono-Regular). Uppercase labels.

---

## Index
- `styles.css` — imports only. `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `layout.css`, `gradients.css`, `base.css`, `figma/fig-tokens.css` (Figma variables).
- `assets/logos/` — white wordmark SVG/PNG (green "o"), small wordmark, green mark. Only white-on-dark artwork exists.
- `assets/backgrounds/` — template gradient PNGs (cover/divider green·blue·indigo, content, weighted, demo, closing).
- `assets/brand/` — quote mark, gradient guidance boards. `assets/reference/` — pitch-deck screenshots. `assets/icons/` — 225 SVG icons.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `components/` — see below. `slides/` — sample slides (`index.html` overview).
- `SKILL.md` — Agent Skill entry point.

## Components
Namespace: `window.ServiceNowDesignSystem_82fff6`.
- `components/brand/` — **Logo**, **GradientBackground**, **Icon** (+ `ICON_NAMES`, `SN_ICONS`).
- `components/content/` — **Card**, **FeatureCard**, **StatCard**, **Pill**, **Headline**, **CapabilityTile**, **MonoLabel**.
- `components/slide/` — **SlideFrame**.

### Intentional additions
The Figma file defines no components, so this set is derived from the Corporate Template masters and pitch-deck screenshots:
- GradientBackground — codifies the Figma gradient frames as one parametric component.
- Icon — wrapper for the icon-library glyph set.
- Logo — renders the supplied logo SVGs.
- Card / FeatureCard / StatCard / Pill / Headline / CapabilityTile / MonoLabel / SlideFrame — recurring patterns in the template layouts and pitch slides.

## Slides
`slides/`: CoverSlide, TitleContentSlide, TwoColumnSlide, FiveCardsSlide, StatsSlide, PillarsSlide, PlatformSlide, QuoteSlide, StatementSlide, DividerSlide, ThankYouSlide.

## UI kits
None. The sources contain no product UI (only brand gradients, a deck template, icons and pitch screenshots), so no product screens were recreated.
