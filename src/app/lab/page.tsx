"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { playClickSound, playSwipeHum } from "@/utils/audio";
import type { ShaderPreset } from "@/components/LabScene";

const LabScene = dynamic(() => import("@/components/LabScene"), { ssr: false });

export default function LabPage() {
  const [preset, setPreset] = useState<ShaderPreset>("thunderstorm");

  const handleSelectPreset = (newPreset: ShaderPreset) => {
    playSwipeHum();
    setPreset(newPreset);
  };

  return (
    <main className="relative w-full h-[100svh] bg-black overflow-hidden select-none">
      {/* Top Overlay Bar */}
      <div className="absolute top-6 left-6 right-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 z-30 pointer-events-auto">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="font-mono text-xs text-white uppercase tracking-widest font-bold">
            DANGER_LAB // WEBGL_EXPERIMENTAL_ZONE (5 SPATIAL ROOMS)
          </span>
        </div>

        {/* Shader Studio Preset Switcher */}
        <div className="flex items-center gap-2 bg-zinc-950/90 border border-zinc-800 px-3 py-1.5 backdrop-blur-md">
          <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider mr-1">// SHADER_PRESET:</span>
          <button
            onClick={() => handleSelectPreset("thunderstorm")}
            className={`font-mono text-[10px] px-2 py-0.5 uppercase tracking-wider transition-colors ${
              preset === "thunderstorm" ? "bg-amber-400 text-black font-bold" : "text-zinc-400 hover:text-white"
            }`}
          >
            [ THUNDERSTORM ]
          </button>
          <button
            onClick={() => handleSelectPreset("cyberpunk")}
            className={`font-mono text-[10px] px-2 py-0.5 uppercase tracking-wider transition-colors ${
              preset === "cyberpunk" ? "bg-purple-500 text-white font-bold" : "text-zinc-400 hover:text-white"
            }`}
          >
            [ CYBERPUNK ]
          </button>
          <button
            onClick={() => handleSelectPreset("monochrome")}
            className={`font-mono text-[10px] px-2 py-0.5 uppercase tracking-wider transition-colors ${
              preset === "monochrome" ? "bg-white text-black font-bold" : "text-zinc-400 hover:text-white"
            }`}
          >
            [ MONOCHROME ]
          </button>
        </div>

        <Link
          href="/"
          onClick={playClickSound}
          className="font-mono text-xs text-zinc-400 hover:text-white border border-zinc-800 bg-black/80 px-3 py-1.5 uppercase tracking-widest transition-colors"
        >
          [ EXIT LAB ]
        </Link>
      </div>

      {/* Helper HUD Overlay */}
      <div className="absolute bottom-6 left-6 z-30 pointer-events-none font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
        // SCROLL_WHEEL / SWIPE: DRIVE_CAMERA_THROUGH_VOID (Z=5 TO Z=-85)
      </div>

      {/* R3F WebGL Spatial Canvas (SSR Isolated) */}
      <LabScene preset={preset} />
    </main>
  );
}
