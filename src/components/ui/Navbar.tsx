"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Volume2, VolumeX, Menu, X, Terminal } from "lucide-react";
import { toggleSFX, isSFXEnabled, playClickSound } from "@/utils/audio";
import ThemeSwitcher from "./ThemeSwitcher";

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
      className="fixed top-0 left-0 w-full z-50 bg-bg/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Logo / Wordmark */}
        <Link 
          href="/" 
          onClick={playClickSound}
          data-cursor-hover
          className="font-black text-lg tracking-tighter text-text-primary hover:text-accent transition-colors uppercase flex items-center gap-2"
        >
          <Terminal className="w-5 h-5 text-accent" />
          <span>DANGER<span className="text-text-secondary">.DESIGN</span></span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-text-secondary">
          <a href="#work" onClick={playClickSound} data-cursor-hover className="hover:text-text-primary transition-colors">
            // WORK
          </a>
          <a href="#dev" onClick={playClickSound} data-cursor-hover className="hover:text-text-primary transition-colors">
            // DEV_RANGE
          </a>
          <Link href="/cv" onClick={playClickSound} data-cursor-hover className="text-amber-400 font-bold hover:text-white transition-colors">
            // DEV_CV
          </Link>
          <Link href="/lab" onClick={playClickSound} data-cursor-hover className="text-accent hover:text-text-primary transition-colors font-bold">
            // WEBGL_LAB
          </Link>
          <a href="#contact" onClick={playClickSound} data-cursor-hover className="hover:text-text-primary transition-colors">
            // CONTACT
          </a>
        </nav>

        <div className="flex items-center gap-3">
          {/* Theme Switcher & Experience Customizer */}
          <ThemeSwitcher />

          {/* SFX Audio Engine HUD Toggle */}
          <button
            onClick={handleToggleSFX}
            className="font-mono text-[10px] text-accent border border-accent/30 bg-accent/10 px-2.5 py-1.5 uppercase tracking-wider hover:bg-accent hover:text-bg transition-colors flex items-center gap-1.5 rounded-md"
            title="Toggle Web Audio SFX"
          >
            {sfxOn ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span>[ SFX: {sfxOn ? "ON" : "OFF"} ]</span>
          </button>

          {/* Live Availability Status Indicator */}
          <div className="hidden sm:flex items-center gap-2 border border-border bg-surface px-3 py-1.5 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-[10px] text-text-primary uppercase tracking-wider">
              AVAILABLE 2026
            </span>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => {
              playClickSound();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden font-mono text-xs text-accent border border-border bg-surface px-2.5 py-1.5 rounded-md flex items-center gap-1"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
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
            className="md:hidden bg-surface border-b border-border px-6 py-6 font-mono text-xs uppercase tracking-widest space-y-4"
          >
            <a 
              href="#work" 
              onClick={() => {
                playClickSound();
                setMobileMenuOpen(false);
              }}
              className="block text-text-primary hover:text-accent"
            >
              // WORK_ARCHIVE
            </a>
            <a 
              href="#dev" 
              onClick={() => {
                playClickSound();
                setMobileMenuOpen(false);
              }}
              className="block text-text-primary hover:text-accent"
            >
              // DEV_RANGE
            </a>
            <Link 
              href="/cv" 
              onClick={() => {
                playClickSound();
                setMobileMenuOpen(false);
              }}
              className="block text-amber-400 font-bold hover:text-white"
            >
              // DEV_CV (RESUME)
            </Link>
            <Link 
              href="/lab" 
              onClick={() => {
                playClickSound();
                setMobileMenuOpen(false);
              }}
              className="block text-accent font-bold"
            >
              // WEBGL_LAB (3D)
            </Link>
            <a 
              href="#contact" 
              onClick={() => {
                playClickSound();
                setMobileMenuOpen(false);
              }}
              className="block text-text-primary hover:text-accent"
            >
              // CONTACT
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
