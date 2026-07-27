"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import * as THREE from "three";

const MonogridBrushShader = {
  uniforms: {
    uTime: { value: 0 },
    uScrollVelocity: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uTexture: { value: null },
  },
  vertexShader: `
    varying vec2 vUv;
    varying vec3 vPosition;
    uniform float uScrollVelocity;
    uniform float uTime;

    void main() {
      vUv = uv;
      vec3 pos = position;
      
      // Dynamic vertex wave displacement on high scroll velocity
      float wave = sin(pos.x * 4.0 + uTime * 3.0) * cos(pos.y * 4.0 + uTime * 3.0);
      pos.z += wave * (uScrollVelocity * 0.12);
      
      vPosition = pos;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  fragmentShader: `
    varying vec2 vUv;
    varying vec3 vPosition;
    uniform float uTime;
    uniform float uScrollVelocity;
    uniform vec2 uMouse;
    uniform sampler2D uTexture;

    // Simplex Noise Generator
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

    float snoise(vec2 v) {
      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
               -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy) );
      vec2 x0 = v -   i + dot(i, C.xx);
      vec2 i1;
      i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod289(i);
      vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
      m = m*m ;
      m = m*m ;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    void main() {
      vec2 uv = vUv;
      
      // Calculate mouse proximity scratch displacement
      float dist = distance(uv, uMouse);
      float brushRadius = 0.35;
      float brushStrength = smoothstep(brushRadius, 0.0, dist);

      // Noise texture erosion mask
      float noiseVal = snoise(uv * 6.0 + vec2(uTime * 0.5, uScrollVelocity * 2.0));
      
      // Organic scratch erosion formula (Monogrid pattern)
      float revealMask = smoothstep(0.1, 0.8, noiseVal + brushStrength + uScrollVelocity * 0.5);

      vec3 baseColor = vec3(0.05, 0.05, 0.07); // Dark brutalist void base
      vec3 revealColor = mix(vec3(0.96, 0.62, 0.07), vec3(0.22, 0.74, 0.97), uv.y + noiseVal * 0.3); // Amber to Sky gradient

      vec3 finalColor = mix(baseColor, revealColor, revealMask);

      gl_FragColor = vec4(finalColor, 0.95);
    }
  `
};

export default function BrushTextureRevealPlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const scroll = useScroll();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uScrollVelocity: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uTexture: { value: null },
    }),
    []
  );

  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta;
      
      // Calculate scroll velocity delta
      const velocity = Math.abs(scroll.delta * 50);
      materialRef.current.uniforms.uScrollVelocity.value = THREE.MathUtils.lerp(
        materialRef.current.uniforms.uScrollVelocity.value,
        velocity,
        0.1
      );

      // Mouse coordinates in UV space
      const pointer = state.pointer;
      materialRef.current.uniforms.uMouse.value.set(
        (pointer.x + 1) / 2,
        (pointer.y + 1) / 2
      );
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -2]} scale={[12, 7, 1]}>
      <planeGeometry args={[1, 1, 64, 64]} />
      <shaderMaterial
        ref={materialRef}
        args={[MonogridBrushShader]}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}
