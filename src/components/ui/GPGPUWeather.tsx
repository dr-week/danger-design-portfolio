"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";

const ParticleShaderMaterial = shaderMaterial(
  {
    uTime: 0,
    uColor: new THREE.Color("#ffffff"),
    uSpeed: 1.0,
  },
  // Vertex Shader
  `
    uniform float uTime;
    uniform float uSpeed;
    attribute vec3 velocity;
    
    varying float vAlpha;

    void main() {
      vec3 pos = position;
      
      // Calculate new position based on time, velocity, and gravity/wind (GPGPU equivalent via Vertex math)
      pos.x += velocity.x * uTime * uSpeed;
      pos.y -= velocity.y * uTime * uSpeed * 2.0;
      pos.z += velocity.z * uTime * uSpeed;

      // Wrap around bounds (-50 to 50)
      pos.x = mod(pos.x + 50.0, 100.0) - 50.0;
      pos.y = mod(pos.y + 50.0, 100.0) - 50.0;
      pos.z = mod(pos.z + 50.0, 100.0) - 50.0;
      
      // Fade edges
      vAlpha = smoothstep(50.0, 0.0, abs(pos.y));

      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      gl_Position = projectionMatrix * mvPosition;
      
      // Perspective size
      gl_PointSize = (10.0 / -mvPosition.z);
    }
  `,
  // Fragment Shader
  `
    uniform vec3 uColor;
    varying float vAlpha;
    
    void main() {
      // Circular particle
      vec2 center = gl_PointCoord - 0.5;
      float dist = length(center);
      if (dist > 0.5) discard;
      
      // Soft edge glow
      float alpha = (0.5 - dist) * 2.0 * vAlpha * 0.6;
      gl_FragColor = vec4(uColor, alpha);
    }
  `
);

extend({ ParticleShaderMaterial });

function ParticleSwarm({ count = 100000, color = "#ffb74d" }) {
  const materialRef = useRef<any>(null);

  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 100;
      pos[i + 1] = (Math.random() - 0.5) * 100;
      pos[i + 2] = (Math.random() - 0.5) * 100;

      vel[i] = (Math.random() - 0.5) * 2; // Wind X
      vel[i + 1] = Math.random() * 5 + 2;  // Gravity Y
      vel[i + 2] = (Math.random() - 0.5) * 2; // Wind Z
    }
    return [pos, vel];
  }, [count]);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uTime = state.clock.elapsedTime;
    }
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} args={[positions, 3]} />
        <bufferAttribute attach="attributes-velocity" count={count} args={[velocities, 3]} />
      </bufferGeometry>
      {/* @ts-ignore */}
      <particleShaderMaterial ref={materialRef} uColor={new THREE.Color(color)} transparent depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  );
}

export default function GPGPUWeather() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }} gl={{ alpha: true }}>
        <ParticleSwarm count={50000} color="#F59E0B" />
      </Canvas>
    </div>
  );
}
