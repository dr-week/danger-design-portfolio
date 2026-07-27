# DANGER DESIGN // CREATIVE ENGINEERING & VISUAL DIRECTION PORTFOLIO

> High-frequency CGI visual direction, brutalist spatial architecture, and zero-latency WebGL interfaces. Built for high-tier clients and award-winning showcase performance.

---

## ⚡ TECH STACK & FRAMEWORK ARCHITECTURE

- **Framework:** Next.js 15.5 (App Router, Turbopack)
- **UI Runtime:** React 19, TypeScript 5.7+
- **Styling:** Tailwind CSS 4 (PostCSS plugin mode)
- **Motion & Kinematics:** Framer Motion 12, Lenis Scroll
- **3D & WebGL:** Three.js 0.174, `@react-three/fiber` 9, `@react-three/drei` 10, GPGPU Particle Engine
- **Audio Engine:** Zero-dependency Web Audio API SFX engine (`src/utils/audio.ts`)
- **Serverless Dispatch:** Resend SDK 6.18 (`api/contact/route.ts`)

---

## 🎬 THE 5-ACT NARRATIVE & VISUAL PACING HIERARCHY

```
[ ACT I: THE TRANSMISSION ]    --> Hero 3D Mobile Reel Carousel (Root `/`)
[ ACT II: THE ARCHIVE MATRIX ] --> 14-Domain Anonymized Taxonomies (`/systems`, `/culture`, `/spatial`)
[ ACT III: THE KINETIC CRUCIBLE] --> Automotive Skew & Architectural Sunbeam Monoliths
[ ACT IV: THE ENGINE ROOM ]    --> Systems Engineering, Rust LLM Orchestrator & Gloomy Rain
[ ACT V: SERVERLESS DISPATCH ] --> Direct Client Intake & Instant Project Dispatch
```

### Page-by-Page Feature Assignment Matrix

1. **Root (`/`) — Instant Authority Hook**
   - **Hero Component:** `Hero3D.tsx` (Adaptive 3D Mobile Phone Reel Carousel).
   - **Visual Effects:** 3D Mouse Tilt (`rotateX`/`rotateY`), Amber Backdrop Glow (`bg-amber-500/15 blur-3xl`), Multi-Drop Shadow, Non-Intrusive Ambient ASCII Matrix Overlay (`opacity-15`).
   - **Content:** Video editing reels & photography highlights from YouTube (@DishantNaik).
   - **Continuity:** Smooth scroll indicator leading down through the complete 5-Act Portfolio Narrative.

2. **Route (`/spatial`) — Spatial & Architecture**
   - **Atmosphere:** GPU Particle Rain Engine (`WeatherCanvas.tsx`), Thunderstorm point-lights, wide-aspect Bento grids, `FrameScaleScroll.tsx` (Artem Artem scaling), and `HorizontalScrollSection.tsx` (Normal is Boring lateral lens reveal).

3. **Route (`/culture`) — Culture & Brands**
   - **Atmosphere:** Dense CSS Bento Grids, organic Monogrid GLSL Ink/Brush Reveal Shaders (`BrushTextureRevealPlane.tsx`) on hover, high-contrast fashion & brand identity cuts.

4. **Route (`/systems`) — Systems & Logic**
   - **Atmosphere:** Rigid brutalist wireframe grid, orthographic camera angle, cyan rim lighting, state machine & additive print specs.

5. **Route (`/work/[slug]`) — Deep-Dive Case Studies**
   - **Atmosphere:** MDX Dynamic Case Study Routes, edge-to-edge media players, Lenis Virtual Momentum Parallax depth.

---

## 🛠️ LOCAL DEVELOPMENT

### Prerequisites
- **Node.js**: v18.0+
- **Package Manager**: `npm`

### Installation & Server Execution

```bash
# Clone the repository
git clone https://github.com/dr-week/danger-design-portfolio.git

# Change directory
cd danger-design-portfolio

# Install dependencies
npm install

# Run Turbopack development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🚀 GITHUB HOSTING & DEPLOYMENT GUIDE

### Option A: Deploy to GitHub Pages (Automated Workflow)

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete cinematic portfolio architecture"
   git push origin main
   ```
2. Enable GitHub Pages in your repository settings:
   - Go to **Settings > Pages**.
   - Under **Build and deployment**, select **GitHub Actions** as the source.
3. The `.github/workflows/deploy.yml` workflow will automatically build and deploy the Next.js static bundle to GitHub Pages.

### Option B: Deploy to Vercel (Recommended for Next.js App Router)

1. Import `dr-week/danger-design-portfolio` on [Vercel Dashboard](https://vercel.com).
2. Set Environment Variables:
   - `RESEND_API_KEY`: Your live Resend API key for instant email delivery to `dishant.inbox@gmail.com`.
3. Click **Deploy**. Vercel will build and host the Next.js App Router natively with 0 configuration required.

---

## 📁 REPOSITORY STRUCTURE

```
d:\CODES\DANGERDESIGN\
├── .github/workflows/
│   └── deploy.yml            # GitHub Actions Pages deployment workflow
├── .project_state/
│   ├── 01_ARCHITECTURE.md    # Core architecture & GPGPU offload rules
│   ├── 02_DESIGN_RULES.md    # Cinematic studio aesthetic standards
│   ├── 03_ACTIVE_SPRINT.md   # Sprint task tracker
│   └── 04_CONTENT_MAP.md     # Canonical per-route feature matrix
├── src/
│   ├── app/
│   │   ├── api/contact/      # Resend serverless email endpoint
│   │   ├── culture/          # Culture & Cinema domain route
│   │   ├── spatial/          # Spatial & Architecture domain route
│   │   ├── systems/          # Systems & Logic domain route
│   │   ├── work/[slug]/      # MDX dynamic case study routes
│   │   ├── layout.tsx        # Global fonts, Lenis, CursorFollower
│   │   └── page.tsx          # Master 5-Act Portfolio Narrative
│   ├── components/
│   │   ├── WorkSection.tsx   # 6-column Bento Grid taxonomy
│   │   ├── sections/         # Hero3D, Automotive, Architecture, DevRange, ContactSection
│   │   └── ui/               # AsciiMatrixBackground, BrushTextureRevealPlane,
│   │                         # FrameScaleScroll, HorizontalScrollSection, WeatherCanvas
│   ├── config/
│   │   └── portfolio.ts      # 14-Domain anonymized taxonomy data
│   └── utils/
│       └── audio.ts          # Web Audio API SFX engine
└── README.md
```

---

## 📜 LICENSE

Designed & Engineered by **Danger Design // @DishantNaik**. All rights reserved.
