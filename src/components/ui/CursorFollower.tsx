"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorFollower() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      let targetX = e.clientX;
      let targetY = e.clientY;
      let hovered = false;

      const target = e.target as HTMLElement | null;
      const interactiveEl = target?.closest("[data-cursor-hover], button, a") as HTMLElement | null;

      if (interactiveEl) {
        const rect = interactiveEl.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Magnetic Attraction Radius (60px)
        if (dist < 60) {
          targetX = e.clientX + (centerX - e.clientX) * 0.45;
          targetY = e.clientY + (centerY - e.clientY) * 0.45;
        }

        hovered = true;
      }

      setPosition({ x: targetX, y: targetY });
      setIsHovered(hovered);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none">
      {/* Magnetic Outer Spring Ring */}
      <motion.div
        animate={{
          x: position.x - (isHovered ? 24 : 16),
          y: position.y - (isHovered ? 24 : 16),
          scale: isHovered ? 1.5 : 1,
          borderColor: isHovered ? "#f59e0b" : "rgba(255, 255, 255, 0.4)",
        }}
        transition={{ type: "spring", stiffness: 450, damping: 28, mass: 0.5 }}
        className="absolute w-8 h-8 rounded-full border border-white/40 flex items-center justify-center mix-blend-difference"
      />

      {/* Magnetic Center Target Dot */}
      <motion.div
        animate={{
          x: position.x - 3,
          y: position.y - 3,
          backgroundColor: isHovered ? "#f59e0b" : "#ffffff",
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 40 }}
        className="absolute w-1.5 h-1.5 rounded-full bg-white mix-blend-difference"
      />
    </div>
  );
}
