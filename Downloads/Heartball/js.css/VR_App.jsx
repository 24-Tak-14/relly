import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Sphere, Text, OrbitControls } from '@react-three/drei';
import { create } from 'zustand';
import { Vector3 } from 'three';

// State management with Zustand for a shared game state
const useGameStore = create((set) => ({
  // The player's current role ('qb' or 'defender')
  playerRole: 'qb',
  // The current VR camera mode ('off', 'qb-view', or 'defender-view')
  vrMode: 'off',
  // The current message displayed to the user
  message: 'Choose your role and get ready!',
  // State to track if a sack has occurred
  sackOccurred: false,
  // Player positions, managed in the store as plain objects
  qbPosition: { x: 0, y: 1.5, z: -5 },
  defenderPosition: { x: 10, y: 1.5, z: -5 },
  
  // Actions to update the state
  setPlayerRole: (role) => set({ playerRole: role, message: `You are now the ${role.toUpperCase()}!` }),
  setVrMode: (mode) => set({ vrMode: mode }),
  setMessage: (msg) => set({ message: msg }),
  setSackOccurred: (status) => set({ sackOccurred: status }),
  resetGame: () => set({
    vrMode: 'off',
    sackOccurred: false,
    message: 'Game reset. Choose your role.',
    qbPosition: { x: 0, y: 1.5, z: -5 },
    defenderPosition: { x: 10, y: 1.5, z: -5 },
  }),
}));

// A component to represent the football field
const FootballField = () => {
  return (
    <group>
      {/* Field Plane */}
      <Box args={[100, 0.1, 53]} position={[0, -0.05, 0]} material-color="#3C7F45" />

      {/* Yard Lines */}
      <Box args={[100, 0.05, 0.2]} position={[0, 0, 0]} material-color="#FFFFFF" />
      <Box args={[100, 0.05, 0.2]} position={[0, 0, 10]} material-color="#FFFFFF" />
      <Box args={[100, 0.05, 0.2]} position={[0, 0, -10]} material-color="#FFFFFF" />

      {/* Goalposts (simplified) */}
      <Box args={[0.2, 10, 0.2]} position={[0, 5, -25]} material-color="#F7E68F" />
      <Box args={[0.2, 10, 0.2]} position={[0, 5, 25]} material-color="#F7E68F" />
    </group>
  );
};

// Component to handle game logic and camera updates
const PlayerAndGameLogic = () => {
  const {
    playerRole, vrMode, sackOccurred,
    setVrMode, setSackOccurred, setMessage,
    qbPosition, defenderPosition
  } = useGameStore();

  useFrame(({ camera }) => {
    const qbVector = new Vector3(qbPosition.x, qbPosition.y, qbPosition.z);
    const defenderVector = new Vector3(defenderPosition.x, defenderPosition.y, defenderPosition.z);

    // If a sack hasn't occurred, move the defender towards the QB
    if (!sackOccurred) {
      const distance = qbVector.distanceTo(defenderVector);

      // Check for sack condition (distance below a threshold)
      if (distance < 2.5) {
        setSackOccurred(true);
        setVrMode(playerRole === 'qb' ? 'qb-view' : 'defender-view');
        setMessage('SACK!');
      } else {
        // Simple defender movement towards the QB
        const newDefenderVector = defenderVector.clone().lerp(qbVector, 0.01);
        useGameStore.setState({ defenderPosition: { x: newDefenderVector.x, y: newDefenderVector.y, z: newDefenderVector.z } });
      }
    }

    // Camera control based on vrMode
    if (vrMode === 'qb-view') {
      camera.position.lerp(qbVector.clone().add(new Vector3(-2, 1.5, -2)), 0.1);
      camera.lookAt(defenderVector);
      camera.fov = 90; // Adjust FOV for an immersive feel
      camera.updateProjectionMatrix();
    } else if (vrMode === 'defender-view') {
      camera.position.lerp(defenderVector.clone().add(new Vector3(2, 1.5, 2)), 0.1);
      camera.lookAt(qbVector);
      camera.fov = 90; // Adjust FOV for an immersive feel
      camera.updateProjectionMatrix();
    } else {
      // Default non-VR camera position
      camera.position.lerp(new Vector3(0, 10, 20), 0.1);
      camera.lookAt(0, 0, 0);
      camera.fov = 75; // Default FOV
      camera.updateProjectionMatrix();
    }
  });

  return null; // This component doesn't render anything, it only handles logic
}


// The main game logic and scene setup component
const GameScene = () => {
  const { 
    qbPosition, defenderPosition, vrMode
  } = useGameStore();

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <FootballField />
      
      {/* QB player mesh with Text label */}
      <group position={[qbPosition.x, qbPosition.y, qbPosition.z]}>
        <Sphere args={[1, 32, 32]} material-color="#3498DB" />
        <Text
          position={[0, 1.5, 0]}
          fontSize={0.8}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          QB
        </Text>
      </group>

      {/* Defender player mesh with Text label */}
      <group position={[defenderPosition.x, defenderPosition.y, defenderPosition.z]}>
        <Sphere args={[1, 32, 32]} material-color="#C0392B" />
        <Text
          position={[0, 1.5, 0]}
          fontSize={0.8}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          Defender
        </Text>
      </group>
      
      <PlayerAndGameLogic />

      {/* Only allow OrbitControls when not in VR mode */}
      {vrMode === 'off' && <OrbitControls />}
    </>
  );
};

// Main App component
const App = () => {
  // Access the game state and actions from the Zustand store
  const { message, setPlayerRole, playerRole, resetGame, vrMode } = useGameStore();

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-4 font-sans">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-extrabold text-blue-400 mb-2">HFL VR Sack Simulator</h1>
        <p className="text-lg text-gray-300">Experience a sack from the QB or Defender's perspective.</p>
      </div>

      <div className="w-full h-[60vh] md:h-[70vh] rounded-2xl overflow-hidden shadow-2xl bg-gray-800 border-2 border-gray-700">
        <Canvas camera={{ fov: 75, position: [0, 10, 20] }}>
          <GameScene />
        </Canvas>
      </div>

      <div className="mt-8 w-full max-w-2xl flex flex-col items-center">
        <div className="text-2xl font-bold mb-4 text-center text-blue-300">
          <p>{message}</p>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={() => setPlayerRole('qb')}
            disabled={vrMode !== 'off'}
            className={`font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 ${
              playerRole === 'qb' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
            }`}
          >
            Play as QB
          </button>
          <button
            onClick={() => setPlayerRole('defender')}
            disabled={vrMode !== 'off'}
            className={`font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 ${
              playerRole === 'defender' ? 'bg-red-600 text-white' : 'bg-gray-700 text-gray-300'
            }`}
          >
            Play as Defender
          </button>
          <button
            onClick={resetGame}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rotate-ccw mr-2">
                <path d="M3 13.5a9 9 0 1 0 9-9.5c.34-.02.68.02 1.01.09" />
                <path d="M3.7 7.1A2.5 2.5 0 0 0 2 9.5v5a2.5 2.5 0 0 0 1.7 2.4" />
                <path d="M12 11V5h6" />
              </svg>
              Reset
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
