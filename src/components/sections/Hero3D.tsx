"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ParallaxLayer } from "@/components/ui/ParallaxLayer";
import { KineticTypography } from "@/components/ui/KineticTypography";
import { OrbitalBadge } from "@/components/ui/OrbitalBadge";
import WeatherCanvas from "@/components/ui/WeatherCanvas";

// Curated Video Reel Stack (Supports both YouTube Shorts & direct HTML5 MP4 stream fallbacks)
const REELS = [
  {
    type: "youtube",
    id: "3JZ_D3ELwOQ",
    fallbackUrl: "https://assets.mixkit.co/videos/preview/mixkit-vertical-video-of-a-futuristic-city-43187-large.mp4",
    label: "REEL_01: CGI SPATIAL CITY",
  },
  {
    type: "youtube",
    id: "L_LUpnjgPso",
    fallbackUrl: "https://assets.mixkit.co/videos/preview/mixkit-cyberpunk-city-street-at-night-41544-large.mp4",
    label: "REEL_02: CYBERPUNK MOTION",
  },
  {
    type: "youtube",
    id: "dQw4w9WgXcQ",
    fallbackUrl: "https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-lines-in-motion-41551-large.mp4",
    label: "REEL_03: ABSTRACT TECH",
  },
];

const ROTATING_HEADLINES = [
  {
    tag: "// UI_UX_&_MOTION",
    title: "I design interfaces and direct spatial motion.",
    sub: "Blending high-end CGI visuals with production React & Next.js code."
  },
  {
    tag: "// CREATIVE_ENGINEERING",
    title: "I write the code to make complex ideas work.",
    sub: "From zero-weight architecture to serverless API routes."
  },
  {
    tag: "// DIGITAL_ARSENAL",
    title: "Craft over fluff. Process over template.",
    sub: "Human imperfections layered over a rigid brutalist grid."
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

  const currentCopy = ROTATING_HEADLINES[index];
  const currentReel = REELS[reelIndex];

  return (
    <section className="relative w-full min-h-[95vh] bg-black overflow-hidden flex items-center px-6 md:px-12 lg:px-20 py-16">
      <WeatherCanvas mode="night" />
      
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
        <div className="lg:col-span-7 flex flex-col justify-center min-h-[280px]">
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
                <div className="inline-block border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-xs font-mono text-amber-400">
                  {currentCopy.tag}
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

        {/* RIGHT COLUMN: FOREGROUND 3D PHONE WITH GUARANTEED AUTO-PLAYING VIDEO */}
        <div className="lg:col-span-5 flex justify-center items-center">
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
              initial={{ rotate: -3, scale: 0.95, opacity: 0 }}
              animate={{ 
                rotate: -3, 
                scale: 1, 
                opacity: 1,
                y: [0, -15, 0], // Ambient harmonic float loop
              }}
              whileHover={{ scale: 1.03, rotateX: 5 }}
              whileDrag={{ scale: 0.98, cursor: "grabbing" }}
              transition={{
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                scale: { type: "spring", stiffness: 350, damping: 35 },
              }}
              className="relative w-[260px] h-[520px] bg-zinc-950 rounded-[40px] p-3 border-4 border-zinc-800 shadow-2xl cursor-grab active:cursor-grabbing select-none group"
              data-cursor-hover
            >
              {/* Phone Speaker Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-4 bg-zinc-900 rounded-full z-30 border border-zinc-800 pointer-events-none" />

              {/* CRITICAL FIX: Invisible Drag & Touch Overlay */}
              <div 
                className="absolute inset-0 z-20 rounded-[40px] touch-none"
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
              <div className="w-full h-full rounded-[30px] overflow-hidden bg-zinc-900 relative border border-zinc-900">
                {!useFallback ? (
                  /* YouTube Embed with youtube-nocookie.com & autoplay parameters */
                  REELS.map((item, i) => (
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
                  ))
                ) : (
                  /* Native HTML5 Video Fallback (Guaranteed to play on all mobile & desktop browsers) */
                  REELS.map((item, i) => (
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
                  ))
                )}

                {/* Video Reel Overlay Badge */}
                <div className="absolute bottom-4 left-3 right-3 text-center font-mono text-[10px] text-zinc-300 bg-black/80 backdrop-blur-md py-1.5 px-2 border border-zinc-800 uppercase tracking-widest z-30 transition-colors pointer-events-none flex justify-between items-center">
                  <span>[ REEL {reelIndex + 1}/{REELS.length} ]</span>
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
    </section>
  );
}
