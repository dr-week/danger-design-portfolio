"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ReactNode } from "react";

interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number; // kv speed multiplier: 0.1 deep bg, 0.4 base typography, 1.0 midground, 1.5 foreground, -0.2 opposing
  className?: string;
}

export function ParallaxLayer({ children, speed = 1.0, className = "" }: ParallaxLayerProps) {
  const { scrollY } = useScroll();

  // Calculate raw physical Y translation based on scroll depth factor
  const rawY = useTransform(scrollY, (latest) => latest * (1 - speed));

  // Smooth out transformation using critically damped physical spring
  const smoothY = useSpring(rawY, { mass: 0.8, stiffness: 350, damping: 35 });

  return (
    <motion.div style={{ y: smoothY }} className={className}>
      {children}
    </motion.div>
  );
}
