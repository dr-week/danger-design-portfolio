"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-zinc-900"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Logo / Wordmark */}
        <Link 
          href="/" 
          data-cursor-hover
          className="font-black text-lg tracking-tighter text-white hover:text-amber-400 transition-colors uppercase"
        >
          DANGER<span className="text-zinc-500">.DESIGN</span>
        </Link>

        {/* Navigation Section Links */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-zinc-400">
          <a href="#work" data-cursor-hover className="hover:text-white transition-colors">
            // WORK
          </a>
          <a href="#dev" data-cursor-hover className="hover:text-white transition-colors">
            // DEV_RANGE
          </a>
          <Link href="/lab" data-cursor-hover className="text-amber-400 hover:text-white transition-colors font-bold">
            // WEBGL_LAB
          </Link>
          <a href="#contact" data-cursor-hover className="hover:text-white transition-colors">
            // CONTACT
          </a>
        </nav>

        {/* Live Availability Status Indicator */}
        <div className="flex items-center gap-2 border border-zinc-800 bg-zinc-950 px-3 py-1.5 rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-[10px] text-zinc-300 uppercase tracking-wider">
            AVAILABLE 2026
          </span>
        </div>
      </div>
    </motion.header>
  );
}

