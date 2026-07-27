# 03_ACTIVE_SPRINT // DYNAMIC TASK TRACKER

## 🔴 ACTIVE BUGS / PENDING TASKS
- [ ] **Production Resend API Integration:** Connect live `RESEND_API_KEY` for instant form notifications to `dishant.inbox@gmail.com`.
- [ ] **Production Build Audit:** Verify Turbopack build bundle cleared size limits before deployment.

## 🟢 ARCHIVED / COMPLETED TASKS
- [x] **WebGL Kinematics Mapping:** Mapped Three.js lighting, camera FOVs, and multi-tint spotlights to `/lab` 3D rooms as defined in `01_ARCHITECTURE.md`.
- [x] **WebGL Shader Studio Preset Switcher:** Added interactive preset dropdown (`[ THUNDERSTORM ]`, `[ CYBERPUNK ]`, `[ MONOCHROME ]`) in `/lab` with sub-bass audio hum triggers.
- [x] **Viewport Sizing Audit:** Applied `100svh`, `overflow-x-hidden`, and `w-full` across `layout.tsx`, `Hero3D.tsx`, `WorkSection.tsx`, `DevRange.tsx`, and `/lab`.
- [x] **14-Domain Taxonomy Integration:** Expanded `src/config/portfolio.ts` with all 14 anonymous sectors (`SYSTEM_01` to `SYSTEM_14`) with technical specifications.
- [x] **Tactile Custom Cursor Tracker:** Built `src/components/ui/CursorFollower.tsx` with spring-tracking dual-ring follower expanding on `data-cursor-hover` targets.
- [x] **Tactile Web Audio Engine:** Built `src/utils/audio.ts` for synthesized 1200Hz clicks & 120Hz sub-bass hums with `[ SFX: ON/OFF ]` HUD toggle in `Navbar.tsx`.
- [x] **Dynamic MDX Case Study Routes:** Built `src/app/work/[slug]/page.tsx` rendering dynamic case studies with blueprint vs render sliders & tech stack badges.
- [x] **WebGL Video Pipeline:** Created `scripts/sync-videos.js` using `yt-dlp` and `ffmpeg` with `-movflags +faststart` for zero-CORS WebGL video streaming.
- [x] **Adaptive 1920x1080 Phone Frame:** Scaled `Hero3D.tsx` phone canvas with physical scroll/swipe buttons (`▲ / ▼`) and script HUD text.
- [x] **5-Room WebGL Spatial Void:** Built 5 separated 3D rooms along Z-axis ($Z = 0$ to $Z = -80$) in `/lab` with volumetric clouds & stochastic lightning.
- [x] **Hydration Warning Safety:** Added `suppressHydrationWarning` to `<html>` and `<body>` tags in `layout.tsx`.
