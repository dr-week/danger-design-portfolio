# 01_ARCHITECTURE // DOMAIN TAXONOMY & REFERENCE INSPIRATION ARCHITECTURE

Master reference guide for WebGL camera angles, lighting models, Framer Motion kinematics, and reference inspiration architecture.

---

## 🎨 SIGNATURE REFERENCE INSPIRATION ARCHITECTURE

### 1. The Brush / Texture Reveal (Inspired by Monogrid)
* **Effect:** Organic brush stroke / ink-bleed texture masks and reveals underlying graphics on scroll.
* **Engineering:** WebGL custom fragment shader or HTML5 canvas alpha mask (`globalCompositeOperation`). Scroll velocity drives expansion radius of brush coordinates to erode dark overlay color.

### 2. Frame Scaling on Scroll (Inspired by Artem Artem)
* **Effect:** Media frame starts nested/compact (`scale: 0.75, borderRadius: 24px`) and physically expands to full-bleed (`scale: 1.0, borderRadius: 0px`) on scroll.
* **Engineering:** Powered by Framer Motion `useScroll` and `useTransform` (`scrollYProgress` mapped from `[0, 0.5]` to `scale: [0.75, 1]`).

### 3. Vertical-to-Horizontal Scroll Shift (Inspired by Normal is Boring)
* **Effect:** Vertical scrolling transitions into a pinned horizontal carousel before resuming vertical flow.
* **Engineering:** Locked `h-[300vh]` parent container with sticky `h-screen overflow-hidden` child. Inner track translates along X-axis (`x: [0, -2000]`) mapped to vertical `scrollYProgress`.

### 4. Dynamic Interactive Backgrounds (Inspired by Dragonfly)
* **Effect:** Fluid, responsive background field or ASCII dot-matrix reacting in real time to mouse coordinates and scroll velocity.
* **Engineering:** Full-screen R3F background plane running GLSL simplex noise shader (`u_time, u_mouse, u_scrollVelocity`). High scroll velocity spikes distortion frequency; idle state settles into organic waves.

---

## 📐 14-DOMAIN TAXONOMY & KINEMATIC SPECIFICATIONS

### SYSTEM_01 // MOTION & CGI
* **Camera:** Low-angle tracking shot.
* **Lighting:** Directional specular highlights.
* **Kinematics:** Exponential ease-out.

### SYSTEM_02 // SPATIAL CGI
* **Camera:** Wide-angle bottom-up perspective.
* **Lighting:** Volumetric god rays.
* **Kinematics:** Linear Z-axis push.

### SYSTEM_03 // BRAND SYSTEMS
* **Camera:** Flat orthographic grid.
* **Lighting:** Studio softbox ambient.
* **Kinematics:** Staggered grid snap.

### SYSTEM_04 // UI/UX ENGINEERING
* **Camera:** Orthographic 2D plane.
* **Lighting:** Cool rim lighting (`#4fc3f7`).
* **Kinematics:** Critically damped spring (`mass: 1.2, stiffness: 350, damping: 40`).

### SYSTEM_05 // AUTOMOTIVE KINEMATICS
* **Camera:** Low-angle tracking, high Field of View (FOV).
* **Lighting:** Harsh directional specular highlights (simulating metallic clear-coat reflections).
* **Kinematics:** High-velocity exponential ease-out (fast entry, long deceleration).

### SYSTEM_06 // GASTRONOMY & HOSPITALITY
* **Camera:** Macro perspective, extreme Depth of Field (DoF) blurring the background.
* **Lighting:** Warm ambient point lights (`#ffb74d`), soft shadows.
* **Kinematics:** Slow, fluid sine-wave drift (organic movement).

### SYSTEM_07 // INTERFACE DYNAMICS
* **Camera:** Orthographic projection (flat 2D plane in 3D space).
* **Lighting:** Cool rim lighting (`#4fc3f7`), zero shadows.
* **Kinematics:** Critically damped springs (stiffness: 400, damping: 40). Instant, rigid snaps.

### SYSTEM_08 // VOLUMETRIC ARCHITECTURE
* **Camera:** Wide-angle, bottom-up perspective (simulating scale).
* **Lighting:** Volumetric sun rays (God rays) intersecting geometries.
* **Kinematics:** Slow, continuous linear tracking shot (Z-axis push).

### SYSTEM_09 // GLOBAL TOPOGRAPHY
* **Camera:** Aerial/Drone top-down perspective.
* **Lighting:** Dynamic daylight cycle (shifting hemisphere light from dawn to dusk).
* **Kinematics:** Easing mapped directly to scroll velocity (smooth scrub).

### SYSTEM_10 // THEATRICAL ANIMATRONICS
* **Camera:** Static stage perspective, dead center.
* **Lighting:** Heavy, intersecting volumetric spotlights against a pitch-black void.
* **Kinematics:** Pendulum/string physics (oscillating X/Y rotation on hover).

### SYSTEM_11 // EDITORIAL APPAREL
* **Camera:** Studio portrait distance, 85mm lens equivalent.
* **Lighting:** High-contrast strobe intervals (flashing point lights on scroll trigger).
* **Kinematics:** Sharp, staggered character reveals and grid snaps.

### SYSTEM_12 // EPISODIC CINEMATOGRAPHY
* **Camera:** Anamorphic lens distortion (2.35:1 aspect ratio), subtle dolly zoom (Vertigo effect).
* **Lighting:** Moody, low-key lighting with split complementary colors (teal/orange).
* **Kinematics:** Cinematic ease-in-out (`cubic-bezier(0.65, 0, 0.35, 1)`).

### SYSTEM_13 // ADDITIVE MANUFACTURING
* **Camera:** Isometric 45-degree angle.
* **Lighting:** UV grid emission lighting.
* **Kinematics:** Layer-by-layer staircase easing (stepped reveals).

### SYSTEM_14 // INTERACTIVE ENGINE
* **Camera:** First-person, free-look node.
* **Lighting:** Chaotic, high-intensity RGB point lights tied to physics collisions.
* **Kinematics:** Unbound physics (mass, gravity, and drag calculations).
