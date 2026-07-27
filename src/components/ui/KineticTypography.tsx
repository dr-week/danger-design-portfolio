"use client";

import { motion, useScroll, useVelocity, useTransform, useSpring } from "framer-motion";

interface KineticTypographyProps {
  text: string;
  className?: string;
}

export function KineticTypography({ text, className = "" }: KineticTypographyProps) {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  // Smooth scroll velocity to prevent jitter
  const smoothVelocity = useSpring(scrollVelocity, { damping: 45, stiffness: 350 });

  // Velocity-driven skew (max 5 degrees)
  const skewY = useTransform(smoothVelocity, [-1200, 1200], [5, -5]);

  return (
    <motion.div style={{ skewY }} className={`select-none pointer-events-none ${className}`}>
      <h1 className="text-[clamp(4rem,18vw,12rem)] font-black tracking-tighter uppercase leading-none text-center">
        {text}
      </h1>
    </motion.div>
  );
}
