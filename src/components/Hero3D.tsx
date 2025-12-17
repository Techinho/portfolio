import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, Environment, ContactShadows, Center, Sphere } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

// --- Luxury Materials ---
const useMaterials = () => {
  const gold = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#FFD700",
    roughness: 0.1,
    metalness: 1,
    envMapIntensity: 2,
  }), []);

  const wireframeGold = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#FFD700",
    roughness: 0.1,
    metalness: 1,
    wireframe: true,
    transparent: true,
    opacity: 0.3,
  }), []);

  const obsidian = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: "#000000",
    roughness: 0.1,
    metalness: 0.9,
    clearcoat: 1,
    reflectivity: 1,
  }), []);

  return { gold, wireframeGold, obsidian };
};

// --- The Golden Nexus ---
// A complex, gyroscope-like structure representing global connectivity and precision.

function Ring({ radius, speed, axis, material, thickness = 0.05 }: any) {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      if (axis === 'x') ref.current.rotation.x += speed;
      if (axis === 'y') ref.current.rotation.y += speed;
      if (axis === 'z') ref.current.rotation.z += speed;
    }
  });

  return (
    <mesh ref={ref} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[radius, thickness, 16, 100]} />
      <primitive object={material} />
    </mesh>
  );
}

function Core() {
  const { gold, obsidian, wireframeGold } = useMaterials();
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.2;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={group}>
      {/* Central Sphere (The World) */}
      <mesh>
        <sphereGeometry args={[1.5, 32, 32]} />
        <primitive object={obsidian} />
      </mesh>

      {/* Wireframe Overlay (The Network) */}
      <mesh scale={1.02}>
        <sphereGeometry args={[1.5, 16, 16]} />
        <primitive object={wireframeGold} />
      </mesh>

      {/* Orbiting Satellite Nodes */}
      <group rotation={[0, 0, Math.PI / 4]}>
        <mesh position={[2.2, 0, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <primitive object={gold} />
        </mesh>
        <mesh position={[-2.2, 0, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <primitive object={gold} />
        </mesh>
      </group>

      {/* Gyroscopic Rings */}
      <Ring radius={2.5} thickness={0.08} speed={0.005} axis="y" material={gold} />
      <Ring radius={3.2} thickness={0.05} speed={-0.003} axis="x" material={gold} />
      <Ring radius={3.8} thickness={0.02} speed={0.008} axis="z" material={gold} />

    </group>
  );
}

function Scene() {
  return (
    <group>
      <Center>
        <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
          <Core />
        </Float>
      </Center>
      
      {/* Dramatic Shadow */}
      <ContactShadows position={[0, -5, 0]} opacity={0.5} scale={20} blur={2} far={5} color="#000" />
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none bg-[#050505]">
      <Canvas gl={{ antialias: true, alpha: false }} dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={45} />
        
        {/* High Contrast Lighting */}
        <ambientLight intensity={0.2} />
        
        {/* Gold Highlight */}
        <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={3} color="#FFD700" />
        
        {/* Rim Light */}
        <spotLight position={[-10, 0, -5]} intensity={2} color="#ffffff" />
        
        {/* Bottom Glow */}
        <pointLight position={[0, -5, 0]} intensity={1} color="#B8860B" />

        <Environment preset="city" />

        <Scene />
      </Canvas>
    </div>
  );
}
