import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Sphere, Text, OrbitControls } from '@react-three/drei';
import { create } from 'zustand';
import { Vector3 } from 'three';

const useGameStore = create((set, get) => ({
  playerRole: 'qb',
  vrMode: 'off',
  message: 'Choose your role and get ready!',
  sackOccurred: false,
  qbPos: [0, 1.5, -5],
  defPos: [10, 1.5, -5],
  
  setPlayerRole: (role) => set({ playerRole: role, message: `You are now the ${role.toUpperCase()}!` }),
  setVrMode: (mode) => set({ vrMode: mode }),
  setSackOccurred: (status) => set({ sackOccurred: status }),
  resetGame: () => set({
    vrMode: 'off',
    sackOccurred: false,
    message: 'Game reset. Choose your role.',
    qbPos: [0, 1.5, -5],
    defPos: [10, 1.5, -5],
  }),
  moveDefender: () => {
    const { qbPos, defPos, sackOccurred } = get();
    if (sackOccurred) return;
    
    const qb = new Vector3(...qbPos);
    const def = new Vector3(...defPos);
    const distance = qb.distanceTo(def);
    
    if (distance < 2.5) {
      set({ sackOccurred: true, message: 'SACK!' });
      set({ vrMode: get().playerRole === 'qb' ? 'qb-view' : 'defender-view' });
    } else {
      const newDef = def.lerp(qb, 0.01);
      set({ defPos: [newDef.x, newDef.y, newDef.z] });
    }
  }
}));

const Field = () => (
  <group>
    <Box args={[100, 0.1, 53]} position={[0, -0.05, 0]} material-color="#3C7F45" />
    <Box args={[100, 0.05, 0.2]} position={[0, 0, 0]} material-color="#FFFFFF" />
    <Box args={[0.2, 10, 0.2]} position={[0, 5, -25]} material-color="#F7E68F" />
  </group>
);

const Player = ({ position, color, label }) => (
  <group position={position}>
    <Sphere args={[1]} material-color={color} />
    <Text position={[0, 1.5, 0]} fontSize={0.8} color="white">{label}</Text>
  </group>
);

const GameLogic = () => {
  const { vrMode, qbPos, defPos, moveDefender } = useGameStore();

  useFrame(({ camera }) => {
    moveDefender();
    
    const qb = new Vector3(...qbPos);
    const def = new Vector3(...defPos);
    
    if (vrMode === 'qb-view') {
      camera.position.lerp(qb.clone().add(new Vector3(-2, 1.5, -2)), 0.1);
      camera.lookAt(def);
    } else if (vrMode === 'defender-view') {
      camera.position.lerp(def.clone().add(new Vector3(2, 1.5, 2)), 0.1);
      camera.lookAt(qb);
    } else {
      camera.position.lerp(new Vector3(0, 10, 20), 0.1);
      camera.lookAt(0, 0, 0);
    }
    
    camera.fov = vrMode !== 'off' ? 90 : 75;
    camera.updateProjectionMatrix();
  });

  return null;
};

const Scene = () => {
  const { qbPos, defPos, vrMode } = useGameStore();
  
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Field />
      <Player position={qbPos} color="#3498DB" label="QB" />
      <Player position={defPos} color="#C0392B" label="Defender" />
      <GameLogic />
      {vrMode === 'off' && <OrbitControls />}
    </>
  );
};

const App = () => {
  const { message, setPlayerRole, playerRole, resetGame, vrMode } = useGameStore();

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-blue-400 mb-6">HFL VR Sack Simulator</h1>
      
      <div className="w-full h-[60vh] rounded-2xl overflow-hidden bg-gray-800 border-2 border-gray-700">
        <Canvas camera={{ fov: 75, position: [0, 10, 20] }}>
          <Scene />
        </Canvas>
      </div>

      <div className="mt-8 text-center">
        <p className="text-2xl font-bold mb-4 text-blue-300">{message}</p>
        
        <div className="flex space-x-4">
          <button
            onClick={() => setPlayerRole('qb')}
            disabled={vrMode !== 'off'}
            className={`py-3 px-6 rounded-full font-bold transition ${
              playerRole === 'qb' ? 'bg-blue-600' : 'bg-gray-700'
            }`}
          >
            Play as QB
          </button>
          <button
            onClick={() => setPlayerRole('defender')}
            disabled={vrMode !== 'off'}
            className={`py-3 px-6 rounded-full font-bold transition ${
              playerRole === 'defender' ? 'bg-red-600' : 'bg-gray-700'
            }`}
          >
            Play as Defender
          </button>
          <button
            onClick={resetGame}
            className="bg-gray-700 hover:bg-gray-600 py-3 px-6 rounded-full font-bold transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;