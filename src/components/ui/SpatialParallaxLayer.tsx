"use client";

import { motion, useScroll, useVelocity, useTransform, useSpring } from "framer-motion";
import { ReactNode } from "react";

interface SpatialParallaxLayerProps {
  children: ReactNode;
  className?: string;
}

export function SpatialParallaxLayer({ children, className = "" }: SpatialParallaxLayerProps) {
  const { scrollY } = useScroll();

  // Track real-time scroll velocity
  const scrollVelocity = useVelocity(scrollY);

  // Smooth the velocity signal to prevent jitter
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });

  // Map velocity to dynamic physical skew angle (max 5 degrees)
  const skewVelocity = useTransform(smoothVelocity, [-1000, 1000], [5, -5]);

  // Map scroll position to Y parallax translation
  const yParallax = useTransform(scrollY, [0, 1000], [0, -150]);

  return (
    <motion.div style={{ y: yParallax, skewY: skewVelocity }} className={className}>
      {children}
    </motion.div>
  );
}
