"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls, useScroll, Html, Text, Float } from "@react-three/drei";
import { EffectComposer, ChromaticAberration, Noise, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";
import Link from "next/link";

// 1. Camera Rig driven by ScrollControls & Handheld Breathing Physics
function CameraRig() {
  const scroll = useScroll();

  useFrame((state) => {
    const progress = scroll.offset; // 0 to 1
    
    // Z-axis movement through spatial void (0 to -25)
    const targetZ = -progress * 25;
    
    // Handheld camera sine breathing effect
    const time = state.clock.getElapsedTime();
    const breathX = Math.sin(time * 1.5) * 0.15;
    const breathY = Math.cos(time * 1.2) * 0.15;

    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, breathX, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, breathY, 0.05);
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.08);

    // Dynamic rotation towards room focal points
    state.camera.rotation.z = Math.sin(time * 0.8) * 0.02;
  });

  return null;
}

// 2. Room 1: Retro CRT Monitor & Footage (Z: -5)
function Room1Retro() {
  return (
    <group position={[0, 0, -5]}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
        {/* CRT TV Mesh */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[3.2, 2.4, 1.5]} />
          <meshStandardMaterial color="#18181b" roughness={0.3} metalness={0.8} />
        </mesh>

        {/* Screen Mesh */}
        <mesh position={[0, 0, 0.76]}>
          <planeGeometry args={[2.8, 2.0]} />
          <meshBasicMaterial color="#0f172a" />
        </mesh>
      </Float>

      {/* 3D Floating Handwritten Annotation */}
      <Html position={[-2.2, 1.4, 0]} transform distanceFactor={6}>
        <div className="bg-black/90 border border-amber-500/50 p-3 font-mono text-xs text-amber-400 max-w-xs shadow-2xl backdrop-blur-md">
          <p className="font-caveat text-xl text-zinc-200">// ROOM_01: RETRO_CRT</p>
          <p className="text-[10px] text-zinc-400 mt-1">Raw unedited video streams rendered inside 3D mesh frame.</p>
        </div>
      </Html>
    </group>
  );
}

// 3. Room 2: Brutalist Sculpture & Particle Storm (Z: -15)
function Room2Sculpture() {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate 800 WebGL Rain Particles
  const [positions] = useMemo(() => {
    const pos = new Float32Array(800 * 3);
    for (let i = 0; i < 800; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = -15 + (Math.random() - 0.5) * 15;
    }
    return [pos];
  }, []);

  useFrame(() => {
    if (!pointsRef.current) return;
    const array = pointsRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 1; i < array.length; i += 3) {
      array[i] -= 0.25; // Falling rain speed
      if (array[i] < -10) array[i] = 10;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <group position={[0, 0, -15]}>
      {/* Harsh Volumetric Spotlight */}
      <spotLight position={[5, 10, 5]} angle={0.4} penumbra={1} intensity={15} color="#fbbf24" castShadow />

      {/* Wireframe Sculpture Placeholder */}
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
        <pointsMaterial size={0.08} color="#ffffff" transparent opacity={0.6} sizeAttenuation />
      </points>

      <Html position={[2.5, 1, 0]} transform distanceFactor={6}>
        <div className="bg-black/90 border border-zinc-800 p-3 font-mono text-xs text-white max-w-xs shadow-2xl backdrop-blur-md">
          <p className="font-caveat text-xl text-amber-400">// ROOM_02: SCULPTURE_STORM</p>
          <p className="text-[10px] text-zinc-400 mt-1">Wireframe point-cloud geometry under harsh directional spotlight.</p>
        </div>
      </Html>
    </group>
  );
}

// 4. Room 3: Abstract Spatial Void & Fragmented Grid (Z: -25)
function Room3AbstractVoid() {
  return (
    <group position={[0, 0, -25]}>
      <Float speed={3} rotationIntensity={0.8}>
        <Text
          fontSize={1.2}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          position={[0, 1, 0]}
        >
          DANGER // LAB
        </Text>
      </Float>

      <Html position={[0, -1.2, 0]} transform distanceFactor={6}>
        <div className="bg-zinc-950 border-2 border-amber-500/80 p-5 text-center max-w-md shadow-2xl">
          <p className="font-mono text-xs text-amber-400 uppercase tracking-widest font-bold">
            [ SPATIAL COMPUTING SANDBOX COMPLETE ]
          </p>
          <p className="font-caveat text-lg text-zinc-300 mt-2">
            * You reached the end of the WebGL void.
          </p>
          <Link
            href="/"
            className="inline-block mt-4 px-4 py-2 bg-amber-400 text-black font-mono text-xs uppercase font-bold tracking-widest hover:bg-white transition-colors"
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
        // SCROLL_WHEEL: DRIVE_CAMERA_THROUGH_VOID (Z-AXIS)
      </div>

      {/* R3F WebGL Spatial Canvas */}
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        className="w-full h-full"
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />

        <ScrollControls pages={3} damping={0.2}>
          <CameraRig />
          <Room1Retro />
          <Room2Sculpture />
          <Room3AbstractVoid />
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
