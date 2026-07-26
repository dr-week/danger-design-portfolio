# 🚀 "Human on Grid" — Build Execution Plan

## ✅ Phase 1: Install MDX Dependencies
- [x] Run `npm install @next/mdx @mdx-js/loader @mdx-js/react`

## ✅ Phase 2: Update `src/app/layout.tsx`
- [ ] Replace Google Fonts @import with Next.js `Space_Grotesk` + `Caveat` font imports
- [ ] Add CSS variable class names (`--font-space-grotesk`, `--font-caveat`)
- [ ] Update body className: `font-sans bg-black text-white antialiased`

## ✅ Phase 3: Update `src/app/globals.css`
- [ ] Remove Google Fonts `@import url(...)`
- [ ] Update `--font-sans` to use `var(--font-space-grotesk)`

## ✅ Phase 4: Replace `src/components/Hero.tsx` → Hero3D content
- [ ] Inline Canvas with PresentationControls + Float
- [ ] Box mesh phone (1.5 x 3 x 0.2) with Html overlay ("YouTube Reel Loop")
- [ ] Background "DANGER DESIGN" large typography
- [ ] Bottom-left overlay: name + tagline

## ✅ Phase 5: Replace `src/components/ProjectCard.tsx`
- [ ] Interface: `{ title, client, category }` (strings)
- [ ] Static rotate -1.5°, fixes to 0 on hover (Framer Motion spring)
- [ ] Thumbnail placeholder div (h-48 bg-zinc-900)
- [ ] Category label, title, subtle client tag

## ✅ Phase 6: Replace `src/components/ProcessComparison.tsx` → ProcessSideBySide content
- [ ] Two-column grid: Raw Sketch | Final Polish (border-zinc-800 panels)
- [ ] Centered handwritten arrow SVG overlay with `note` prop
- [ ] Font-caveat for annotation text

## ✅ Phase 7: Update `src/components/ProcessSection.tsx`
- [ ] Replace ProcessComparison imports/usage with ProcessSideBySide

## ✅ Phase 8: Update `src/components/WorkSection.tsx`
- [ ] Simplify project data to match new ProjectCard interface (title, client, category)
- [ ] Pass category / client props correctly

## ✅ Phase 9: Verify `src/app/page.tsx`
- [ ] Ensure imports are correct (Hero from @/components/Hero still works since we replaced content)
- [ ] Verify all sections render properly

## ✅ Phase 10: Build test
- [ ] Run `npm run dev` and verify no compilation errors

