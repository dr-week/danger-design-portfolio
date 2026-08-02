"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Palette, Check } from "lucide-react";
import { playClickSound } from "@/utils/audio";
import { motion, AnimatePresence } from "framer-motion";

const ACCENT_COLORS = [
  { id: "purple", name: "Nebula Purple", value: "#6c5ce7", muted: "rgba(108, 92, 231, 0.15)" },
  { id: "amber", name: "Danger Amber", value: "#f59e0b", muted: "rgba(245, 158, 11, 0.15)" },
  { id: "emerald", name: "Cyber Emerald", value: "#10b981", muted: "rgba(16, 185, 129, 0.15)" },
  { id: "blue", name: "Deep Blue", value: "#3b82f6", muted: "rgba(59, 130, 246, 0.15)" },
  { id: "rose", name: "Neo Rose", value: "#f43f5e", muted: "rgba(244, 63, 94, 0.15)" },
];

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [currentAccent, setCurrentAccent] = useState("purple");

  useEffect(() => {
    setMounted(true);
    const savedAccent = localStorage.getItem("user-accent") || "purple";
    setCurrentAccent(savedAccent);
    applyAccent(savedAccent);
  }, []);

  const applyAccent = (accentId: string) => {
    const accent = ACCENT_COLORS.find((c) => c.id === accentId) || ACCENT_COLORS[0];
    const root = document.documentElement;
    root.style.setProperty("--accent", accent.value);
    root.style.setProperty("--accent-muted", accent.muted);
    localStorage.setItem("user-accent", accentId);
    setCurrentAccent(accentId);
  };

  if (!mounted) return null;

  return (
    <div className="relative font-mono text-xs">
      {/* Trigger Button */}
      <button
        onClick={() => {
          playClickSound();
          setIsOpen(!isOpen);
        }}
        className="font-mono text-[10px] text-text-primary border border-border bg-surface px-2.5 py-1.5 uppercase tracking-wider hover:bg-accent hover:text-white transition-colors flex items-center gap-1.5 rounded-md"
        title="Customize Theme & Colors"
      >
        <Palette className="w-3.5 h-3.5" />
        <span>CUSTOMIZE</span>
      </button>

      {/* Preferences Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay to close */}
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-64 bg-surface border border-border p-4 rounded-lg shadow-xl z-50 space-y-4"
            >
              <h3 className="text-[10px] uppercase tracking-widest text-text-secondary border-b border-border pb-1.5 font-bold">
                Customize Experience
              </h3>

              {/* Theme Selector */}
              <div className="space-y-2">
                <span className="text-[9px] uppercase tracking-wider text-text-secondary block">
                  Appearance
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      playClickSound();
                      setTheme("light");
                    }}
                    className={`flex items-center justify-center gap-1.5 py-1.5 rounded border transition-colors ${
                      theme === "light"
                        ? "border-accent bg-accent/10 text-accent font-bold"
                        : "border-border hover:bg-accent/5 text-text-primary"
                    }`}
                  >
                    <Sun className="w-3.5 h-3.5" />
                    <span>LIGHT</span>
                  </button>
                  <button
                    onClick={() => {
                      playClickSound();
                      setTheme("dark");
                    }}
                    className={`flex items-center justify-center gap-1.5 py-1.5 rounded border transition-colors ${
                      theme === "dark"
                        ? "border-accent bg-accent/10 text-accent font-bold"
                        : "border-border hover:bg-accent/5 text-text-primary"
                    }`}
                  >
                    <Moon className="w-3.5 h-3.5" />
                    <span>DARK</span>
                  </button>
                </div>
              </div>

              {/* Accent Color Selector */}
              <div className="space-y-2">
                <span className="text-[9px] uppercase tracking-wider text-text-secondary block">
                  Accent Color
                </span>
                <div className="grid grid-cols-5 gap-2">
                  {ACCENT_COLORS.map((accent) => (
                    <button
                      key={accent.id}
                      onClick={() => {
                        playClickSound();
                        applyAccent(accent.id);
                      }}
                      className="w-8 h-8 rounded-full border border-border flex items-center justify-center relative transition-transform hover:scale-110"
                      style={{ backgroundColor: accent.value }}
                      title={accent.name}
                    >
                      {currentAccent === accent.id && (
                        <Check className="w-4 h-4 text-white drop-shadow-md" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
