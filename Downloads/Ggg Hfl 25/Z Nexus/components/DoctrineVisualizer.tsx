import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Grid, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface DoctrineVisualizerProps {
  doctrine: string;
  color: string;
}

const DoctrineVisualizer: React.FC<DoctrineVisualizerProps> = ({ doctrine, color }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const doctrineLower = doctrine.toLowerCase();

  // Generate random points for particle effects
  const particles = useMemo(() => {
    const count = 500;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.03;
    }
  });

  const isCelestial = doctrineLower.includes('celestial') || doctrineLower.includes('star') || doctrineLower.includes('space');
  const isGrid = doctrineLower.includes('grid') || doctrineLower.includes('tech') || doctrineLower.includes('digital');
  const isVoid = doctrineLower.includes('void') || doctrineLower.includes('shadow') || doctrineLower.includes('dark');
  const isTectonic = doctrineLower.includes('tectonic') || doctrineLower.includes('earth') || doctrineLower.includes('rock');
  const isCrystalline = doctrineLower.includes('crystalline') || doctrineLower.includes('crystal');

  return (
    <group>
      {/* Background Particles */}
      <Points ref={pointsRef} positions={particles} stride={3}>
        <PointMaterial
          transparent
          color={color}
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>

      {/* Grid Effect */}
      {isGrid && (
        <Grid
          position={[0, -2, 0]}
          args={[20, 20]}
          sectionSize={1}
          sectionColor={color}
          sectionThickness={1}
          fadeDistance={25}
          infiniteGrid
        />
      )}

      {/* Celestial Sphere */}
      {isCelestial && (
        <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
          <mesh scale={[8, 8, 8]}>
            <sphereGeometry args={[1, 64, 64]} />
            <meshStandardMaterial 
              color={color} 
              wireframe 
              transparent 
              opacity={0.1} 
              emissive={color} 
              emissiveIntensity={0.5} 
            />
          </mesh>
        </Float>
      )}

      {/* Void Effect */}
      {isVoid && (
        <mesh scale={[5, 5, 5]}>
          <torusKnotGeometry args={[1, 0.3, 128, 16]} />
          <MeshDistortMaterial
            color="#000"
            emissive={color}
            emissiveIntensity={0.2}
            distort={0.6}
            speed={2}
          />
        </mesh>
      )}

      {/* Tectonic / Earth Effect */}
      {isTectonic && (
        <group position={[0, -3, 0]}>
           <mesh rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[15, 15, 32, 32]} />
              <meshStandardMaterial color={color} wireframe />
           </mesh>
        </group>
      )}

      {/* Crystalline Effect */}
      {isCrystalline && (
        <Float speed={3}>
          <mesh>
            <octahedronGeometry args={[2, 0]} />
            <meshStandardMaterial 
              color={color} 
              metalness={1} 
              roughness={0} 
              transparent 
              opacity={0.6} 
              emissive={color} 
              emissiveIntensity={0.5} 
            />
          </mesh>
        </Float>
      )}
    </group>
  );
};

export default DoctrineVisualizer;
