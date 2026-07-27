"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { toggleSFX, isSFXEnabled, playClickSound } from "@/utils/audio";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sfxOn, setSfxOn] = useState(true);

  const handleToggleSFX = () => {
    const nextState = toggleSFX();
    setSfxOn(nextState);
    if (nextState) playClickSound();
  };

  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-zinc-900"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Logo / Wordmark */}
        <Link 
          href="/" 
          onClick={playClickSound}
          data-cursor-hover
          className="font-black text-lg tracking-tighter text-white hover:text-amber-400 transition-colors uppercase"
        >
          DANGER<span className="text-zinc-500">.DESIGN</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-zinc-400">
          <a href="#work" onClick={playClickSound} data-cursor-hover className="hover:text-white transition-colors">
            // WORK
          </a>
          <a href="#dev" onClick={playClickSound} data-cursor-hover className="hover:text-white transition-colors">
            // DEV_RANGE
          </a>
          <Link href="/lab" onClick={playClickSound} data-cursor-hover className="text-amber-400 hover:text-white transition-colors font-bold">
            // WEBGL_LAB
          </Link>
          <a href="#contact" onClick={playClickSound} data-cursor-hover className="hover:text-white transition-colors">
            // CONTACT
          </a>
        </nav>

        <div className="flex items-center gap-3">
          {/* SFX Audio Engine HUD Toggle */}
          <button
            onClick={handleToggleSFX}
            className="font-mono text-[10px] text-amber-400 border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 uppercase tracking-wider hover:bg-amber-400 hover:text-black transition-colors"
            title="Toggle Web Audio SFX"
          >
            [ SFX: {sfxOn ? "ON" : "OFF"} ]
          </button>

          {/* Live Availability Status Indicator */}
          <div className="hidden sm:flex items-center gap-2 border border-zinc-800 bg-zinc-950 px-3 py-1.5 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-[10px] text-zinc-300 uppercase tracking-wider">
              AVAILABLE 2026
            </span>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => {
              playClickSound();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden font-mono text-xs text-amber-400 border border-zinc-800 bg-zinc-900 px-3 py-1 rounded"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? "[ CLOSE ]" : "[ MENU ]"}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-950 border-b border-zinc-800 px-6 py-6 font-mono text-xs uppercase tracking-widest space-y-4"
          >
            <a 
              href="#work" 
              onClick={() => {
                playClickSound();
                setMobileMenuOpen(false);
              }}
              className="block text-zinc-300 hover:text-amber-400"
            >
              // WORK_ARCHIVE
            </a>
            <a 
              href="#dev" 
              onClick={() => {
                playClickSound();
                setMobileMenuOpen(false);
              }}
              className="block text-zinc-300 hover:text-amber-400"
            >
              // DEV_RANGE
            </a>
            <Link 
              href="/lab" 
              onClick={() => {
                playClickSound();
                setMobileMenuOpen(false);
              }}
              className="block text-amber-400 font-bold"
            >
              // WEBGL_LAB (3D)
            </Link>
            <a 
              href="#contact" 
              onClick={() => {
                playClickSound();
                setMobileMenuOpen(false);
              }}
              className="block text-zinc-300 hover:text-amber-400"
            >
              // CONTACT
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
