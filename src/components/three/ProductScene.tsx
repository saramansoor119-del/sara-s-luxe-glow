import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, ContactShadows, OrbitControls } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function Bottle({ tone = "#e8b4d8" }: { tone?: string }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.4;
  });
  return (
    <group ref={ref}>
      <mesh position={[0, -0.4, 0]} castShadow>
        <cylinderGeometry args={[0.7, 0.7, 1.6, 48]} />
        <meshPhysicalMaterial color={tone} roughness={0.1} transmission={0.45} thickness={0.6} />
      </mesh>
      <mesh position={[0, 0.6, 0]} castShadow>
        <cylinderGeometry args={[0.28, 0.28, 0.5, 32]} />
        <meshStandardMaterial color="#d4a574" metalness={0.9} roughness={0.18} />
      </mesh>
      <mesh position={[0, 1.1, 0]} castShadow>
        <sphereGeometry args={[0.36, 32, 32]} />
        <meshStandardMaterial color="#c89968" metalness={0.85} roughness={0.25} />
      </mesh>
    </group>
  );
}

export function ProductScene({ tone }: { tone?: string }) {
  return (
    <Canvas shadows camera={{ position: [0, 0.3, 4], fov: 40 }} dpr={[1, 1.8]}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 5, 4]} intensity={1.2} castShadow />
        <pointLight position={[-3, 2, 2]} intensity={0.7} color="#ffd9ec" />
        <Bottle tone={tone} />
        <ContactShadows position={[-0, -1.4, 0]} opacity={0.4} blur={2.5} scale={6} />
        <Environment preset="studio" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
      </Suspense>
    </Canvas>
  );
}
