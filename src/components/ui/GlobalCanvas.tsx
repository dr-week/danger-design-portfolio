"use client";

import { Canvas } from "@react-three/fiber";
import { Preload, Environment, Sparkles, Grid } from "@react-three/drei";
import { useAppStore } from "@/store/useAppStore";

function AtmosphereController() {
  const atmosphere = useAppStore((state) => state.atmosphere);

  if (atmosphere === "brutalist-lab") {
    return (
      <>
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.1} />
        {/* Cyan Rim Lighting */}
        <directionalLight position={[10, 5, -5]} intensity={2} color="#4fc3f7" />
        <directionalLight position={[-10, 5, 5]} intensity={1} color="#4fc3f7" />
        <Grid infiniteGrid fadeDistance={50} cellColor="#111" sectionColor="#222" />
      </>
    );
  }

  if (atmosphere === "coastal-concrete") {
    return (
      <>
        <color attach="background" args={["#110a05"]} />
        <ambientLight intensity={0.5} color="#ffd59e" />
        {/* Volumetric Warm God Rays */}
        <spotLight position={[5, 15, 5]} angle={0.3} penumbra={1} intensity={5} color="#ffb74d" castShadow />
        <Environment preset="sunset" />
        <Sparkles count={200} scale={20} size={2} speed={0.2} opacity={0.3} color="#ffb74d" />
      </>
    );
  }

  if (atmosphere === "darkroom") {
    return (
      <>
        <color attach="background" args={["#050505"]} />
        <ambientLight intensity={0.05} />
        {/* Strobe / High Contrast */}
        <pointLight position={[0, 2, 0]} intensity={10} color="#ffffff" distance={10} decay={2} />
        <spotLight position={[-5, 5, -5]} angle={0.2} penumbra={0.5} intensity={5} color="#e0e0e0" />
      </>
    );
  }

  // Default "void" (Terminal)
  return (
    <>
      <color attach="background" args={["#000000"]} />
      <ambientLight intensity={0.2} />
      <Sparkles count={500} scale={30} size={1} speed={0.5} opacity={0.5} color="#ffffff" />
    </>
  );
}

export default function GlobalCanvas() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 2]}
      >
        <AtmosphereController />
        <Preload all />
      </Canvas>
    </div>
  );
}
