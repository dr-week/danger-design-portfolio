# 🚀 "Human on Grid" — Build Execution Plan

## ✅ Phase 1: Install MDX Dependencies
- [x] Run `npm install @next/mdx @mdx-js/loader @mdx-js/react`

## ✅ Phase 2: Update `src/app/layout.tsx`
- [x] Replace Google Fonts @import with Next.js `Space_Grotesk` + `Caveat` font imports
- [x] Add CSS variable class names (`--font-space-grotesk`, `--font-caveat`)
- [x] Update body className: `font-sans bg-black text-white antialiased`

## ✅ Phase 3: Update `src/app/globals.css`
- [x] Remove Google Fonts `@import url(...)`
- [x] Update `--font-sans` to use `var(--font-space-grotesk)`

## ✅ Phase 4: Replace `src/components/Hero.tsx` → Hero3D content
- [x] Inline Canvas with PresentationControls + Float
- [x] Box mesh phone (1.5 x 3 x 0.2) with Html overlay ("YouTube Reel Loop")
- [x] Background "DANGER DESIGN" large typography
- [x] Bottom-left overlay: name + tagline

## ✅ Phase 5: Replace `src/components/ProjectCard.tsx`
- [x] Interface: `{ title, client, category }` (strings)
- [x] Static rotate -1.5°, fixes to 0 on hover (Framer Motion spring)
- [x] Thumbnail placeholder div (h-48 bg-zinc-900)
- [x] Category label, title, subtle client tag

## ✅ Phase 6: Replace `src/components/ProcessComparison.tsx` → ProcessSideBySide content
- [x] Two-column grid: Raw Sketch | Final Polish (border-zinc-800 panels)
- [x] Centered handwritten arrow SVG overlay with `note` prop
- [x] Font-caveat for annotation text

## ✅ Phase 7: Update `src/components/ProcessSection.tsx`
- [x] Replace ProcessComparison imports/usage with ProcessSideBySide

## ✅ Phase 8: Update `src/components/WorkSection.tsx`
- [x] Simplify project data to match new ProjectCard interface (title, client, category)
- [x] Pass category / client props correctly

## ✅ Phase 9: Verify `src/app/page.tsx`
- [x] Ensure imports are correct (Hero from @/components/Hero still works since we replaced content)
- [x] Verify all sections render properly

## ✅ Phase 10: Build test
- [x] Run `npm run dev` and verify no compilation errors

## ✅ Phase 11: Navbar + UI Polish
- [x] Create `src/components/ui/Navbar.tsx` — brutalist sticky bar with pulsing `AVAILABLE 2026` badge
- [x] Create `src/components/ui/TornDivider.tsx` — `aria-hidden` paper-tape divider
- [x] Create `src/components/ui/MarkerHighlight.tsx` — Framer Motion SVG underline
- [x] Create `src/components/ui/BrandLogos.tsx` — Simple Icons vector CDN strip
- [x] Update `src/app/page.tsx` to modern layout
- [x] Run `npx tsc --noEmit` — zero errors
- [x] Run `.\diagnose.ps1` — zero build errors

## ✅ Phase 12: v1 Polish Enhancements
- [x] Create `src/components/ui/WeatherCanvas.tsx` — 60fps 2D rain overlay
- [x] Create `src/components/ui/LampFocus.tsx` — selective card tilt with mouse tracking
- [x] Inject `<WeatherCanvas />` into `src/app/layout.tsx`
- [x] Update `src/components/sections/Hero3D.tsx` — auto-rotating headlines (5s crossfade) + clean CSS phone with tap-to-switch reel indicator + progress bar indicators
- [x] Remove Three.js dependency from Hero3D (lighter, faster compile: 1481 modules vs 2613)
- [x] Dev server running at `http://localhost:3000`

## ✅ Phase 13: Resend Email Contact API Route
- [x] Create `src/app/api/contact/route.ts` Next.js POST endpoint with Dev Mode fallback
- [x] Connect `ContactForm.tsx` to handle live API submissions with input validation and budget selection
- [x] Support `RESEND_API_KEY` & `CONTACT_EMAIL` in environment settings

## 🔲 Phase 14: Portfolio Case Studies & Media Assets
- [ ] Add preview image/video support to `ProjectCard.tsx`
- [ ] Populate work items with high quality project visual demos

## 🔲 Phase 15: SEO & OpenGraph Metadata
- [ ] Configure title tags, meta descriptions, OpenGraph, and Twitter cards in `src/app/layout.tsx`

## 🔲 Phase 16: Skill MD Documentation
- [ ] Create `SKILL.md` detailing brutalist design system & Next.js portfolio workflow pattern


