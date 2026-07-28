"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { playClickSound } from "@/utils/audio";

export default function ArchitectureSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const skyTranslateY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const wireframeOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0.3, 0.8]);

  return (
    <section ref={containerRef} className="relative w-full min-h-[110vh] bg-black py-20 px-4 md:px-8 border-t border-zinc-900 overflow-hidden flex items-center justify-center select-none">
      {/* Dynamic Moving Clouds & Volumetric Sunbeams */}
      <motion.div style={{ y: skyTranslateY }} className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1920&q=80"
          alt="Volumetric Sunbeams"
          fill
          className="object-cover filter contrast-125"
        />
      </motion.div>

      {/* Main Structural Frame */}
      <div className="relative w-full max-w-7xl h-[78vh] bg-zinc-950/90 border-2 border-sky-500/50 p-6 md:p-10 flex flex-col justify-between overflow-hidden shadow-2xl z-10 backdrop-blur-md">
        
        {/* Animated Blueprint Wireframe Grid Overlay */}
        <motion.div
          style={{ opacity: wireframeOpacity }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-25 pointer-events-none z-10"
        />

        {/* Top Header Badge */}
        <div className="relative z-20 flex justify-between items-center">
          <div className="inline-flex items-center gap-2 bg-black/90 px-3 py-1 border border-sky-500/50 font-mono text-xs text-sky-400 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            3D ARCHITECTURAL VISUALIZATION
          </div>
          <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest border border-zinc-800 px-3 py-1">
            [ 3D VILLA RENDERS ]
          </span>
        </div>

        {/* Hero Architectural Render Image */}
        <div className="relative w-full h-80 md:h-[420px] bg-zinc-900 border border-zinc-800 my-4 overflow-hidden z-20">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
            alt="3D Architectural Renders & Walkthroughs"
            fill
            className="object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>

        {/* Bottom Details & Link */}
        <div className="relative z-20 flex flex-col md:flex-row md:items-end justify-between gap-4 pt-2">
          <div className="space-y-1">
            <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
              3D Villa Renders, Interiors & Drone Shoots
            </h3>
            <p className="font-mono text-xs text-zinc-400 max-w-xl">
              Photorealistic 3D interior renders, villa walk-through animations, and drone location shoots for real estate developers and resorts.
            </p>
          </div>

          <Link
            href="/work/spatial-arch-02"
            onClick={playClickSound}
            className="px-5 py-2 bg-sky-400 text-black font-mono text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors shadow-xl"
          >
            Inspect Blueprint →
          </Link>
        </div>
      </div>
    </section>
  );
}
