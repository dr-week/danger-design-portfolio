"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls, useScroll, Html, Text, Float, Cloud, Clouds } from "@react-three/drei";
import { EffectComposer, ChromaticAberration, Noise, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";
import Link from "next/link";

// 1. Camera Rig driving Z-axis travel from Z = 5 down to Z = -45
function CameraRig() {
  const scroll = useScroll();

  useFrame((state) => {
    const progress = scroll.offset; // 0.0 to 1.0
    
    // Smooth Z-axis travel from 5 to -45 across separated rooms
    const targetZ = 5 - progress * 50;
    
    // Handheld camera sine breathing effect
    const time = state.clock.getElapsedTime();
    const breathX = Math.sin(time * 1.5) * 0.15;
    const breathY = Math.cos(time * 1.2) * 0.15;

    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, breathX, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, breathY, 0.05);
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.08);

    // Subtle Z rotation for dynamic handheld lens feel
    state.camera.rotation.z = Math.sin(time * 0.8) * 0.02;
  });

  return null;
}

// 2. WebGL 3D Video Texture Phone Component
export function WebGLVideoPhone({ reelIndex = 0 }: { reelIndex?: number }) {
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

// 3. Room 1: Retro CRT Nostalgia Bay & WebGL Video Phone (Z = 0)
function Room1Retro() {
  return (
    <group position={[0, 0, 0]}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
        {/* Phone / CRT Screen Chassis */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[3.0, 4.8, 1.6]} />
          <meshStandardMaterial color="#18181b" roughness={0.3} metalness={0.8} />
        </mesh>

        {/* Dynamic WebGL Video Texture Screen */}
        <WebGLVideoPhone reelIndex={0} />
      </Float>

      {/* 3D Floating Annotation */}
      <Html position={[-2.4, 1.8, 0]} transform distanceFactor={6}>
        <div className="bg-black/90 border border-amber-500/50 p-3 font-mono text-xs text-amber-400 max-w-xs shadow-2xl backdrop-blur-md select-none">
          <p className="font-caveat text-xl text-zinc-200">// ROOM_01: CRT_NOSTALGIA_BAY</p>
          <p className="text-[10px] text-zinc-400 mt-1">Zero CORS WebGL VideoTexture streaming directly from /public/videos/reel_0.mp4</p>
        </div>
      </Html>
    </group>
  );
}

// 4. Room 2: Brutalist Thunderstorm & Cloud Particles (Z = -20)
function Room2Thunderstorm() {
  const pointsRef = useRef<THREE.Points>(null);
  const lightningRef = useRef<THREE.PointLight>(null);

  // Generate 800 WebGL Rain Particles
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
    // 50% Reduced rain fall speed for atmospheric realism
    if (pointsRef.current) {
      const array = pointsRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 1; i < array.length; i += 3) {
        array[i] -= 0.12; 
        if (array[i] < -10) array[i] = 10;
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }

    // Stochastic Lightning Flashes
    if (lightningRef.current) {
      if (Math.random() > 0.98) {
        lightningRef.current.intensity = 60;
      } else {
        lightningRef.current.intensity = THREE.MathUtils.lerp(lightningRef.current.intensity, 0, 0.1);
      }
    }
  });

  return (
    <group position={[0, 0, -20]}>
      {/* Stochastic Lightning Light Engine */}
      <pointLight ref={lightningRef} position={[0, 8, -20]} color="#60a5fa" distance={35} decay={2} />

      {/* Volumetric Clouds */}
      <Clouds material={THREE.MeshBasicMaterial}>
        <Cloud seed={1} bounds={[10, 5, 10]} volume={6} color="#27272a" position={[0, 4, -20]} />
        <Cloud seed={2} bounds={[12, 6, 12]} volume={8} color="#18181b" position={[0, -4, -20]} />
      </Clouds>

      {/* Harsh Spotlight on Sculpture */}
      <spotLight position={[5, 10, -15]} angle={0.4} penumbra={1} intensity={20} color="#fbbf24" castShadow />

      {/* Wireframe TorusKnot Sculpture */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={0.5}>
        <mesh position={[0, 0, 0]}>
          <torusKnotGeometry args={[1.5, 0.4, 128, 32]} />
          <meshStandardMaterial color="#f59e0b" wireframe roughness={0.1} metalness={0.9} />
        </mesh>
      </Float>

      {/* Particle Rain Storm */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.08} color="#93c5fd" transparent opacity={0.5} sizeAttenuation />
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

// 5. Room 3: Data Void & Fragmented Code Wireframe (Z = -40)
function Room3DataVoid() {
  const wireRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (wireRef.current) {
      wireRef.current.rotation.x += delta * 0.3;
      wireRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group position={[0, 0, -40]}>
      {/* Glowing Blue Core Light */}
      <pointLight position={[0, 0, 0]} color="#38bdf8" intensity={15} distance={20} />

      {/* Spinning Code Wireframe Core */}
      <mesh ref={wireRef} position={[0, 1, 0]}>
        <octahedronGeometry args={[2, 2]} />
        <meshBasicMaterial color="#38bdf8" wireframe />
      </mesh>

      <Float speed={3} rotationIntensity={0.8}>
        <Text
          fontSize={1.2}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          position={[0, -1.5, 0]}
        >
          DANGER // DATA_VOID
        </Text>
      </Float>

      <Html position={[0, -3.2, 0]} transform distanceFactor={6}>
        <div className="bg-zinc-950 border-2 border-sky-500/80 p-5 text-center max-w-md shadow-2xl select-none">
          <p className="font-mono text-xs text-sky-400 uppercase tracking-widest font-bold">
            [ SPATIAL DATA VOID REACHED (Z = -40) ]
          </p>
          <p className="font-caveat text-lg text-zinc-300 mt-2">
            * Raw code wireframe core illuminated by blue point light.
          </p>
          <Link
            href="/"
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
  return (
    <main className="relative w-screen h-screen bg-black overflow-hidden select-none">
      {/* Top Overlay Bar */}
      <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-30 pointer-events-auto">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="font-mono text-xs text-white uppercase tracking-widest font-bold">
            DANGER_LAB // WEBGL_EXPERIMENTAL_ZONE
          </span>
        </div>
        <Link
          href="/"
          className="font-mono text-xs text-zinc-400 hover:text-white border border-zinc-800 bg-black/80 px-3 py-1.5 uppercase tracking-widest transition-colors"
        >
          [ EXIT LAB ]
        </Link>
      </div>

      {/* Helper HUD Overlay */}
      <div className="absolute bottom-6 left-6 z-30 pointer-events-none font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
        // SCROLL_WHEEL: DRIVE_CAMERA_THROUGH_VOID (Z-AXIS: Z=5 TO Z=-45)
      </div>

      {/* R3F WebGL Spatial Canvas */}
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        className="w-full h-full"
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 10]} intensity={1} />

        <ScrollControls pages={3} damping={0.2}>
          <CameraRig />
          <Room1Retro />
          <Room2Thunderstorm />
          <Room3DataVoid />
        </ScrollControls>

        {/* Shaders & Postprocessing Stack */}
        <EffectComposer>
          <ChromaticAberration offset={new THREE.Vector2(0.002, 0.002)} />
          <Noise opacity={0.08} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
      </Canvas>
    </main>
  );
}
