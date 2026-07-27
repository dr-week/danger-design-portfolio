# DANGER DESIGN - ARCHITECTURE STATE

## 🔴 ACTIVE BUGS / PENDING TASKS (OPTIMIZED SPRINT SCHEDULE)
- [ ] **UNIFORM SQUARE MEDIA & ENVIRONMENTAL FILTERING:**
  - Enforce `aspect-square` across all Bento cards in `WorkSection.tsx` and `HorizontalScrollSection.tsx`.
  - Apply section-specific CSS filter presets (`sepia(30%)`, `contrast(130%)`, `hue-rotate(180deg)`).
- [ ] **MILESTONE 1: PACKAGE SUITE & KINETIC SKEW WING:**
  - Install `lucide-react`, `clsx`, `tailwind-merge`, `canvas-confetti`, `@types/canvas-confetti`, `three-stdlib`.
  - Create `src/utils/cn.ts` class merge helper.
  - Build `KineticSkewWrapper.tsx` for velocity-based `skewY` inertia transforms.
  - Upgrade `CursorFollower.tsx` with 60px magnetic attraction snapping.
  - Wire `canvas-confetti` trigger to `ContactForm.tsx`.
- [ ] **MILESTONE 2: PRODUCTION SERVERLESS DISPATCH:**
  - Connect live `RESEND_API_KEY` for instant form notifications to `dishant.inbox@gmail.com`.
- [ ] **MILESTONE 3: PRODUCTION BUILD AUDIT:**
  - Run `npx tsc --noEmit` and `npm run build` Turbopack audit.

## 🟢 ARCHIVED / COMPLETED TASKS
- [x] **ALL MD DOCUMENTATION SYNCHRONIZATION:** Updated `SKILL.md`, `ARCHITECTURE_PLAN.md`, `DESIGN_DIRECTIVE.md`, `CONTENT_PLAN.md`, `TODO.md`, and all `.project_state/` files.
- [x] **UNIFORM 1:1 SQUARE ASPECT RATIO:** Set `aspectRatio: "aspect-square"` across all 14 domain sectors in `src/config/portfolio.ts`.
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
- [x] **Tactile Custom Cursor Tracker:** Built `src/components/ui/CursorFollower.tsx` with spring-tracking dual-ring follower.
- [x] **Tactile Web Audio Engine:** Built `src/utils/audio.ts` for synthesized 1200Hz clicks & 120Hz sub-bass hums.
- [x] **Dynamic MDX Case Study Routes:** Built `src/app/work/[slug]/page.tsx` rendering dynamic case studies with blueprint vs render sliders.
- [x] **WebGL Video Pipeline:** Created `scripts/sync-videos.js` using `yt-dlp` and `ffmpeg`.
- [x] **Adaptive 1920x1080 Phone Frame:** Scaled `Hero3D.tsx` phone canvas with physical scroll/swipe buttons (`▲ / ▼`).
- [x] **5-Room WebGL Spatial Void:** Built 5 separated 3D rooms along Z-axis ($Z = 0$ to $Z = -80$) in `/lab`.
- [x] **Hydration Warning Safety:** Added `suppressHydrationWarning` to `<html>` and `<body>` tags in `layout.tsx`.
