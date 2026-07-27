"use client";

import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { shaderMaterial, useTexture } from "@react-three/drei";
import { extend } from "@react-three/fiber";

const ImageRevealMaterial = shaderMaterial(
  {
    uTexture: new THREE.Texture(),
    uHoverState: 0.0,
    uTime: 0.0,
  },
  // vertex shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // fragment shader
  `
    uniform sampler2D uTexture;
    uniform float uHoverState;
    uniform float uTime;
    varying vec2 vUv;

    // Simplex 2D noise
    vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
    float snoise(vec2 v){
      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
               -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy) );
      vec2 x0 = v -   i + dot(i, C.xx);
      vec2 i1;
      i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod(i, 289.0);
      vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
      + i.x + vec3(0.0, i1.x, 1.0 ));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
        dot(x12.zw,x12.zw)), 0.0);
      m = m*m ;
      m = m*m ;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    void main() {
      vec2 uv = vUv;
      
      // Calculate noise based on UV and Time
      float noise = snoise(uv * 3.0 + uTime * 0.5);
      
      // Distortion effect
      vec2 distortedUv = uv + noise * (1.0 - uHoverState) * 0.1;
      
      vec4 texColor = texture2D(uTexture, distortedUv);
      
      // Grayscale conversion for non-hovered state
      float gray = dot(texColor.rgb, vec3(0.299, 0.587, 0.114));
      vec3 finalColor = mix(vec3(gray) * vec3(1.2, 1.0, 0.8), texColor.rgb, uHoverState);
      
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
);

extend({ ImageRevealMaterial });

function RevealScene({ imageUrl, isHovered }: { imageUrl: string; isHovered: boolean }) {
  const materialRef = useRef<any>(null);
  const texture = useTexture(imageUrl);

  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.uTime = state.clock.elapsedTime;
      // Smooth interpolation for hover state
      materialRef.current.uHoverState += (isHovered ? 1 - materialRef.current.uHoverState : 0 - materialRef.current.uHoverState) * delta * 5;
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      {/* @ts-ignore */}
      <imageRevealMaterial ref={materialRef} uTexture={texture} />
    </mesh>
  );
}

export default function GLSLImageReveal({ imageUrl }: { imageUrl: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="absolute inset-0 w-full h-full cursor-pointer z-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Canvas
        camera={{ position: [0, 0, 1] }}
        gl={{ alpha: true, antialias: false }}
        frameloop="always"
      >
        <RevealScene imageUrl={imageUrl} isHovered={isHovered} />
      </Canvas>
    </div>
  );
}
