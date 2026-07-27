# DANGER DESIGN - ARCHITECTURE STATE

## 🔴 ACTIVE BUGS / PENDING FIXES
- [ ] **Execute Viewport Sizing Audit:** Verify 100svh and overflow-x-hidden across all responsive break points in layout.tsx and Hero3D.tsx.
- [ ] **Asset Sync:** Ensure all local `public/graphics` and `public/videos` are populated and paths resolve correctly in production.

## 🟡 CURRENT SPRINT (PRE-DEPLOYMENT)
- [ ] **Build Domain-First Data Schema:** Expand `src/config/portfolio.ts` to include the 10 new anonymous sectors (Automotive, F&B, SaaS, Architecture, Topography, Theatrical, Apparel, Episodic, Additive, Interactive).
- [ ] **WebGL Kinematics:** Map Three.js lighting and camera FOV specs to the new category grids as defined in `ARCHITECTURE_PLAN.md`.
- [ ] **Dynamic MDX Case Study Routes:** Build deep-dive `/work/[slug]` pages for each domain system.
- [ ] **Spatial Web Audio Sound FX Engine:** Implement zero-dependency `Web Audio API` click & hum sound effects with `[ SFX: ON/OFF ]` HUD toggle in `Navbar.tsx`.
- [ ] **Production Resend API Integration:** Connect live `RESEND_API_KEY` for instant form notifications to `dishant.inbox@gmail.com`.

## 🟢 COMPLETED ARCHITECTURAL MODULES
- [x] **Design Directive System:** Established foundational design language and narrative rules in `DESIGN_DIRECTIVE.md`.
- [x] **Master Architecture Plan:** Saved 10-point domain taxonomy & kinematic specifications into `ARCHITECTURE_PLAN.md`.
- [x] **WebGL Video Pipeline:** Created `scripts/sync-videos.js` using `yt-dlp` and `ffmpeg` with `-movflags +faststart` for zero-CORS WebGL video streaming.
- [x] **Domain-First Portfolio Taxonomy:** Stripped all brand/client text strings in `src/config/portfolio.ts` for clean technical discipline focus.
- [x] **Adaptive 1920x1080 Phone Frame:** Scaled `Hero3D.tsx` phone canvas with physical scroll/swipe buttons (`▲ / ▼`) and script HUD text.
- [x] **5-Room WebGL Spatial Void:** Built 5 separated 3D rooms along Z-axis ($Z = 0$ to $Z = -80$) in `/lab` with volumetric clouds & stochastic lightning.
- [x] **Interactive Work System Breakdown Modal:** Added Framer Motion modal drawer to `WorkSection.tsx` for deep-dive technical specs.
- [x] **Mobile Navigation Drawer:** Added responsive `[ MENU ] / [ CLOSE ]` drawer to `Navbar.tsx`.
- [x] **CSS Viewport Architecture Audit:** Enforced `100svh`, `overflow-x-hidden`, and `w-full` across `layout.tsx`, `Hero3D.tsx`, `WorkSection.tsx`, `DevRange.tsx`, and `/lab`.
- [x] **Hydration Warning Safety:** Added `suppressHydrationWarning` to `<html>` and `<body>` tags in `layout.tsx`.
- [x] **Safe Dev Server Protocol:** Documented process rules in `SKILL.md`.
