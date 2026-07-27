"use client";

import { useRef } from "react";
import { motion, useScroll, useVelocity, useTransform, useSpring } from "framer-motion";

interface KineticSkewWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function KineticSkewWrapper({ children, className = "" }: KineticSkewWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scrollVelocity = useVelocity(scrollY);
  
  // Map scroll velocity [-3000, 3000] to skew angle [-6, 6] degrees
  const skewRaw = useTransform(scrollVelocity, [-3000, 3000], [-6, 6]);
  const skewY = useSpring(skewRaw, { stiffness: 350, damping: 35 });

  return (
    <motion.div ref={containerRef} style={{ skewY }} className={className}>
      {children}
    </motion.div>
  );
}
