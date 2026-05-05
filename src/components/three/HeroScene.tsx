import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function Lipstick({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.4;
  });
  return (
    <group ref={ref} position={position}>
      {/* Tube */}
      <mesh position={[0, -0.4, 0]} castShadow>
        <cylinderGeometry args={[0.35, 0.35, 1.0, 32]} />
        <meshStandardMaterial color="#d4a574" metalness={0.85} roughness={0.18} />
      </mesh>
      {/* Bullet */}
      <mesh position={[0, 0.45, 0]} castShadow>
        <cylinderGeometry args={[0.27, 0.27, 0.7, 32]} />
        <meshStandardMaterial color="#c83a6e" roughness={0.35} />
      </mesh>
      <mesh position={[0, 0.85, 0]} castShadow>
        <coneGeometry args={[0.27, 0.3, 32]} />
        <meshStandardMaterial color="#c83a6e" roughness={0.35} />
      </mesh>
    </group>
  );
}

function CreamJar({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y -= dt * 0.3;
  });
  return (
    <group ref={ref} position={position}>
      <mesh position={[0, -0.3, 0]} castShadow>
        <cylinderGeometry args={[0.7, 0.7, 0.7, 48]} />
        <meshPhysicalMaterial color="#fce4ec" roughness={0.15} transmission={0.3} thickness={0.4} />
      </mesh>
      <mesh position={[0, 0.15, 0]} castShadow>
        <cylinderGeometry args={[0.72, 0.72, 0.25, 48]} />
        <meshStandardMaterial color="#d4a574" metalness={0.9} roughness={0.15} />
      </mesh>
    </group>
  );
}

function SerumBottle({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.35;
  });
  return (
    <group ref={ref} position={position}>
      <mesh position={[0, -0.2, 0]} castShadow>
        <cylinderGeometry args={[0.4, 0.4, 1.2, 32]} />
        <meshPhysicalMaterial color="#e8b4d8" roughness={0.1} transmission={0.5} thickness={0.5} />
      </mesh>
      <mesh position={[0, 0.55, 0]} castShadow>
        <cylinderGeometry args={[0.18, 0.18, 0.4, 24]} />
        <meshStandardMaterial color="#d4a574" metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0.9, 0]}>
        <sphereGeometry args={[0.22, 24, 24]} />
        <meshStandardMaterial color="#c89968" metalness={0.85} roughness={0.25} />
      </mesh>
    </group>
  );
}

export function HeroScene() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.6]}
      className="!absolute inset-0"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 5, 4]} intensity={1.1} castShadow />
        <pointLight position={[-3, 2, 2]} intensity={0.6} color="#ffd9ec" />

        <Float speed={1.4} rotationIntensity={0.5} floatIntensity={1.2}>
          <Lipstick position={[-1.7, 0.2, 0]} />
        </Float>
        <Float speed={1.1} rotationIntensity={0.4} floatIntensity={1.4}>
          <CreamJar position={[1.6, -0.3, 0]} />
        </Float>
        <Float speed={1.3} rotationIntensity={0.6} floatIntensity={1.0}>
          <SerumBottle position={[0.1, 0.6, 0.2]} />
        </Float>

        <ContactShadows position={[0, -1.5, 0]} opacity={0.35} blur={2.5} scale={8} />
        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  );
}
