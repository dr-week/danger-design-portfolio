"use client";

import { useEffect, useRef } from "react";

interface AsciiMatrixBackgroundProps {
  color?: string;
  opacity?: number;
  fontSize?: number;
  interactive?: boolean;
}

const RAMP = [" ", ".", ":", "-", "=", "+", "*", "#", "%", "@", "$"];

export default function AsciiMatrixBackground({
  color = "#f59e0b",
  opacity = 0.25,
  fontSize = 12,
  interactive = true,
}: AsciiMatrixBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    window.addEventListener("resize", handleResize);
    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    let time = 0;

    const render = () => {
      time += 0.03;
      ctx.clearRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;
      ctx.fillStyle = color;

      const cols = Math.floor(width / (fontSize * 0.7));
      const rows = Math.floor(height / (fontSize * 1.1));

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * fontSize * 0.7;
          const y = r * fontSize * 1.1;

          // Wave frequency calculation
          let wave = Math.sin(c * 0.12 + time * 1.5) * Math.cos(r * 0.12 + time * 1.2);

          // Mouse ripple distance check
          if (interactive) {
            const dx = x - mouseRef.current.x;
            const dy = y - mouseRef.current.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
              const push = (1 - dist / 120);
              wave += push * 1.8;
            }
          }

          // Normalize wave value [0, 1]
          const normalized = Math.min(Math.max((wave + 1) / 2, 0), 0.99);
          const charIndex = Math.floor(normalized * RAMP.length);
          const char = RAMP[charIndex];

          if (char !== " ") {
            ctx.fillText(char, x, y);
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [color, opacity, fontSize, interactive]);

  return (
    <canvas
      ref={canvasRef}
      style={{ opacity }}
      className="pointer-events-none absolute inset-0 w-full h-full z-0 select-none"
    />
  );
}
