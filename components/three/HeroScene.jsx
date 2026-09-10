"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Shapes() {
  const group = useRef(null);
  const gold = useMemo(() => new THREE.MeshStandardMaterial({ color: "#d4a017", metalness: 0.55, roughness: 0.28 }), []);
  const steel = useMemo(() => new THREE.MeshStandardMaterial({ color: "#7eb8d4", metalness: 0.4, roughness: 0.35 }), []);
  const ink = useMemo(() => new THREE.MeshStandardMaterial({ color: "#1c2438", metalness: 0.2, roughness: 0.5, wireframe: true }), []);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = t * 0.12 + state.pointer.x * 0.45;
    group.current.rotation.x = 0.18 + state.pointer.y * 0.28;
  });

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.1}>
        <mesh position={[0, 0.1, 0]} material={gold}>
          <icosahedronGeometry args={[1.15, 0]} />
        </mesh>
      </Float>
      <Float speed={1.8} rotationIntensity={0.9} floatIntensity={1.4}>
        <mesh position={[1.7, 0.9, -0.4]} material={steel}>
          <octahedronGeometry args={[0.42, 0]} />
        </mesh>
      </Float>
      <Float speed={1.1} rotationIntensity={0.4} floatIntensity={0.8}>
        <mesh position={[-1.55, -0.7, 0.2]} material={ink} rotation={[0.4, 0.2, 0.1]}>
          <torusGeometry args={[0.55, 0.12, 12, 48]} />
        </mesh>
      </Float>
      <Float speed={1.6} rotationIntensity={0.5} floatIntensity={0.9}>
        <mesh position={[0.2, -1.15, 0.8]} material={steel} rotation={[1.2, 0.4, 0.2]}>
          <boxGeometry args={[0.55, 0.55, 0.55]} />
        </mesh>
      </Float>
      <Sparkles count={28} scale={6} size={2.4} speed={0.4} color="#d4a017" />
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5.2], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.45} />
      <pointLight position={[4, 3, 5]} intensity={1.6} color="#d4a017" />
      <pointLight position={[-4, -2, 2]} intensity={0.9} color="#7eb8d4" />
      <Shapes />
    </Canvas>
  );
}
