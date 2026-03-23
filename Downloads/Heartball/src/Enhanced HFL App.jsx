import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { getAuth, signInWithCustomToken, signInAnonymously } from 'firebase/auth';
import { getFirestore, onSnapshot, collection, doc, setDoc, query, where } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { UploadCloud, FileText, Download, XCircle } from 'lucide-react';
import { createRoot } from 'react-dom/client';

// IMPORTANT: Global variables provided by the Canvas environment
// These are required for proper Firebase initialization and security
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {};
const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

// Ensure this component is exported as the default
export default function App() {
  const [db, setDb] = useState(null);
  const [auth, setAuth] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [loading, setLoading] = useState(true);
  const [isSimulationRunning, setIsSimulationRunning] = useState(false);
  const [fantasyGames, setFantasyGames] = useState([]);
  const [currentView, setCurrentView] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', body: '' });
  const [activeGameId, setActiveGameId] = useState(null);

  const containerRef = useRef();
  const sceneRef = useRef();
  const cameraRef = useRef();
  const rendererRef = useRef();
  const fieldRef = useRef();
  const ballRef = useRef();
  const qbRef = useRef();
  const receiverRef = useRef();
  const animationFrameId = useRef();

  // Initialize Firebase and set up auth listener
  useEffect(() => {
    const initFirebase = async () => {
      try {
        const app = initializeApp(firebaseConfig);
        const firestore = getFirestore(app);
        const authInstance = getAuth(app);
        setDb(firestore);
        setAuth(authInstance);

        // Listen for authentication state changes and set user ID
        onAuthStateChanged(authInstance, async (user) => {
          if (user) {
            setUserId(user.uid);
          } else if (initialAuthToken) {
            // Sign in with the provided custom token
            try {
              await signInWithCustomToken(authInstance, initialAuthToken);
            } catch (e) {
              console.error("Custom token sign-in failed:", e);
              await signInAnonymously(authInstance);
            }
          } else {
            // Sign in anonymously if no token is available
            await signInAnonymously(authInstance);
          }
          setIsAuthReady(true);
          setLoading(false);
        });

      } catch (e) {
        console.error("Firebase initialization failed:", e);
        setMessage({ text: "Failed to initialize app.", type: "error" });
        setLoading(false);
      }
    };

    initFirebase();

    // Cleanup on unmount
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      setMessage({ text: '', type: '' });
    };

  }, []);

  // Set up 3D simulation
  useEffect(() => {
    if (!isSimulationRunning || !containerRef.current) return;

    // SCENE
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87ceeb);
    sceneRef.current = scene;

    // CAMERA
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 10, 20);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // RENDERER
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth * 0.95, window.innerHeight * 0.95);
    renderer.setPixelRatio(window.devicePixelRatio);
    rendererRef.current = renderer;
    containerRef.current.appendChild(renderer.domElement);

    // LIGHTS
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 20, 10);
    scene.add(directionalLight);

    // OBJECTS
    // Football Field
    const fieldGeometry = new THREE.PlaneGeometry(50, 100);
    const fieldMaterial = new THREE.MeshLambertMaterial({ color: 0x228b22 });
    const field = new THREE.Mesh(fieldGeometry, fieldMaterial);
    field.rotation.x = -Math.PI / 2;
    scene.add(field);
    fieldRef.current = field;

    // Ball
    const ballGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const ballMaterial = new THREE.MeshLambertMaterial({ color: 0x8b4513 });
    const ball = new THREE.Mesh(ballGeometry, ballMaterial);
    ball.position.set(0, 1, 0);
    scene.add(ball);
    ballRef.current = ball;

    // QB and Receiver
    const playerGeometry = new THREE.BoxGeometry(1, 2, 1);
    const qbMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 });
    const receiverMaterial = new THREE.MeshLambertMaterial({ color: 0x0000ff });

    const qb = new THREE.Mesh(playerGeometry, qbMaterial);
    qb.position.set(-10, 1, 5);
    scene.add(qb);
    qbRef.current = qb;

    const receiver = new THREE.Mesh(playerGeometry, receiverMaterial);
    receiver.position.set(10, 1, -20);
    scene.add(receiver);
    receiverRef.current = receiver;
    
    // Animation loop
    const animate = () => {
      animationFrameId.current = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();
    
    const handleResize = () => {
      const width = window.innerWidth * 0.95;
      const height = window.innerHeight * 0.95;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      window.removeEventListener('resize', handleResize);
    };

  }, [isSimulationRunning]);

  // Fetch fantasy games from Firestore
  useEffect(() => {
    if (!db || !isAuthReady) return;

    const q = query(collection(db, "artifacts", appId, "public/data", "fantasyGames"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const games = [];
      snapshot.forEach(doc => {
        games.push({ id: doc.id, ...doc.data() });
      });
      setFantasyGames(games);
    }, (error) => {
      console.error("Error fetching fantasy games:", error);
      setMessage({ text: "Failed to load fantasy games.", type: "error" });
    });

    return () => unsubscribe();
  }, [db, isAuthReady]);

  // Add sample fantasy games to Firestore if they don't exist
  useEffect(() => {
    if (!db || !isAuthReady || fantasyGames.length > 0) return;

    const sampleGames = [
      {
        name: "High-Stakes QB Duel",
        objective: "Focuses on quarterbacks' performance.",
        entryFee: 5,
        prizePool: 1000,
        scoring: "Passing yards, touchdowns, and bonuses for long completions.",
        active: true
      },
      {
        name: "Running Back Rush",
        objective: "Emphasizes running backs' ground game.",
        entryFee: 2,
        prizePool: 500,
        scoring: "Rushing yards, touchdowns, and receiving yards.",
        active: true
      },
      {
        name: "No-Fly Zone Defenders",
        objective: "Focuses on defensive backs and linebackers.",
        entryFee: 5,
        prizePool: 1600,
        scoring: "Pass deflections, interceptions, fewest targets allowed."
      }
    ];

    sampleGames.forEach(async (game) => {
      try {
        const gameRef = doc(db, "artifacts", appId, "public/data", "fantasyGames", game.name.replace(/\s+/g, '-').toLowerCase());
        await setDoc(gameRef, game);
      } catch (e) {
        console.error("Error adding sample game:", e);
      }
    });

  }, [db, isAuthReady, fantasyGames]);

  // Handle click on a fantasy game card
  const handleGameSelect = (gameId) => {
    setActiveGameId(gameId);
    setModalContent({
      title: 'Simulation Ready!',
      body: 'Ready to run the football simulation? Select "Play" to begin.'
    });
    setIsModalOpen(true);
  };

  // Run the simulation
  const runSimulation = () => {
    if (!activeGameId) {
      setMessage({ text: "Please select a game to play.", type: "error" });
      return;
    }
    setMessage({ text: `Starting simulation for ${activeGameId}...`, type: "info" });
    setIsModalOpen(false);
    setIsSimulationRunning(true);
  };
  
  // Custom message/modal box
  const showMessage = (title, body) => {
    setModalContent({ title, body });
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent({ title: '', body: '' });
  };
  

  const renderContent = () => {
    switch(currentView) {
      case 'home':
        return (
          <>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Choose Your Fantasy Game</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fantasyGames.map(game => (
                <div
                  key={game.id}
                  onClick={() => handleGameSelect(game.id)}
                  className="bg-white rounded-xl shadow-lg p-6 cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <h3 className="text-xl font-semibold text-indigo-600 mb-2">{game.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{game.objective}</p>
                  <div className="flex justify-between items-center text-gray-700 font-medium">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      Fee: ${game.entryFee}
                    </span>
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      Prize: ${game.prizePool}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        );
      case 'simulation':
        return (
          <div ref={containerRef} className="w-full h-full rounded-xl overflow-hidden bg-gray-200 shadow-xl">
            {!isSimulationRunning && (
              <div className="flex flex-col items-center justify-center h-full text-gray-500">
                 <div className="flex justify-center items-center w-20 h-20 border-4 border-indigo-500 border-dashed rounded-full animate-spin"></div>
                <p className="mt-4 text-lg">Simulation is ready to go...</p>
                <button
                  onClick={runSimulation}
                  className="mt-6 px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-700 transition"
                >
                  Play Simulation
                </button>
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900 font-sans p-4">
      <div className="fixed top-4 right-4 z-50">
        {message.text && (
          <div
            className={`p-4 rounded-lg shadow-lg flex items-center transition-opacity duration-300 ${message.type === 'error' ? 'bg-red-500' : 'bg-green-500'} text-white`}
          >
            {message.text}
            <button onClick={() => setMessage({ text: '', type: '' })} className="ml-4">
              <XCircle size={18} />
            </button>
          </div>
        )}
      </div>
      
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full text-center">
            <h3 className="text-2xl font-bold mb-4">{modalContent.title}</h3>
            <p className="text-gray-700 mb-6">{modalContent.body}</p>
            {activeGameId && (
              <button
                onClick={runSimulation}
                className="w-full py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-700 transition"
              >
                Play
              </button>
            )}
            <button
              onClick={closeModal}
              className="w-full mt-2 py-3 bg-gray-300 text-gray-800 font-bold rounded-lg shadow-md hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <header className="flex flex-col md:flex-row justify-between items-center bg-white rounded-xl shadow-lg p-6 mb-6">
        <div className="flex items-center space-x-4">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
            HFL Fantasy
          </h1>
          <span className="text-sm text-gray-500 hidden md:block">
            UserId: {userId}
          </span>
        </div>
        <nav className="mt-4 md:mt-0 flex space-x-4">
          <button
            onClick={() => setCurrentView('home')}
            className={`px-4 py-2 rounded-lg font-bold transition ${currentView === 'home' ? 'bg-indigo-500 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentView('simulation')}
            className={`px-4 py-2 rounded-lg font-bold transition ${currentView === 'simulation' ? 'bg-indigo-500 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            Play Sim
          </button>
        </nav>
      </header>
      
      <main className="flex-grow bg-white rounded-xl shadow-lg p-8">
        {loading ? (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="flex justify-center items-center w-20 h-20 border-4 border-indigo-500 border-dashed rounded-full animate-spin"></div>
            <p className="mt-4 text-lg text-gray-600">Authenticating with Firebase...</p>
          </div>
        ) : (
          renderContent()
        )}
      </main>

      <footer className="mt-6 text-center text-gray-500 text-sm">
        <p>Powered by PrisonBreak Gaming, & Ta_Kit, the HFL Development Team</p>
      </footer>
    </div>
  );
}
