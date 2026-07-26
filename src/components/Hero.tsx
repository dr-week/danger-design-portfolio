"use client";
import { Canvas } from "@react-three/fiber";
import { PresentationControls, Float, Html } from "@react-three/drei";

export default function Hero() {
  return (
    <section className="relative w-full h-screen grid place-items-center bg-black">
      {/* Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <h1 className="text-[10vw] font-bold text-neutral-900 tracking-tighter">
          DANGER DESIGN
        </h1>
      </div>

      {/* The 3D Canvas */}
      <div className="z-10 w-full h-full">
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />

          <PresentationControls
            global
            rotation={[0.13, 0.1, 0]}
            polar={[-0.4, 0.2]}
            azimuth={[-1, 0.75]}
          >
            <Float rotationIntensity={0.4}>
              {/* Placeholder for the 3D Phone Mesh */}
              <mesh>
                <boxGeometry args={[1.5, 3, 0.2]} />
                <meshStandardMaterial
                  color="#222"
                  roughness={0.1}
                  metalness={0.8}
                />
                <Html transform position={[0, 0, 0.11]}>
                  {/* Video Texture Placeholder */}
                  <div className="w-[140px] h-[280px] bg-zinc-800 flex items-center justify-center text-xs text-zinc-500 border border-zinc-700">
                    YouTube Reel Loop
                  </div>
                </Html>
              </mesh>
            </Float>
          </PresentationControls>
        </Canvas>
      </div>

      {/* Overlay Copy */}
      <div className="absolute bottom-10 left-10 z-20">
        <h2 className="text-3xl font-bold">Dishant Naik</h2>
        <p className="text-gray-400 max-w-sm mt-2">
          I design interfaces, direct motion, and write the code to make them
          work.
        </p>
      </div>
    </section>
  );
}
