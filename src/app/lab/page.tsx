"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls, useScroll, Html, Text, Float, Cloud, Clouds } from "@react-three/drei";
import { EffectComposer, ChromaticAberration, Noise, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";
import Link from "next/link";
import { playClickSound, playSwipeHum } from "@/utils/audio";

type ShaderPreset = "thunderstorm" | "cyberpunk" | "monochrome";

// 1. Camera Rig driving Z-axis travel from Z = 5 down to Z = -85 across 5 spatial rooms
function CameraRig() {
  const scroll = useScroll();

  useFrame((state) => {
    const progress = scroll.offset; // 0.0 to 1.0
    
    // Smooth Z-axis travel from 5 to -85 across 5 separated rooms
    const targetZ = 5 - progress * 90;
    
    // Handheld camera sine breathing effect
    const time = state.clock.getElapsedTime();
    const breathX = Math.sin(time * 1.5) * 0.18;
    const breathY = Math.cos(time * 1.2) * 0.18;

    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, breathX, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, breathY, 0.05);
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.08);

    // Subtle Z rotation for dynamic handheld lens feel
    state.camera.rotation.z = Math.sin(time * 0.8) * 0.02;
  });

  return null;
}

// WebGL 3D Video Texture Component
function WebGLVideoPhone({ reelIndex = 0 }: { reelIndex?: number }) {
  const [videoTexture, setVideoTexture] = useState<THREE.VideoTexture | null>(null);

  useEffect(() => {
    const video = document.createElement("video");
    const localSrc = `/videos/reel_${reelIndex}.mp4`;
    const fallbackSrc = "https://assets.mixkit.co/videos/preview/mixkit-vertical-video-of-a-futuristic-city-43187-large.mp4";

    video.src = localSrc;
    video.playsInline = true;
    video.muted = true;
    video.loop = true;
    video.crossOrigin = "anonymous";

    video.onerror = () => {
      if (video.src !== fallbackSrc) {
        video.src = fallbackSrc;
        video.play().catch(() => {});
      }
    };

    video.play().catch((err) => console.log("Video autoplay status:", err));

    const texture = new THREE.VideoTexture(video);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.format = THREE.RGBAFormat;

    setVideoTexture(texture);

    return () => {
      video.pause();
      video.remove();
      texture.dispose();
    };
  }, [reelIndex]);

  if (!videoTexture) return null;

  return (
    <mesh position={[0, 0, 0.82]}>
      <planeGeometry args={[2.6, 4.4]} />
      <meshBasicMaterial map={videoTexture} />
    </mesh>
  );
}

import BrushTextureRevealPlane from "@/components/ui/BrushTextureRevealPlane";

// Room 1: Retro CRT Nostalgia Bay & GLSL Brush Reveal Plane (Z = 0)
function Room1Retro() {
  return (
    <group position={[0, 0, 0]}>
      <spotLight position={[3, 5, 5]} angle={0.5} penumbra={1} intensity={12} color="#fbbf24" />
      
      {/* Option 1: Monogrid GLSL Brush Texture Reveal Shader Plane */}
      <BrushTextureRevealPlane />

      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[3.0, 4.8, 1.6]} />
          <meshStandardMaterial color="#18181b" roughness={0.3} metalness={0.8} />
        </mesh>

        <WebGLVideoPhone reelIndex={0} />
      </Float>

      <Html position={[-2.6, 1.8, 0]} transform distanceFactor={6}>
        <div className="bg-black/90 border border-amber-500/50 p-3 font-mono text-xs text-amber-400 max-w-xs shadow-2xl backdrop-blur-md select-none">
          <p className="font-caveat text-xl text-zinc-200">// ROOM_01: GLSL_BRUSH_REVEAL_BAY</p>
          <p className="text-[10px] text-zinc-400 mt-1">Scratch-away GLSL fragment shader mask reacting to mouse proximity & scroll velocity.</p>
        </div>
      </Html>
    </group>
  );
}

// Room 2: Brutalist Thunderstorm & Cloud Particles (Z = -20)
function Room2Thunderstorm({ preset }: { preset: ShaderPreset }) {
  const pointsRef = useRef<THREE.Points>(null);
  const lightningRef = useRef<THREE.PointLight>(null);

  const [positions] = useMemo(() => {
    const pos = new Float32Array(800 * 3);
    for (let i = 0; i < 800; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = -20 + (Math.random() - 0.5) * 20;
    }
    return [pos];
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      const array = pointsRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 1; i < array.length; i += 3) {
        array[i] -= 0.12; 
        if (array[i] < -10) array[i] = 10;
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }

    if (lightningRef.current) {
      if (Math.random() > 0.98) {
        lightningRef.current.intensity = preset === "monochrome" ? 90 : 70;
      } else {
        lightningRef.current.intensity = THREE.MathUtils.lerp(lightningRef.current.intensity, 0, 0.1);
      }
    }
  });

  const lightningColor = preset === "cyberpunk" ? "#ec4899" : preset === "monochrome" ? "#ffffff" : "#60a5fa";
  const sculptureColor = preset === "cyberpunk" ? "#a855f7" : preset === "monochrome" ? "#ffffff" : "#f59e0b";

  return (
    <group position={[0, 0, -20]}>
      <pointLight ref={lightningRef} position={[0, 8, -20]} color={lightningColor} distance={35} decay={2} />

      <Clouds material={THREE.MeshBasicMaterial}>
        <Cloud seed={1} bounds={[10, 5, 10]} volume={6} color={preset === "monochrome" ? "#000000" : "#27272a"} position={[0, 4, -20]} />
        <Cloud seed={2} bounds={[12, 6, 12]} volume={8} color="#18181b" position={[0, -4, -20]} />
      </Clouds>

      <spotLight position={[5, 10, -15]} angle={0.4} penumbra={1} intensity={25} color={sculptureColor} castShadow />

      <Float speed={1.5} rotationIntensity={1} floatIntensity={0.5}>
        <mesh position={[0, 0, 0]}>
          <torusKnotGeometry args={[1.5, 0.4, 128, 32]} />
          <meshStandardMaterial color={sculptureColor} wireframe roughness={0.1} metalness={0.9} />
        </mesh>
      </Float>

      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.08} color={sculptureColor} transparent opacity={0.5} sizeAttenuation />
      </points>

      <Html position={[2.8, 1.2, 0]} transform distanceFactor={6}>
        <div className="bg-black/90 border border-zinc-800 p-3 font-mono text-xs text-white max-w-xs shadow-2xl backdrop-blur-md select-none">
          <p className="font-caveat text-xl text-amber-400">// ROOM_02: THUNDERSTORM_SCULPTURE</p>
          <p className="text-[10px] text-zinc-400 mt-1">Stochastic lightning engine & volumetric clouds at Z = -20.</p>
        </div>
      </Html>
    </group>
  );
}

// Room 3: Spatial Architecture & Villa Drone Gallery (Z = -40)
function Room3Architecture({ preset }: { preset: ShaderPreset }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.4;
    }
  });

  const spotlightColor = preset === "cyberpunk" ? "#ec4899" : preset === "monochrome" ? "#ffffff" : "#38bdf8";

  return (
    <group position={[0, 0, -40]}>
      <spotLight position={[-6, 8, -35]} angle={0.5} penumbra={0.8} intensity={30} color={spotlightColor} />
      <spotLight position={[6, -6, -35]} angle={0.5} penumbra={0.8} intensity={20} color="#f59e0b" />

      <Float speed={2} rotationIntensity={0.6}>
        <mesh ref={meshRef} position={[0, 0, 0]}>
          <boxGeometry args={[4.5, 2.8, 0.2]} />
          <meshStandardMaterial color="#0f172a" roughness={0.2} metalness={0.9} />
        </mesh>
      </Float>

      <Html position={[-3, 2, 0]} transform distanceFactor={6}>
        <div className="bg-black/90 border border-sky-500/50 p-3 font-mono text-xs text-sky-400 max-w-xs shadow-2xl backdrop-blur-md select-none">
          <p className="font-caveat text-xl text-zinc-200">// ROOM_03: SPATIAL_ARCHITECTURE</p>
          <p className="text-[10px] text-zinc-400 mt-1">Boutique Coastal & Spatial Villa drone visual render gallery at Z = -40.</p>
        </div>
      </Html>
    </group>
  );
}

// Room 4: Cyberpunk Neon Grid (Z = -60)
function Room4CyberpunkGrid({ preset }: { preset: ShaderPreset }) {
  const gridRef = useRef<THREE.GridHelper>(null);

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  const color1 = preset === "monochrome" ? "#ffffff" : "#a855f7";
  const color2 = preset === "monochrome" ? "#52525b" : "#ec4899";

  return (
    <group position={[0, 0, -60]}>
      <pointLight position={[0, 5, -60]} color={color1} intensity={25} distance={30} />
      <pointLight position={[0, -5, -60]} color={color2} intensity={20} distance={30} />

      <gridHelper ref={gridRef} args={[40, 40, color1, color2]} position={[0, -3, 0]} rotation={[Math.PI / 6, 0, 0]} />

      <Float speed={2.5} rotationIntensity={1}>
        <mesh position={[0, 1, 0]}>
          <icosahedronGeometry args={[2.0, 1]} />
          <meshStandardMaterial color={color1} wireframe roughness={0.1} metalness={1.0} />
        </mesh>
      </Float>

      <Html position={[2.6, 2, 0]} transform distanceFactor={6}>
        <div className="bg-black/90 border border-purple-500/50 p-3 font-mono text-xs text-purple-400 max-w-xs shadow-2xl backdrop-blur-md select-none">
          <p className="font-caveat text-xl text-zinc-200">// ROOM_04: CYBERPUNK_NEON_GRID</p>
          <p className="text-[10px] text-zinc-400 mt-1">Dual-tint neon spotlighting and interactive wireframe matrix at Z = -60.</p>
        </div>
      </Html>
    </group>
  );
}

// Room 5: Spatial Data Void (Z = -80)
function Room5DataVoid() {
  const wireRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (wireRef.current) {
      wireRef.current.rotation.x += delta * 0.3;
      wireRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group position={[0, 0, -80]}>
      <pointLight position={[0, 0, 0]} color="#38bdf8" intensity={25} distance={30} />

      <mesh ref={wireRef} position={[0, 1, 0]}>
        <octahedronGeometry args={[2.5, 2]} />
        <meshBasicMaterial color="#38bdf8" wireframe />
      </mesh>

      <Float speed={3} rotationIntensity={0.8}>
        <Text
          fontSize={1.4}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          position={[0, -1.8, 0]}
        >
          DANGER // DATA_VOID
        </Text>
      </Float>

      <Html position={[0, -3.8, 0]} transform distanceFactor={6}>
        <div className="bg-zinc-950 border-2 border-sky-500/80 p-5 text-center max-w-md shadow-2xl select-none">
          <p className="font-mono text-xs text-sky-400 uppercase tracking-widest font-bold">
            [ SPATIAL DATA VOID REACHED (Z = -80) ]
          </p>
          <p className="font-caveat text-lg text-zinc-300 mt-2">
            * 5 Spatial Rooms explored. WebGL timeline complete.
          </p>
          <Link
            href="/"
            onClick={playClickSound}
            className="inline-block mt-4 px-4 py-2 bg-sky-400 text-black font-mono text-xs uppercase font-bold tracking-widest hover:bg-white transition-colors"
          >
            ← Return to Core Site
          </Link>
        </div>
      </Html>
    </group>
  );
}

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

      {/* R3F WebGL Spatial Canvas */}
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        className="w-full h-full"
        gl={{ antialias: true }}
      >
        <ambientLight intensity={preset === "monochrome" ? 0.2 : 0.4} />
        <directionalLight position={[10, 10, 10]} intensity={1} />

        <ScrollControls pages={5} damping={0.2}>
          <CameraRig />
          <Room1Retro />
          <Room2Thunderstorm preset={preset} />
          <Room3Architecture preset={preset} />
          <Room4CyberpunkGrid preset={preset} />
          <Room5DataVoid />
        </ScrollControls>

        {/* Shaders & Postprocessing Stack */}
        <EffectComposer>
          <ChromaticAberration offset={new THREE.Vector2(preset === "cyberpunk" ? 0.004 : 0.002, 0.002)} />
          <Noise opacity={preset === "monochrome" ? 0.15 : 0.08} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
      </Canvas>
    </main>
  );
}
