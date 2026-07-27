"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode } from "react";

interface OrbitalBadgeProps {
  children: ReactNode;
  className?: string;
}

export function OrbitalBadge({ children, className = "" }: OrbitalBadgeProps) {
  const { scrollY } = useScroll();

  // Opposing Parallax: moves upward/downward inversely (-0.2 speed)
  const yOpposing = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <motion.div
      style={{ y: yOpposing }}
      animate={{
        x: [0, 8, 0, -8, 0],
        rotate: [0, 2, 0, -2, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`inline-block select-none ${className}`}
    >
      {children}
    </motion.div>
  );
}
