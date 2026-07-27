# DANGER DESIGN - DOMAIN TAXONOMY & KINEMATIC SPECIFICATIONS

Master reference guide for WebGL camera angles, lighting models, and Framer Motion kinematics across domain sectors.

---

### SYSTEM_05 // AUTOMOTIVE KINEMATICS
* **Camera:** Low-angle tracking, high Field of View (FOV).
* **Lighting:** Harsh directional specular highlights (simulating metallic clear-coat reflections).
* **Kinematics:** High-velocity exponential ease-out (fast entry, long deceleration).

### SYSTEM_06 // GASTRONOMY & HOSPITALITY
* **Camera:** Macro perspective, extreme Depth of Field (DoF) blurring the background.
* **Lighting:** Warm ambient point lights (`#ffb74d`), soft shadows.
* **Kinematics:** Slow, fluid sine-wave drift (organic movement).

### SYSTEM_07 // SAAS & INTERFACE DYNAMICS
* **Camera:** Orthographic projection (flat 2D plane in 3D space).
* **Lighting:** Cool rim lighting (`#4fc3f7`), zero shadows.
* **Kinematics:** Critically damped springs (stiffness: 400, damping: 40). Instant, rigid snaps.

### SYSTEM_08 // SPATIAL ARCHITECTURE
* **Camera:** Wide-angle, bottom-up perspective (simulating scale).
* **Lighting:** Volumetric sun rays (God rays) intersecting geometries.
* **Kinematics:** Slow, continuous linear tracking shot (Z-axis push).

### SYSTEM_09 // GLOBAL TOPOGRAPHY
* **Camera:** Aerial/Drone top-down perspective.
* **Lighting:** Dynamic daylight cycle (shifting hemisphere light from dawn to dusk).
* **Kinematics:** Easing mapped directly to scroll velocity (smooth scrub).

### SYSTEM_10 // THEATRICAL ANIMATRONICS (PUPPETRY)
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

### SYSTEM_13 // ADDITIVE MANUFACTURING (3D PRINT)
* **Camera:** Isometric 45-degree angle.
* **Lighting:** UV grid emission lighting.
* **Kinematics:** Layer-by-layer staircase easing (stepped reveals).

### SYSTEM_14 // INTERACTIVE ENGINE
* **Camera:** First-person, free-look node.
* **Lighting:** Chaotic, high-intensity RGB point lights tied to physics collisions.
* **Kinematics:** Unbound physics (mass, gravity, and drag calculations).
