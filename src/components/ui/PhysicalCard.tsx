"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

// Damped harmonic oscillator kinematic spring engine
export const engineSpring = {
  type: "spring" as const,
  mass: 1.2,
  stiffness: 350,
  damping: 40,
  restDelta: 0.001, // Precision micro-movement settling
};

interface PhysicalCardProps {
  children: ReactNode;
  className?: string;
}

export function PhysicalCard({ children, className = "" }: PhysicalCardProps) {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={engineSpring}
      className={className}
    >
      {children}
    </motion.div>
  );
}
