# 03_ACTIVE_SPRINT // DYNAMIC TASK TRACKER

## 🔴 ACTIVE BUGS / PENDING TASKS
- [ ] **PHASE 2: WEBGL LIGHTING & KINEMATICS (`/lab` R3F Canvas):**
  - Implement dynamic `<SpotLight>` components from `@react-three/drei` tracking 3D geometries on scroll.
  - Tie Z-axis position of foreground elements directly to scroll velocity.
  - Inject deep cosmic point-cloud starfield background at Z = -100.
  - Prototype **GLSL Simplex Noise Background Shader (Dragonfly Pattern)**.
- [ ] **Production Resend API Integration:** Connect live `RESEND_API_KEY` for instant form notifications to `dishant.inbox@gmail.com`.
- [ ] **Production Build Audit:** Verify Turbopack build bundle cleared size limits before deployment.

## 🟢 ARCHIVED / COMPLETED TASKS
- [x] **DYNAMIC ASCII ART & VIDEO MATRIX BACKGROUND ENGINE (Dragonfly.xyz Pattern):** Built `src/components/ui/AsciiMatrixBackground.tsx` rendering dynamic HTML5 Canvas ASCII text streams (`. : * = + # @`). Mapped character density and wave distortion to mouse coordinates and scroll velocity. Mounted into `Hero3D.tsx` with `[ ASCII: ON/OFF ]` HUD toggle.
- [x] **FREE ASSET & ANIMATION SYNC PIPELINE (`scripts/sync-assets.js`):** Built automated asset sync pipeline verifying `public/animations/` and `public/textures/`. Added `"sync-assets": "node scripts/sync-assets.js"` to `package.json`.
- [x] **MULTI-ENVIRONMENT DISCOVERY SCROLL SEQUENCE:**
  - **Compact Bento Grid (`WorkSection.tsx`):** Slimmed down header padding (`py-10`) and cards into a compact 4-column Bento grid.
  - **Environment 01: Automotive Kinematics (`AutomotiveSection.tsx`):** Built metallic dark track atmosphere with low-angle specular spotlights, motion trail overlay animations, and frame scaling.
  - **Environment 02: Spatial Architecture (`ArchitectureSection.tsx`):** Built skyline & blueprint section with dynamic moving cloud overlays, volumetric sunbeams, and wireframe grid lines.
  - **Environment 03: Gloomy Dev Engine Room (`DevRange.tsx`):** Upgraded pitch-black code section with dynamic GPU rain canvas, stochastic lightning flashes illuminating GitHub cards, and glowing light trails following scroll down.
  - **Environment 04: Pinned Horizontal Parallax with Lens Reveal (`HorizontalScrollSection.tsx`):** Upgraded horizontal scroll track with an interactive cursor lens reveal box that follows the mouse.
  - **Home Assembly (`src/app/page.tsx`):** Sequenced all 5 environments smoothly into main scroll flow.
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
