// File: frontend/src/App.jsx

// This is the main application component. It manages the app's state,
// authentication, and renders different views based on user interaction.
// All components are now consolidated into this single file to resolve
// compilation errors related to file resolution.

import React, { useState, useEffect, useRef } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithCustomToken, signInAnonymously } from 'firebase/auth';
import { getFirestore, onSnapshot, collection, doc, setDoc, query, where } from 'firebase/firestore';
import { Home, Gamepad2, Settings, Users, Trophy, Sparkles } from 'lucide-react';
import { hutPlayerPool } from './components/GameCanvas';

// IMPORTANT: Global variables provided by the Canvas environment
// These are required for proper Firebase initialization and security
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {};
const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

// --- Components (Consolidated) ---

// This component is a simple placeholder for the game canvas.
const GameCanvas = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gray-900 rounded-lg overflow-hidden p-8 text-center text-gray-400 text-2xl">
      <p>Game Canvas will go here.</p>
      <p>Please implement the game logic in a separate file if needed.</p>
    </div>
  );
};

// This component displays a player's information in a visually engaging card format.
const PlayerCard = ({ player }) => {
  if (!player) {
    return (
      <div className="text-center text-gray-400">
        <p>No player data available.</p>
      </div>
    );
  }

  const rarityClasses = {
    'Clay': 'bg-gray-500 from-gray-600 to-gray-700',
    'Iron': 'bg-gray-400 from-gray-500 to-gray-600',
    'Bronze': 'bg-yellow-800 from-yellow-900 to-yellow-800',
    'Silver': 'bg-gray-300 from-gray-400 to-gray-500',
    'Gold': 'bg-yellow-400 from-yellow-500 to-yellow-600',
    'Glamour': 'bg-purple-600 from-purple-700 to-purple-800',
    '$Glamour-Bean$': 'bg-indigo-600 from-indigo-700 to-indigo-800',
    '@~ZORI~@': 'bg-red-600 from-red-700 to-red-800'
  };

  const getRarityClass = (rarity) => {
    return rarityClasses[rarity] || 'bg-gray-700 from-gray-800 to-gray-900';
  };

  const isRare = player.rarity === 'Gold' || player.rarity === 'Glamour' || player.rarity === '$Glamour-Bean$' || player.rarity === '@~ZORI~@';

  const canvasRef = useRef(null);

  useEffect(() => {
    if (!isRare || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createParticles = () => {
      particles = [];
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          alpha: Math.random()
        });
      }
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'lighter';

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.005;

        if (p.alpha <= 0 || p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
          p.x = Math.random() * canvas.width;
          p.y = Math.random() * canvas.height;
          p.radius = Math.random() * 1.5 + 0.5;
          p.vx = (Math.random() - 0.5) * 0.5;
          p.vy = (Math.random() - 0.5) * 0.5;
          p.alpha = 1;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animateParticles);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    createParticles();
    animateParticles();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isRare]);

  return (
    <div
      className={`relative w-96 h-[500px] rounded-2xl overflow-hidden shadow-2xl transition-transform transform hover:scale-105
                  border-2 border-gray-700 glow-animation bg-gradient-to-br ${getRarityClass(player.rarity)}`}
    >
      {/* Particle effect canvas for rare cards */}
      {isRare && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-10 w-full h-full"
        ></canvas>
      )}

      {/* Rarity and sparkles */}
      <div className={`absolute top-4 left-4 px-4 py-1 rounded-full text-xs font-bold uppercase z-20 text-white flex items-center bg-gray-900 bg-opacity-70 backdrop-blur-sm`}>
        {player.rarity === '@~ZORI~@' && <Sparkles size={16} className="mr-1 text-yellow-300 animate-pulse" />}
        {player.rarity}
      </div>

      {/* Player Image with subtle glow effect */}
      <div
        className="relative w-full h-2/3 bg-gray-900 border-b-2 border-gray-700 z-10"
        style={{
          backgroundImage: `url(${player.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: '0 0 15px rgba(125, 255, 255, 0.2) inset'
        }}
      ></div>

      {/* Player Info */}
      <div className="p-6 text-gray-200 z-20 relative">
        <h2 className="text-3xl font-extrabold mb-1 text-white">{player.name}</h2>
        <p className="text-xl font-medium text-gray-400 mb-4">{player.position} | {player.team}</p>

        {/* Attributes section */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          {Object.entries(player.attributes).map(([key, value]) => (
            <div key={key} className="flex flex-col items-center">
              <span className="text-sm uppercase font-semibold text-gray-500">{key}</span>
              <span className="text-lg font-bold text-white">{value}</span>
              <div className="w-full h-2 bg-gray-700 rounded-full mt-1 overflow-hidden">
                <div
                  className="h-full bg-cyan-400 transition-all duration-500"
                  style={{ width: `${value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// This component displays a list of players in a grid layout.
const PlayerList = ({ players }) => {
  if (!players || players.length === 0) {
    return (
      <div className="flex justify-center items-center h-full text-gray-400 text-lg">
        No players found in your collection. Open a pack to get started!
      </div>
    );
  }

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
      {players.map(player => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </div>
  );
};

// This component provides the UI for opening player packs.
const PackOpening = ({ onOpenPack, pulledPlayer }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center min-h-screen">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Open a Player Pack</h1>
      <button
        onClick={onOpenPack}
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition-transform transform hover:scale-105 shadow-xl flex items-center mb-8"
      >
        Open Pack!
      </button>
      {pulledPlayer && (
        <div className="mt-4">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4 animate-pulse">🎉 You Pulled a Player! 🎉</h2>
          <PlayerCard player={pulledPlayer} />
        </div>
      )}
    </div>
  );
};

// --- Main App Component ---
const App = () => {
  // Use state to manage Firebase instances and user ID
  const [db, setDb] = useState(null);
  const [auth, setAuth] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  // New state to hold the player card just pulled from a pack.
  const [pulledPlayer, setPulledPlayer] = useState(null);

  // New state to hold the player data from Firestore.
  const [userPlayers, setUserPlayers] = useState([]);
  const [loadingPlayers, setLoadingPlayers] = useState(true);
  const [playerError, setPlayerError] = useState(null);

  // Handle opening a pack and saving the player to Firestore
  const handleOpenPack = async () => {
    if (!db || !userId) {
      console.error("Firebase not initialized or user not authenticated.");
      return;
    }

    if (hutPlayerPool.players.length > 0) {
      try {
        const randomIndex = Math.floor(Math.random() * hutPlayerPool.players.length);
        const randomPlayer = hutPlayerPool.players[randomIndex];
        setPulledPlayer(randomPlayer);

        const playerRef = doc(db, `artifacts/${appId}/users/${userId}/myPlayers`, randomPlayer.id.toString());
        await setDoc(playerRef, randomPlayer);
        console.log("Player saved to Firestore:", randomPlayer.name);

      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };

  // Initialize Firebase and handle authentication
  useEffect(() => {
    const setupFirebase = async () => {
      try {
        const app = initializeApp(firebaseConfig);
        const dbInstance = getFirestore(app);
        const authInstance = getAuth(app);

        setDb(dbInstance);
        setAuth(authInstance);

        if (initialAuthToken) {
          await signInWithCustomToken(authInstance, initialAuthToken);
        } else {
          await signInAnonymously(authInstance);
        }

        authInstance.onAuthStateChanged(user => {
            if (user) {
              setUserId(user.uid);
            }
            setIsAuthReady(true);
        });

      } catch (error) {
        console.error("Error setting up Firebase:", error);
      }
    };

    setupFirebase();
  }, []);

  // Set up real-time listener for user's player collection
  useEffect(() => {
    if (db && userId) {
      const playersCollectionRef = collection(db, `artifacts/${appId}/users/${userId}/myPlayers`);

      const unsubscribe = onSnapshot(playersCollectionRef, (snapshot) => {
        const players = snapshot.docs.map(doc => doc.data());
        setUserPlayers(players);
        setLoadingPlayers(false);
      }, (error) => {
        console.error("Error fetching players from Firestore:", error);
        setPlayerError("Failed to load players.");
        setLoadingPlayers(false);
      });

      // Cleanup function for the listener
      return () => unsubscribe();
    }
  }, [db, userId, appId]);

  // Render different pages based on the current page state
  const renderPage = () => {
    if (!isAuthReady) {
      return (
        <div className="flex items-center justify-center min-h-screen text-gray-400">
            <svg className="animate-spin h-8 w-8 text-white mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Loading...
        </div>
      );
    }

    switch (currentPage) {
      case 'game':
        return <GameCanvas />;
      case 'players':
        if (loadingPlayers) {
          return (
            <div className="flex items-center justify-center min-h-screen text-gray-400">
                <svg className="animate-spin h-8 w-8 text-white mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Loading Players...
            </div>
          );
        }
        if (playerError) {
          return <div className="text-center text-red-500 mt-8">Error loading players: {playerError}</div>;
        }
        return <PlayerList players={userPlayers} />;
      case 'packs':
        return <PackOpening onOpenPack={handleOpenPack} pulledPlayer={pulledPlayer} />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center p-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">Heart Football League</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">Where football meets the future.</p>
            <div className="flex space-x-4">
              <button
                onClick={() => setCurrentPage('game')}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 shadow-lg flex items-center"
              >
                <Gamepad2 className="mr-2" /> Play Game
              </button>
              <button
                onClick={() => setCurrentPage('players')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 shadow-lg flex items-center"
              >
                <Users className="mr-2" /> View Players
              </button>
              <button
                onClick={() => setCurrentPage('packs')}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 shadow-lg flex items-center"
              >
                <Trophy className="mr-2" /> Open Packs
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden flex flex-col">
      {/* Navigation Bar */}
      <nav className="p-4 bg-gray-800 bg-opacity-50 backdrop-blur-sm shadow-xl flex justify-between items-center fixed top-0 left-0 w-full z-50">
        <h2 className="text-2xl font-bold text-white">HFL</h2>
        <div className="flex space-x-4">
          <button
            onClick={() => setCurrentPage('home')}
            className={`p-2 rounded-full transition-colors ${currentPage === 'home' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:bg-gray-700'}`}
            aria-label="Home"
          >
            <Home size={24} />
          </button>
          <button
            onClick={() => setCurrentPage('game')}
            className={`p-2 rounded-full transition-colors ${currentPage === 'game' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:bg-gray-700'}`}
            aria-label="Game"
          >
            <Gamepad2 size={24} />
          </button>
          <button
            onClick={() => setCurrentPage('players')}
            className={`p-2 rounded-full transition-colors ${currentPage === 'players' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:bg-gray-700'}`}
            aria-label="Players"
          >
            <Users size={24} />
          </button>
          <button
            onClick={() => setCurrentPage('packs')}
            className={`p-2 rounded-full transition-colors ${currentPage === 'packs' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:bg-gray-700'}`}
            aria-label="Open Packs"
          >
            <Trophy size={24} />
          </button>
          <button
            onClick={() => console.log('Settings clicked')}
            className="p-2 rounded-full text-gray-400 hover:bg-gray-700 transition-colors"
            aria-label="Settings"
          >
            <Settings size={24} />
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 pt-16">
        {renderPage()}
      </main>

      {/* The floating userId display for debugging */}
      {userId && (
        <div className="fixed bottom-4 left-4 bg-gray-800 bg-opacity-70 text-gray-300 text-xs p-2 rounded-lg shadow-lg">
          <p>User ID: {userId}</p>
          <p>App ID: {appId}</p>
          <p>Players path: artifacts/{appId}/users/{userId}/myPlayers</p>
        </div>
      )}
    </div>
  );
};

export default App;
