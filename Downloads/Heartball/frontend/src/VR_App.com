import React, { useRef, useEffect, forwardRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Sphere, Text, OrbitControls } from '@react-three/drei';
import { create } from 'zustand';
import { MathUtils, Vector3 } from 'three';
import { Physics, usePlane, useSphere } from '@react-three/cannon';
import PropTypes from 'prop-types';

// State management with Zustand for a shared game state
const useGameStore = create((set) => ({
  playerRole: 'qb',
  vrMode: 'off',
  message: 'Choose your role and get ready!',
  sackOccurred: false,
  sackSoundTrigger: 0,
  setPlayerRole: (role) => set({ playerRole: role, message: `You are now the ${role.toUpperCase()}!` }),
  setVrMode: (mode) => set({ vrMode: mode }),
  setMessage: (msg) => set({ message: msg }),
  setSackOccurred: (status) => {
    set({ sackOccurred: status });
    if (status) {
      set({ sackSoundTrigger: Date.now(), vrMode: 'off' });
      set({ message: 'SACK!' });
    }
  },
  resetGame: () =>
    set({
      playerRole: 'qb',
      vrMode: 'off',
      sackOccurred: false,
      message: 'Game reset. Choose your role.',
      sackSoundTrigger: 0,
    }),
}));

// A component to represent the football field
const FootballField = () => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], position: [0, 0, 0] }));

  return (
    <group>
      {/* Field Plane with physics */}
      <mesh ref={ref} receiveShadow>
        <planeGeometry args={[100, 53]} />
        <meshStandardMaterial color="#3C7F45" />
      </mesh>

      {/* Yard Lines (visual only) */}
      <Box args={[100, 0.05, 0.2]} position={[0, 0.01, 0]} material-color="#FFFFFF" />
      <Box args={[100, 0.05, 0.2]} position={[0, 0.01, 10]} material-color="#FFFFFF" />
      <Box args={[100, 0.05, 0.2]} position={[0, 0.01, -10]} material-color="#FFFFFF" />

      {/* Goalposts (simplified, visual only) */}
      <Box args={[0.2, 10, 0.2]} position={[0, 5, -25]} material-color="#F7E68F" />
      <Box args={[0.2, 10, 0.2]} position={[0, 5, 25]} material-color="#F7E68F" />
    </group>
  );
};

// Player models with text labels
const Player = forwardRef(({ color, label }, ref) => {
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} />
      <Text
        position={[0, 1.5, 0]}
        fontSize={0.8}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </mesh>
  );
});

Player.propTypes = {
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

// The core game logic and camera control component
const GameManager = () => {
  const { playerRole, vrMode, sackOccurred, setVrMode, setSackOccurred, setMessage } = useGameStore();

  const initialQbPosition = [0, 1, -5];
  const initialDefenderPosition = [10, 1, -5];

  const [qbRef, qbApi] = useSphere(() => ({
    mass: 1,
    position: initialQbPosition,
    args: [1],
    userData: { name: 'qb' },
    onCollide: (e) => {
      if (e.body.userData.name === 'defender') {
        setSackOccurred(true);
        setVrMode(playerRole === 'qb' ? 'qb-view' : 'defender-view');
        setMessage('SACK!');
      }
    },
  }));

  const [defenderRef, defenderApi] = useSphere(() => ({
    mass: 1,
    position: initialDefenderPosition,
    args: [1],
    userData: { name: 'defender' },
  }));

  const keys = useRef({ w: false, a: false, s: false, d: false });
  const fallProgress = useRef(0);

  // Keyboard event listeners for QB movement
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === 'w') keys.current.w = true;
      if (e.key.toLowerCase() === 'a') keys.current.a = true;
      if (e.key.toLowerCase() === 's') keys.current.s = true;
      if (e.key.toLowerCase() === 'd') keys.current.d = true;
    };
    const handleKeyUp = (e) => {
      if (e.key.toLowerCase() === 'w') keys.current.w = false;
      if (e.key.toLowerCase() === 'a') keys.current.a = false;
      if (e.key.toLowerCase() === 's') keys.current.s = false;
      if (e.key.toLowerCase() === 'd') keys.current.d = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // Reset player positions, velocities, and rotations when game resets
  useEffect(() => {
    const unsubscribe = useGameStore.subscribe(
      (state) => state.sackOccurred,
      (sackOccurred, prevSackOccurred) => {
        if (prevSackOccurred && !sackOccurred && qbApi && defenderApi && qbRef.current && defenderRef.current) {
          qbApi.position.set(...initialQbPosition);
          defenderApi.position.set(...initialDefenderPosition);
          qbApi.velocity.set(0, 0, 0);
          defenderApi.velocity.set(0, 0, 0);
          qbRef.current.rotation.set(0, 0, 0);
          defenderRef.current.rotation.set(0, 0, 0);
          fallProgress.current = 0;
        }
      }
    );

    return () => unsubscribe();
  }, [qbApi, defenderApi]);

  useFrame(({ camera }) => {
    if (!qbRef.current || !defenderRef.current) return;

    const qbPos = new Vector3();
    qbRef.current.getWorldPosition(qbPos);
    const defPos = new Vector3();
    defenderRef.current.getWorldPosition(defPos);

    if (!sackOccurred) {
      // QB movement via keyboard
      const speed = 0.1;
      const velocity = new Vector3(0, 0, 0);
      if (keys.current.w) velocity.z -= speed;
      if (keys.current.s) velocity.z += speed;
      if (keys.current.a) velocity.x -= speed;
      if (keys.current.d) velocity.x += speed;
      qbApi.velocity.set(velocity.x, qbRef.current.velocity?.y || 0, velocity.z); // Preserve y velocity for physics

      // Defender chases QB with more realistic movement
      const direction = qbPos.clone().sub(defPos).normalize();
      const defenderSpeed = 0.08;
      defenderApi.velocity.set(direction.x * defenderSpeed, defenderRef.current.velocity?.y || 0, direction.z * defenderSpeed);
    } else {
      // Stop movement on sack
      qbApi.velocity.set(0, 0, 0);
      defenderApi.velocity.set(0, 0, 0);

      // Simple fall animation for QB
      if (fallProgress.current < 1) {
        fallProgress.current += 0.01;
      }
      qbRef.current.rotation.x = MathUtils.lerp(0, Math.PI / 2, fallProgress.current);
    }

    // Camera control based on vrMode
    let fovChanged = false;
    if (vrMode === 'qb-view') {
      camera.position.lerp(new Vector3(qbPos.x - 2, qbPos.y + 1.5, qbPos.z - 2), 0.1);
      camera.lookAt(defPos);
      if (camera.fov !== 90) {
        camera.fov = 90;
        fovChanged = true;
      }
    } else if (vrMode === 'defender-view') {
      camera.position.lerp(new Vector3(defPos.x + 2, defPos.y + 1.5, defPos.z + 2), 0.1);
      camera.lookAt(qbPos);
      if (camera.fov !== 90) {
        camera.fov = 90;
        fovChanged = true;
      }
    } else {
      camera.position.lerp(new Vector3(0, 10, 20), 0.1);
      camera.lookAt(0, 0, 0);
      if (camera.fov !== 75) {
        camera.fov = 75;
        fovChanged = true;
      }
    }

    if (fovChanged) {
      camera.updateProjectionMatrix();
    }
  });

  return (
    <>
      <Player ref={qbRef} color="#3498DB" label="QB" />
      <Player ref={defenderRef} color="#C0392B" label="Defender" />
    </>
  );
};

// Main App component
const App = () => {
  const { message, setPlayerRole, playerRole, resetGame, vrMode, sackSoundTrigger } = useGameStore();

  const sackSound = useRef(new Audio('https://freesound.org/data/previews/648/648448_14426531-lq.mp3'));

  useEffect(() => {
    if (sackSoundTrigger) {
      sackSound.current.play().catch((error) => console.error('Audio playback failed:', error));
    }
  }, [sackSoundTrigger]);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-4 font-sans">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-extrabold text-blue-400 mb-2">HFL VR Sack Simulator</h1>
        <p className="text-lg text-gray-300">Experience a sack from the QB or Defender's perspective. Use WASD to move the QB.</p>
      </div>

      <div className="w-full h-[60vh] md:h-[70vh] rounded-2xl overflow-hidden shadow-2xl bg-gray-800 border-2 border-gray-700">
        <Canvas camera={{ fov: 75, position: [0, 10, 20] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} castShadow />
          <Physics>
            <FootballField />
            <GameManager />
          </Physics>
          {vrMode === 'off' && <OrbitControls />}
        </Canvas>
      </div>

      <div className="mt-8 w-full max-w-2xl flex flex-col items-center">
        <div className="text-2xl font-bold mb-4 text-center text-blue-300">
          <p>{message}</p>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={() => setPlayerRole('qb')}
            className={`font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 ${
              playerRole === 'qb' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
            }`}
          >
            Play as QB
          </button>
          <button
            onClick={() => setPlayerRole('defender')}
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-rotate-ccw mr-2"
              >
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