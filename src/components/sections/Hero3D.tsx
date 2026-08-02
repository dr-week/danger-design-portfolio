"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ParallaxLayer } from "@/components/ui/ParallaxLayer";
import { KineticTypography } from "@/components/ui/KineticTypography";
import { OrbitalBadge } from "@/components/ui/OrbitalBadge";
import AsciiMatrixBackground from "@/components/ui/AsciiMatrixBackground";
import { playClickSound } from "@/utils/audio";

// Extended Video Reel Stack from @DishantNaik YouTube Channel
const REELS = [
  {
    type: "youtube",
    id: "_s1bc8fhghA",
    fallbackUrl: "https://assets.mixkit.co/videos/preview/mixkit-vertical-video-of-a-futuristic-city-43187-large.mp4",
    label: "REEL_01: @DishantNaik Showcase",
    scriptCode: "const cgi = new CGIEngine({ fps: 60 });",
  },
  {
    type: "youtube",
    id: "V1e7uWxzUMY",
    fallbackUrl: "https://assets.mixkit.co/videos/preview/mixkit-cyberpunk-city-street-at-night-41544-large.mp4",
    label: "REEL_02: Motion & VFX Direction",
    scriptCode: "import { motion } from 'framer-motion';",
  },
  {
    type: "youtube",
    id: "_8J7ttjTKQk",
    fallbackUrl: "https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-lines-in-motion-41551-large.mp4",
    label: "REEL_03: Brand & CGI Campaigns",
    scriptCode: "renderShaderPass({ bloom: 1.2, dof: true });",
  },
  {
    type: "youtube",
    id: "-wKJcZ20z1M",
    fallbackUrl: "https://assets.mixkit.co/videos/preview/mixkit-vertical-video-of-a-futuristic-city-43187-large.mp4",
    label: "REEL_04: Creative Engineering",
    scriptCode: "async function syncPipeline() { await ffmpeg(); }",
  },
  {
    type: "youtube",
    id: "i3zSLeaK3tE",
    fallbackUrl: "https://assets.mixkit.co/videos/preview/mixkit-cyberpunk-city-street-at-night-41544-large.mp4",
    label: "REEL_05: Digital Arsenal",
    scriptCode: "export const stack = ['React', 'Blender', 'Rust'];",
  },
  {
    type: "youtube",
    id: "H3gJSMn-vu4",
    fallbackUrl: "https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-lines-in-motion-41551-large.mp4",
    label: "REEL_06: Spatial Architecture",
    scriptCode: "const camera = new PerspectiveCamera(60);",
  },
  {
    type: "youtube",
    id: "UvCBJJcfhkI",
    fallbackUrl: "https://assets.mixkit.co/videos/preview/mixkit-vertical-video-of-a-futuristic-city-43187-large.mp4",
    label: "REEL_07: High-Impact Visuals",
    scriptCode: "useFrame((state) => state.camera.position.z = z);",
  },
];

const ROTATING_HEADLINES = [
  {
    tag: "UI/UX DEVELOPMENT // WEB ENGINEERING",
    title: "UI/UX Development, Local LLM Architectures, & Technical Media.",
    sub: "Custom React apps, offline AI integrations, and high-converting frontend pipelines."
  },
  {
    tag: "CLIENT CONVERSIONS // CUSTOM WORK",
    title: "Clean layouts, natural interactions, and fast page loads.",
    sub: "Statically generated Next.js codebases optimized for speed and localized SEO ranking."
  }
];

export default function Hero3D() {
  const [index, setIndex] = useState(0);
  const [reelIndex, setReelIndex] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);
  const [useFallback, setUseFallback] = useState(false);

  // Auto-rotate headline text every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % ROTATING_HEADLINES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Auto-swipe shorts every 4 seconds UNTIL user interacts
  useEffect(() => {
    if (userInteracted) return;

    const glimpseTimer = setInterval(() => {
      setReelIndex((prev) => (prev + 1) % REELS.length);
    }, 4000);

    return () => clearInterval(glimpseTimer);
  }, [userInteracted]);

  const handleNextReel = () => {
    setUserInteracted(true);
    setReelIndex((prev) => (prev + 1) % REELS.length);
  };

  const handlePrevReel = () => {
    setUserInteracted(true);
    setReelIndex((prev) => (prev - 1 + REELS.length) % REELS.length);
  };

  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseTilt({ x: x * 14, y: -y * 14 });
  };

  const handleMouseLeave = () => {
    setMouseTilt({ x: 0, y: 0 });
  };

  const currentCopy = ROTATING_HEADLINES[index];
  const currentReel = REELS[reelIndex];

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-[100svh] bg-black overflow-hidden flex flex-col justify-between px-6 md:px-12 lg:px-20 py-16"
    >
      {/* Non-Intrusive Subtle Ambient ASCII Background Canvas */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-15 mix-blend-screen">
        <AsciiMatrixBackground color="#f59e0b" opacity={0.3} interactive={true} fontSize={12} />
      </div>

      {/* LAYER 1: Deep Background Texture (Speed ratio kv = 0.1) */}
      <ParallaxLayer speed={0.1} className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <div 
          className="w-full h-full bg-cover bg-center filter grayscale contrast-125"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1920&auto=format&fit=crop')`,
          }}
        />
      </ParallaxLayer>

      {/* MAIN CONTAINER LAYER */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* LEFT COLUMN: Auto-Rotating Headline & Orbital Badges */}
        <div className="lg:col-span-6 flex flex-col justify-center min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="space-y-4"
            >
              <OrbitalBadge>
                <div className="inline-flex items-center gap-2 border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-xs font-mono text-amber-400 rounded-md">
                  <span>{currentCopy.tag}</span>
                </div>
              </OrbitalBadge>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
                {currentCopy.title}
              </h1>
              <p className="text-lg md:text-xl text-zinc-200 max-w-xl font-mono leading-relaxed">
                {currentCopy.sub}
              </p>

              {/* Immediate Action CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#work"
                  onClick={playClickSound}
                  className="px-6 py-3.5 bg-amber-400 text-black font-mono text-xs font-black uppercase tracking-widest rounded-md hover:bg-amber-300 transition-all shadow-lg shadow-amber-400/20 flex items-center gap-2"
                >
                  <span>EXPLORE WORK</span>
                  <span>↓</span>
                </a>
                <a
                  href="#contact"
                  onClick={playClickSound}
                  className="px-6 py-3.5 border-2 border-amber-400 text-amber-400 font-mono text-xs font-black uppercase tracking-widest rounded-md hover:bg-amber-400/10 transition-all flex items-center gap-2"
                >
                  <span>GET A QUOTE</span>
                  <span>→</span>
                </a>
              </div>

              {/* Credibility & Social Proof Metrics Banner */}
              <div className="pt-6 border-t border-zinc-800 flex flex-wrap items-center gap-4 font-mono text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold text-sm">50+</span>
                  <span className="uppercase tracking-wider text-[11px]">PROJECTS DELIVERED</span>
                </div>
                <span className="text-zinc-700">•</span>
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold text-sm">100%</span>
                  <span className="uppercase tracking-wider text-[11px]">OFFLINE COMPLIANT</span>
                </div>
                <span className="text-zinc-700">•</span>
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold text-sm">24H</span>
                  <span className="uppercase tracking-wider text-[11px]">RESPONSE GUARANTEE</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-2 mt-8">
            {ROTATING_HEADLINES.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 transition-all duration-300 ${
                  i === index ? "w-8 bg-amber-400" : "w-2 bg-zinc-800 hover:bg-zinc-600"
                }`}
                aria-label={`Jump to headline ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: SLEEK HIGH-TECH CODE & ARCHITECTURE TERMINAL CARD */}
        <div className="lg:col-span-6 flex justify-center items-center relative">
          <div className="absolute inset-0 bg-amber-500/10 blur-3xl rounded-full scale-90 pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-lg bg-zinc-950/95 border-2 border-zinc-800 rounded-lg shadow-2xl p-5 font-mono text-xs space-y-4 backdrop-blur-md relative z-10"
          >
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-zinc-400 text-[11px] ml-2">dcode_cognitive_engine.ts</span>
              </div>
              <span className="text-amber-400 text-[10px] bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded uppercase font-bold">
                ONLINE // v2.4
              </span>
            </div>

            {/* Code Output Buffer */}
            <div className="space-y-2 text-zinc-300 leading-relaxed text-[11px]">
              <p className="text-zinc-500">// Initialize offline neural adapter</p>
              <p className="text-emerald-400">
                <span className="text-amber-400">import</span> &#123; OllamaClient &#125; <span className="text-amber-400">from</span> <span className="text-sky-300">&quot;@dcode/local-ai&quot;</span>;
              </p>
              <p>
                <span className="text-amber-400">const</span> engine = <span className="text-amber-400">new</span> OllamaClient(&#123;
              </p>
              <p className="pl-4 text-zinc-300">
                model: <span className="text-sky-300">&quot;qwen2.5-coder:7b&quot;</span>,
              </p>
              <p className="pl-4 text-zinc-300">
                contextWindow: <span className="text-amber-300">32768</span>,
              </p>
              <p className="pl-4 text-zinc-300">
                privacyGuard: <span className="text-emerald-400">true</span>
              </p>
              <p>&#125;);</p>
              <div className="border-t border-zinc-800/80 pt-2 text-zinc-400 space-y-1">
                <p className="flex justify-between">
                  <span>► STATUS:</span>
                  <span className="text-emerald-400 font-bold">100% OPERATIONAL</span>
                </p>
                <p className="flex justify-between">
                  <span>► LATENCY:</span>
                  <span className="text-amber-400">12ms (LOCAL INFERENCE)</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Prompt */}
      <div className="w-full flex flex-col items-center justify-center pt-8 z-20 pointer-events-none">
        <a 
          href="#work" 
          className="pointer-events-auto flex flex-col items-center gap-2 group font-mono text-[10px] text-zinc-400 hover:text-amber-400 transition-colors uppercase tracking-widest"
        >
          <span>[ SCROLL TO DISCOVER WORK ARCHIVE ↓ ]</span>
          <span className="w-4 h-7 border-2 border-zinc-700 group-hover:border-amber-400 rounded-full flex justify-center p-1 transition-colors">
            <motion.span 
              animate={{ y: [0, 8, 0] }} 
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1 h-1.5 bg-amber-400 rounded-full" 
            />
          </span>
        </a>
      </div>
    </section>
  );
}
