import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';

interface Core3DViewportProps {
  children?: React.ReactNode;
}

const Core3DViewport: React.FC<Core3DViewportProps> = ({ children }) => {
  return (
    <div className="w-full h-[600px] bg-black/20 rounded-[2rem] border border-cyan-500/10 overflow-hidden relative shadow-inner">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 5, 10]} fov={50} />
        
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        {/* Environment & Effects */}
        <Suspense fallback={null}>
          <Environment preset="city" />
          {children}
          <ContactShadows position={[0, -1.4, 0]} opacity={0.75} scale={10} blur={2.5} far={4} />
        </Suspense>

        <OrbitControls 
          enablePan={false}
          minDistance={5}
          maxDistance={20}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>

      {/* Overlay UI */}
      <div className="absolute top-6 left-6 pointer-events-none">
        <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-cyan-500/20 shadow-lg">
          <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_8px_cyan]" />
          <span className="text-[10px] font-orbitron font-black text-cyan-400 uppercase tracking-widest">
            3D_VIEWPORT_ACTIVE
          </span>
        </div>
      </div>
    </div>
  );
};

export default Core3DViewport;
