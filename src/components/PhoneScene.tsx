"use client";

import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Float,
  RoundedBox,
  MeshTransmissionMaterial,
  Text,
} from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

/* ───────────────────────────────────────────
   Phone Mesh — floating glass smartphone
   ─────────────────────────────────────────── */
function Phone({ mouse }: { mouse: { x: number; y: number } }) {
  const groupRef = useRef<THREE.Group>(null!);
  const screenRef = useRef<THREE.Mesh>(null!);
  const { viewport } = useThree();

  // Gentle tracking on mouse move
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x +=
        (mouse.y * 0.05 - groupRef.current.rotation.x) * 0.05;
      groupRef.current.rotation.y +=
        (mouse.x * 0.05 - groupRef.current.rotation.y) * 0.05;
    }
  });

  // Animate screen glow pulse
  useFrame(({ clock }) => {
    if (screenRef.current) {
      const pulse = Math.sin(clock.getElapsedTime() * 1.2) * 0.1 + 0.9;
      if (Array.isArray(screenRef.current.material)) return;
      (screenRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity =
        pulse;
    }
  });

  const scale = Math.min(viewport.width / 8, 1.8);

  return (
    <group ref={groupRef} scale={scale}>
      {/* Float wrapper for idle bobbing */}
      <Float speed={1.2} rotationIntensity={0.08} floatIntensity={0.5}>
        {/* Phone body — dark glass */}
        <RoundedBox
          args={[2.4, 4.8, 0.3]}
          radius={0.25}
          smoothness={6}
          position={[0, 0, 0]}
        >
          <MeshTransmissionMaterial
            backside
            samples={8}
            resolution={256}
            transmissionSampler={false}
            thickness={0.5}
            roughness={0.1}
            metalness={0.9}
            clearcoat={1}
            clearcoatRoughness={0.1}
            ior={1.5}
            chromaticAberration={0.03}
            color="#1a1a2e"
            envMapIntensity={1.5}
          />
        </RoundedBox>

        {/* Screen surface */}
        <mesh ref={screenRef} position={[0, 0, 0.16]}>
          <planeGeometry args={[2.1, 4.2]} />
          <meshStandardMaterial
            color="#0f0f23"
            emissive="#6c5ce7"
            emissiveIntensity={0.3}
            metalness={0.3}
            roughness={0.4}
          />
        </mesh>

        {/* Screen content — subtle gradient grid */}
        <mesh position={[0, 0, 0.17]}>
          <planeGeometry args={[2.0, 4.0]} />
          <meshBasicMaterial
            transparent
            opacity={0.15}
            color="#6c5ce7"
            wireframe
          />
        </mesh>

        {/* "Reel" text placeholder on screen */}
        <Text
          position={[0, 0.8, 0.18]}
          fontSize={0.2}
          color="#6c5ce7"
          anchorX="center"
          anchorY="middle"
          fillOpacity={0.6}
        >
          ▶ REEL
        </Text>
        <Text
          position={[0, -0.8, 0.18]}
          fontSize={0.12}
          color="#a0a0a0"
          anchorX="center"
          anchorY="middle"
          fillOpacity={0.3}
        >
          loading...
        </Text>

        {/* Tiny camera dot */}
        <mesh position={[0, 2.2, 0.18]}>
          <circleGeometry args={[0.04, 16]} />
          <meshBasicMaterial color="#2a2a3e" />
        </mesh>

        {/* Side buttons */}
        <mesh position={[1.22, 0.6, 0]}>
          <boxGeometry args={[0.06, 0.3, 0.06]} />
          <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[1.22, 1.0, 0]}>
          <boxGeometry args={[0.06, 0.3, 0.06]} />
          <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
        </mesh>
      </Float>
    </group>
  );
}

/* ───────────────────────────────────────────
   Scene Setup with lighting
   ─────────────────────────────────────────── */
function Scene() {
  const mouse = useRef({ x: 0, y: 0 });

  const handlePointerMove = (e: { clientX: number; clientY: number }) => {
    mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
  };

  return (
    <div
      className="w-full h-full"
      onPointerMove={(e) =>
        handlePointerMove({ clientX: e.clientX, clientY: e.clientY })
      }
    >
      <Canvas
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        camera={{
          position: [0, 0, 6],
          fov: 30,
          near: 0.1,
          far: 20,
        }}
        style={{ background: "transparent" }}
      >
        {/* Ambient + Key lights */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[2, 3, 4]} intensity={1.2} />
        <directionalLight position={[-2, -1, 2]} intensity={0.6} color="#6c5ce7" />
        <pointLight position={[0, 2, 2]} intensity={0.4} color="#6c5ce7" />
        <hemisphereLight
          args={["#6c5ce7", "#1a1a2e", 0.3]}
          position={[0, 1, 0]}
        />

        {/* The phone */}
        <Phone mouse={mouse.current} />
      </Canvas>
    </div>
  );
}

/* ───────────────────────────────────────────
   Exported wrapper with fade-in
   ─────────────────────────────────────────── */
export default function PhoneScene() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="w-full h-full"
    >
      <Scene />
    </motion.div>
  );
}

