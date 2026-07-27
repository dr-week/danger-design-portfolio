"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useVelocity, useTransform, useSpring } from "framer-motion";
import { playScrollFilterFrequency } from "@/utils/audio";

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

  useEffect(() => {
    return scrollVelocity.on("change", (latest) => {
      if (Math.abs(latest) > 400) {
        playScrollFilterFrequency(latest);
      }
    });
  }, [scrollVelocity]);

  return (
    <motion.div ref={containerRef} style={{ skewY }} className={className}>
      {children}
    </motion.div>
  );
}
