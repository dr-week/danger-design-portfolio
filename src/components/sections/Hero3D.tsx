"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ParallaxLayer } from "@/components/ui/ParallaxLayer";
import { KineticTypography } from "@/components/ui/KineticTypography";
import { OrbitalBadge } from "@/components/ui/OrbitalBadge";
import AsciiMatrixBackground from "@/components/ui/AsciiMatrixBackground";

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
    tag: "ACT_I // THE TRANSMISSION",
    title: "I direct spatial motion and design zero-latency interfaces.",
    sub: "Blending high-frequency CGI visual direction with production WebGL & React code."
  },
  {
    tag: "ACT_I // CREATIVE KINEMATICS",
    title: "Every pixel is driven by mass, tension, and friction.",
    sub: "From critically-damped spring physics to real-time GLSL shader passes."
  },
  {
    tag: "ACT_I // THE BRUTALIST GRID",
    title: "Craft over fluff. Structural discipline over templates.",
    sub: "Human imperfections mapped to a rigid digital engineering matrix."
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

      {/* LAYER 2: Base Kinetic Typography (Speed ratio kv = 0.4) */}
      <ParallaxLayer speed={0.4} className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10 z-0">
        <KineticTypography text="DANGER DESIGN" className="text-white" />
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
                <div className="inline-flex items-center gap-2 border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-xs font-mono text-amber-400">
                  <span>{currentCopy.tag}</span>
                </div>
              </OrbitalBadge>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
                {currentCopy.title}
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 max-w-xl font-mono">
                {currentCopy.sub}
              </p>
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

        {/* RIGHT COLUMN: ADAPTIVE 1920x1080 PROPORTIONED PHONE WITH TACTILE SWIPE & SCRIPT HUD */}
        <div className="lg:col-span-6 flex justify-center items-center relative">
          {/* Ambient Glow Aura & Backdrop Shadow */}
          <div className="absolute inset-0 bg-amber-500/15 blur-3xl rounded-full scale-75 pointer-events-none transition-all duration-700 group-hover:scale-90 group-hover:bg-amber-400/25" />

          <ParallaxLayer speed={1.5}>
            <motion.div
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                const swipeThreshold = 30;
                if (info.offset.y < -swipeThreshold || info.velocity.y < -300) {
                  handleNextReel();
                } else if (info.offset.y > swipeThreshold || info.velocity.y > 300) {
                  handlePrevReel();
                }
              }}
              initial={{ rotate: -2, scale: 0.95, opacity: 0 }}
              animate={{ 
                rotateX: mouseTilt.y, 
                rotateY: mouseTilt.x, 
                scale: 1, 
                opacity: 1,
                y: [0, -12, 0],
              }}
              whileHover={{ scale: 1.03 }}
              whileDrag={{ scale: 0.98, cursor: "grabbing" }}
              transition={{
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                scale: { type: "spring", stiffness: 350, damping: 35 },
                rotateX: { type: "spring", stiffness: 200, damping: 25 },
                rotateY: { type: "spring", stiffness: 200, damping: 25 },
              }}
              className="relative w-[310px] sm:w-[350px] md:w-[380px] h-[600px] sm:h-[680px] md:h-[740px] bg-zinc-950 rounded-[44px] p-3.5 border-4 border-zinc-800 shadow-[0_25px_60px_rgba(245,158,11,0.2)] cursor-grab active:cursor-grabbing select-none group backdrop-blur-sm"
              data-cursor-hover
            >
              {/* Phone Speaker Notch */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-4 bg-zinc-900 rounded-full z-30 border border-zinc-800 pointer-events-none" />

              {/* TACTILE PHYSICAL SCROLL / SWIPE BUTTONS */}
              <div className="absolute -right-12 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
                <button
                  onClick={handlePrevReel}
                  className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 text-amber-400 text-xs font-mono font-bold flex items-center justify-center hover:bg-amber-400 hover:text-black transition-all shadow-xl"
                  title="Previous Reel"
                >
                  ▲
                </button>
                <button
                  onClick={handleNextReel}
                  className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 text-amber-400 text-xs font-mono font-bold flex items-center justify-center hover:bg-amber-400 hover:text-black transition-all shadow-xl"
                  title="Next Reel"
                >
                  ▼
                </button>
              </div>

              {/* Touch & Drag Overlay */}
              <div 
                className="absolute inset-0 z-20 rounded-[44px] touch-none"
                onTouchStart={(e) => {
                  const touch = e.touches[0];
                  (e.currentTarget as any)._startY = touch.clientY;
                }}
                onTouchEnd={(e) => {
                  const startY = (e.currentTarget as any)._startY;
                  if (startY !== undefined) {
                    const endY = e.changedTouches[0].clientY;
                    const diffY = startY - endY;
                    if (diffY > 40) {
                      handleNextReel();
                    } else if (diffY < -40) {
                      handlePrevReel();
                    }
                  }
                }}
              />

              {/* Screen Frame */}
              <div className="w-full h-full rounded-[34px] overflow-hidden bg-zinc-900 relative border border-zinc-900">
                
                {/* Script Code HUD Header Overlay */}
                <div className="absolute top-4 left-4 right-4 z-30 flex justify-between items-center font-mono text-[9px] text-amber-400 bg-black/80 backdrop-blur-md px-2.5 py-1 border border-zinc-800 pointer-events-none">
                  <span className="truncate">{currentReel.scriptCode}</span>
                  <span className="text-zinc-500 font-bold ml-2">60FPS</span>
                </div>

                {!useFallback ? (
                  /* YouTube Embed */
                  REELS.map((item, i) => {
                    const isVisible =
                      i === reelIndex ||
                      i === (reelIndex - 1 + REELS.length) % REELS.length ||
                      i === (reelIndex + 1) % REELS.length;

                    // if (!isVisible) return null;

                    return (
                      <iframe
                        key={item.id}
                        src={`https://www.youtube-nocookie.com/embed/${item.id}?autoplay=1&mute=1&loop=1&playlist=${item.id}&controls=0&playsinline=1&enablejsapi=1&modestbranding=1`}
                        title={`YouTube Short ${i}`}
                        className={`absolute inset-0 w-full h-full object-cover scale-[1.15] transition-opacity duration-300 ${
                          i === reelIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        onError={() => setUseFallback(true)}
                      />
                    );
                  })
                ) : (
                  /* Native HTML5 Video Fallback */
                  REELS.map((item, i) => {
                    const isVisible =
                      i === reelIndex ||
                      i === (reelIndex - 1 + REELS.length) % REELS.length ||
                      i === (reelIndex + 1) % REELS.length;

                    // if (!isVisible) return null;

                    return (
                      <video
                        key={item.fallbackUrl}
                        src={item.fallbackUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                          i === reelIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                      />
                    );
                  })
                )}

                {/* Video Reel Overlay Footer Badge */}
                <div className="absolute bottom-4 left-3 right-3 text-center font-mono text-[10px] text-zinc-300 bg-black/80 backdrop-blur-md py-1.5 px-2 border border-zinc-800 uppercase tracking-widest z-30 transition-colors pointer-events-none flex justify-between items-center">
                  <span>[ {currentReel.label} ({reelIndex + 1}/{REELS.length}) ]</span>
                  <button 
                    onClick={() => setUseFallback(!useFallback)} 
                    className="pointer-events-auto text-[9px] underline text-amber-400 hover:text-white"
                  >
                    {useFallback ? "YT MODE" : "MP4 MODE"}
                  </button>
                </div>
              </div>
            </motion.div>
          </ParallaxLayer>
        </div>
      </div>

      {/* Bottom Scroll Prompt */}
      <div className="w-full flex flex-col items-center justify-center pt-8 z-20 pointer-events-none">
        <a 
          href="#archive" 
          className="pointer-events-auto flex flex-col items-center gap-2 group font-mono text-[10px] text-zinc-400 hover:text-amber-400 transition-colors uppercase tracking-widest"
        >
          <span>[ SCROLL TO DISCOVER ARCHIVE MATRIX ↓ ]</span>
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
