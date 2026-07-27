# DANGER DESIGN - ARCHITECTURE STATE

## 🔴 ACTIVE BUGS / PENDING FIXES
- [ ] **Asset Sync:** Ensure all local `public/graphics` and `public/videos` are populated and paths resolve correctly in production.

## 🟡 CURRENT SPRINT (PRE-DEPLOYMENT)
- [ ] **WebGL Kinematics Mapping:** Map Three.js lighting and camera FOV specs to `/lab` 3D rooms as defined in `ARCHITECTURE_PLAN.md`.
- [ ] **WebGL Shader Studio Preset Switcher:** Add interactive preset dropdown (`BRUTALIST THUNDERSTORM`, `CYBERPUNK NEON MATRIX`, `MONOCHROME GRAIN`) in `/lab`.
- [ ] **Production Resend API Integration:** Connect live `RESEND_API_KEY` for instant form notifications to `dishant.inbox@gmail.com`.

## 🟢 COMPLETED ARCHITECTURAL MODULES
- [x] **Tactile Custom Cursor Tracker:** Built `src/components/ui/CursorFollower.tsx` with spring-tracking dual-ring follower expanding on `data-cursor-hover` targets.
- [x] **14-Domain Portfolio Taxonomy:** Expanded `src/config/portfolio.ts` with all 14 domain systems (`SYSTEM_01` to `SYSTEM_14`) with technical specifications.
- [x] **Tactile Web Audio Engine:** Built `src/utils/audio.ts` for synthesized 1200Hz clicks & 120Hz sub-bass hums with `[ SFX: ON/OFF ]` HUD toggle in `Navbar.tsx`.
- [x] **Dynamic MDX Case Study Routes:** Built `src/app/work/[slug]/page.tsx` rendering dynamic case studies with blueprint vs render sliders & tech stack badges.
- [x] **Design Directive System:** Established foundational design language and narrative rules in `DESIGN_DIRECTIVE.md`.
- [x] **Master Architecture Plan:** Saved 10-point domain taxonomy & kinematic specifications into `ARCHITECTURE_PLAN.md`.
- [x] **WebGL Video Pipeline:** Created `scripts/sync-videos.js` using `yt-dlp` and `ffmpeg` with `-movflags +faststart` for zero-CORS WebGL video streaming.
- [x] **Adaptive 1920x1080 Phone Frame:** Scaled `Hero3D.tsx` phone canvas with physical scroll/swipe buttons (`▲ / ▼`) and script HUD text.
- [x] **5-Room WebGL Spatial Void:** Built 5 separated 3D rooms along Z-axis ($Z = 0$ to $Z = -80$) in `/lab` with volumetric clouds & stochastic lightning.
- [x] **Interactive Work System Breakdown Modal:** Added Framer Motion modal drawer to `WorkSection.tsx` for deep-dive technical specs.
- [x] **Mobile Navigation Drawer:** Added responsive `[ MENU ] / [ CLOSE ]` drawer to `Navbar.tsx`.
- [x] **CSS Viewport Architecture Audit:** Enforced `100svh`, `overflow-x-hidden`, and `w-full` across `layout.tsx`, `Hero3D.tsx`, `WorkSection.tsx`, `DevRange.tsx`, and `/lab`.
- [x] **Hydration Warning Safety:** Added `suppressHydrationWarning` to `<html>` and `<body>` tags in `layout.tsx`.
- [x] **Safe Dev Server Protocol:** Documented process rules in `SKILL.md`.
