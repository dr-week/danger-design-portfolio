# 03_ACTIVE_SPRINT // DYNAMIC TASK TRACKER

## 🔴 ACTIVE BUGS / PENDING TASKS (OPTIMIZED SPRINT SCHEDULE)
*Zero active bugs or pending tasks. Option 1 GLSL Brush Texture Reveal Shader fully implemented and verified.*

## 🟢 ARCHIVED / COMPLETED TASKS
- [x] **OPTION 1: MONOGRID GLSL BRUSH TEXTURE REVEAL SHADER:** Created `src/components/ui/BrushTextureRevealPlane.tsx` with custom GLSL vertex and fragment shaders (`snoise` simplex noise, `uScrollVelocity`, `uMouse` proximity brush strength). Mounted into Room 01 of WebGL spatial void in `/lab`.
- [x] **SPATIAL AUDIO FILTER FREQUENCY SCRUBBING (`src/utils/audio.ts`):** Built Web Audio API low-pass filter cutoff scrubbing helper scaling dynamically from 300Hz to 2400Hz based on scroll velocity.
- [x] **VELOCITY KINETIC SKEW PAGE WRAPPER (`KineticSkewWrapper.tsx`):** Wrapped main scroll environments in `src/app/page.tsx` with Framer Motion velocity skew transforms.
- [x] **LUCIDE-REACT ICON INTEGRATION:** Replaced raw text indicators in `Navbar.tsx` (`[ SFX: ON/OFF ]`) and `Hero3D.tsx` with crisp brutalist `lucide-react` icons (`Volume2`, `VolumeX`, `Terminal`, `Menu`, `X`).
- [x] **PRODUCTION RESEND API DISPATCH (`src/app/api/contact/route.ts`):** Configured live contact form handler to send incoming client briefs directly to `dishant.inbox@gmail.com`.
- [x] **PRODUCTION BUILD & TURBOPACK AUDIT:** Verified `npx tsc --noEmit` and Next.js Turbopack build bundle cleared all size limits with **0 errors**.
- [x] **MARKER HIGHLIGHT & FONT PAIRING (`MarkerHighlight.tsx`):** Built dynamic SVG path animation and hover background fill expansion for handwritten script callouts alongside geometric sans headlines.
- [x] **PACKAGE SUITE & CLASS MERGE UTILITY:** Installed `lucide-react`, `clsx`, `tailwind-merge`, `canvas-confetti`, `three-stdlib` and created `src/utils/cn.ts`.
- [x] **MAGNETIC ATTRACTION CURSOR TRACKER (`CursorFollower.tsx`):** Upgraded custom cursor with 60px magnetic attraction snapping physics.
- [x] **CONTACT FORM CONFETTI BURST (`ContactForm.tsx`):** Wired `canvas-confetti` particle explosion on successful form submission.
- [x] **UNIFORM SQUARE MEDIA & ENVIRONMENTAL FILTERING:** Enforced `aspect-square` across all 14 domain sectors in `src/config/portfolio.ts` and applied environmental sepia/contrast filter tinting.
- [x] **5-ACT CINEMATIC NARRATIVE STORY ARC:** Reframed entire portfolio text content into a 5-Act Narrative Arc ("The Director's Journey") across Hero, Bento Grid, Automotive, Architecture, Rain Code, and Lens Reveal sections.
- [x] **DYNAMIC ASCII ART & VIDEO MATRIX BACKGROUND ENGINE (Dragonfly.xyz Pattern):** Built `src/components/ui/AsciiMatrixBackground.tsx` rendering dynamic HTML5 Canvas ASCII text streams (`. : * = + # @`). Mapped character density and wave distortion to mouse coordinates and scroll velocity. Mounted into `Hero3D.tsx` with `[ ASCII: ON/OFF ]` HUD toggle.
- [x] **FREE ASSET & ANIMATION SYNC PIPELINE (`scripts/sync-assets.js`):** Built automated asset sync pipeline verifying `public/animations/` and `public/textures/`. Added `"sync-assets": "node scripts/sync-assets.js"` to `package.json`.
- [x] **MULTI-ENVIRONMENT DISCOVERY SCROLL SEQUENCE:** Compact Bento grid, Automotive section, Architecture section, Gloomy Rain storm section, and Horizontal Lens Reveal track.
- [x] **PHASE 1.5: SIGNATURE DOM SCROLL KINEMATICS:** Built Artem Artem frame scaling and Normal is Boring horizontal scroll shift.
- [x] **PHASE 1: THE BENTO BOX DOM ARCHITECTURE (`WorkSection.tsx`):** Refactored uniform layout into a dense 6-column Bento Box grid with variable column/row spans.
- [x] **WebGL Kinematics Mapping:** Mapped Three.js lighting, camera FOVs, and multi-tint spotlights to `/lab` 3D rooms as defined in `01_ARCHITECTURE.md`.
- [x] **WebGL Shader Studio Preset Switcher:** Added interactive preset dropdown (`[ THUNDERSTORM ]`, `[ CYBERPUNK ]`, `[ MONOCHROME ]`) in `/lab`.
- [x] **Viewport Sizing Audit:** Applied `100svh`, `overflow-x-hidden`, and `w-full` across `layout.tsx`, `Hero3D.tsx`, `WorkSection.tsx`, `DevRange.tsx`, and `/lab`.
- [x] **14-Domain Taxonomy Integration:** Expanded `src/config/portfolio.ts` with all 14 anonymous sectors (`SYSTEM_01` to `SYSTEM_14`).
- [x] **Tactile Web Audio Engine:** Built `src/utils/audio.ts` for synthesized 1200Hz clicks & 120Hz sub-bass hums.
- [x] **Dynamic MDX Case Study Routes:** Built `src/app/work/[slug]/page.tsx` rendering dynamic case studies with blueprint vs render sliders.
- [x] **WebGL Video Pipeline:** Created `scripts/sync-videos.js` using `yt-dlp` and `ffmpeg`.
- [x] **Adaptive 1920x1080 Phone Frame:** Scaled `Hero3D.tsx` phone canvas with physical scroll/swipe buttons (`▲ / ▼`).
- [x] **5-Room WebGL Spatial Void:** Built 5 separated 3D rooms along Z-axis ($Z = 0$ to $Z = -80$) in `/lab`.
- [x] **Hydration Warning Safety:** Added `suppressHydrationWarning` to `<html>` and `<body>` tags in `layout.tsx`.
