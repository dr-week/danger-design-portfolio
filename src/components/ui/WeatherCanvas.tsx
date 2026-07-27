"use client";

import { useEffect, useRef, useState } from "react";

interface WeatherCanvasProps {
  mode?: "rain" | "night" | "sunbeam" | "cityline";
  className?: string;
}

export default function WeatherCanvas({ mode = "rain", className = "" }: WeatherCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0.2);

  // 1. Intersection Observer for viewport visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 2. Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight || 1;
      const progress = Math.min(1, Math.max(0.1, scrollY / maxScroll));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 3. Render Canvas Loop depending on mode
  useEffect(() => {
    if (!isVisible) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Particle state initialization
    const particles: { x: number; y: number; size: number; speedX: number; speedY: number; alpha: number }[] = [];
    const count = mode === "rain" ? Math.floor(25 + scrollProgress * 35) : 45;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: mode === "night" ? Math.random() * 2 + 0.5 : mode === "sunbeam" ? Math.random() * 4 + 1 : Math.random() * 15 + 10,
        speedX: mode === "sunbeam" ? (Math.random() - 0.5) * 0.4 : (Math.random() - 0.5) * 0.2,
        speedY: mode === "rain" ? (Math.random() * 8 + 10) * (0.8 + scrollProgress * 0.5) : Math.random() * 0.5 + 0.2,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (mode === "rain") {
        const alpha = 0.12 + scrollProgress * 0.3;
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha.toFixed(2)})`;
        ctx.lineWidth = 1;

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x, p.y + p.size);
          ctx.stroke();

          p.y += p.speedY;
          if (p.y > height) {
            p.y = -p.size;
            p.x = Math.random() * width;
          }
        }
      } else if (mode === "night") {
        // Starfield & glowing cosmic particles
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          ctx.fillStyle = `rgba(255, 255, 255, ${(p.alpha * (0.4 + Math.sin(Date.now() * 0.002 + i) * 0.3)).toFixed(2)})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();

          p.y -= p.speedY * 0.3;
          if (p.y < 0) p.y = height;
        }
      } else if (mode === "sunbeam") {
        // Warm floating dust motes & golden light beam gradients
        const gradient = ctx.createLinearGradient(0, 0, width, height);
        gradient.addColorStop(0, "rgba(251, 191, 36, 0.04)");
        gradient.addColorStop(1, "rgba(245, 158, 11, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          ctx.fillStyle = `rgba(251, 191, 36, ${(p.alpha * 0.4).toFixed(2)})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();

          p.x += p.speedX;
          p.y += p.speedY;
          if (p.x < 0 || p.x > width) p.x = Math.random() * width;
          if (p.y > height) p.y = 0;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, mode, scrollProgress]);

  return (
    <div ref={containerRef} className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${className}`}>
      {isVisible && (
        <canvas
          ref={canvasRef}
          className="w-full h-full mix-blend-screen"
        />
      )}
    </div>
  );
}
