"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface FrameScaleScrollProps {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
}

export default function FrameScaleScroll({
  title = "SYSTEM_05 // AUTOMOTIVE KINEMATICS",
  subtitle = "High-velocity motion dynamics & metallic specular clear-coat reflections.",
  imageSrc = "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1920&q=80",
}: FrameScaleScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Scale from 0.75 nested frame to 1.0 full-bleed frame on scroll into view
  const scale = useTransform(scrollYProgress, [0.1, 0.5], [0.78, 1]);
  const borderRadius = useTransform(scrollYProgress, [0.1, 0.5], ["36px", "0px"]);
  const borderOpacity = useTransform(scrollYProgress, [0.1, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="relative w-full min-h-[120vh] bg-black py-16 flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ scale, borderRadius }}
        className="relative w-full max-w-7xl h-[75vh] bg-zinc-950 overflow-hidden shadow-2xl border border-zinc-800"
      >
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover object-center filter contrast-110"
        />

        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

        {/* Dynamic HUD Border Overlay */}
        <motion.div
          style={{ opacity: borderOpacity }}
          className="absolute inset-4 border-2 border-dashed border-amber-500/50 z-20 pointer-events-none rounded-[28px]"
        />

        {/* Content Badge & Overlay Title */}
        <div className="absolute bottom-10 left-8 right-8 z-30 flex flex-col md:flex-row md:items-end justify-between gap-6 pointer-events-none">
          <div className="space-y-2">
            <span className="font-mono text-xs text-amber-400 bg-black/80 backdrop-blur-md px-3 py-1 border border-zinc-800 uppercase tracking-widest inline-block">
              // ARTEM_ARTEM_FRAME_SCALING
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
              {title}
            </h2>
            <p className="font-mono text-sm text-zinc-300 max-w-xl">
              {subtitle}
            </p>
          </div>

          <div className="font-mono text-xs text-amber-400 bg-black/90 border border-zinc-800 px-3 py-1.5 uppercase tracking-widest self-start md:self-auto">
            [ SCALE_MATRIX: FULL_BLEED ]
          </div>
        </div>
      </motion.div>
    </div>
  );
}
