import React, { useMemo } from 'react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { Float, Text, MeshDistortMaterial, Shadow } from '@react-three/drei';

interface Asset3DContainerProps {
  type: 'LOGO' | 'HELMET' | 'UNIFORM';
  assetUrl: string;
  color?: string;
}

const LogoPlane: React.FC<{ url: string }> = ({ url }) => {
  // In a real Vite app, we'd ensure these paths are served. 
  // For the manifest, we'll try to load and fallback if fails.
  const texture = useLoader(THREE.TextureLoader, url, (loader) => {
    // loader.setPath('/');
  });

  return (
    <mesh castShadow receiveShadow>
      <planeGeometry args={[3, 3]} />
      <meshStandardMaterial 
        map={texture} 
        transparent={true} 
        side={THREE.DoubleSide}
        emissive={new THREE.Color('#fff')}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

const Asset3DContainer: React.FC<Asset3DContainerProps> = ({ type, assetUrl, color = '#06b6d4' }) => {
  return (
    <group>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        {type === 'LOGO' ? (
          <React.Suspense fallback={<mesh><boxGeometry /><meshStandardMaterial wireframe color={color}/></mesh>}>
            <LogoPlane url={assetUrl} />
          </React.Suspense>
        ) : (
          <mesh castShadow>
            <sphereGeometry args={[1.5, 32, 32]} />
            <MeshDistortMaterial 
                color={color} 
                speed={2} 
                distort={0.4} 
                radius={1}
                emissive={color}
                emissiveIntensity={0.2}
            />
          </mesh>
        )}
      </Float>

      {/* Decorative Ring */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
        <ringGeometry args={[2.5, 2.7, 64]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1} transparent opacity={0.5} />
      </mesh>
      
      {/* Label */}
      <Text
        position={[0, -3.5, 0]}
        fontSize={0.4}
        color="white"
        font="https://fonts.gstatic.com/s/orbitron/v30/y73_cX7r4vYFp7890N2N.woff"
        anchorX="center"
        anchorY="middle"
      >
        {type}_MANIFEST_NODE
      </Text>
    </group>
  );
};

export default Asset3DContainer;
