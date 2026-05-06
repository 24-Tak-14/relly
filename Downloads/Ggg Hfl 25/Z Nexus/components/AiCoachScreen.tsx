
import React, { useState, Suspense } from 'react';
// Fix: Added missing AnimatePresence import
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenAI } from '@google/genai';
import { SparklesIcon, RobotIcon, DatabaseIcon, ZapIcon, SpinnerIcon, StadiumIcon, ClockIcon, PaperAirplaneIcon } from '../assets/icons';
import { GameState, WeatherType, Player } from '../types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Canvas } from '@react-three/fiber';
import EulerVisualization from './EulerVisualization';

const AiCoachScreen: React.FC<{ gameState: GameState, players: Player[] }> = ({ gameState, players }) => {
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(false);
  const [customQuery, setCustomQuery] = useState('');

  const getAdvice = async (overridePrompt?: string) => {
    setLoading(true);
    setAdvice('');
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      
      const systemContext = `You are the HFL Master Coach, a digital reincarnation of Lombardi merged with Nietzschean philosophy. Analyze the current reality and provide a high-fidelity strategic manifest.
      
      **Current Field Reality:**
      - Environmental Stasis: ${gameState.weather} (Analyze friction, visibility, and ball slickness)
      - Neural Momentum: ${gameState.momentum}/100 (Is the team in a state of 'Will to Power' or 'Reactive Entropy'?)
      - Field Position: ${gameState.ballPosition}% (Proximity to the Nexus/Endzone)
      - Context: ${gameState.down} Down, ${gameState.distance} Yards to goal.
      - Possession: ${gameState.possession} Entity active.
      - Scoreline: Offense ${gameState.score.offense} | Defense ${gameState.score.defense}`;

      const prompt = overridePrompt 
        ? `${systemContext}\n\n**USER SPECIFIC QUERY:** "${overridePrompt}"\n\nProvide your tactical response based on the query, maintaining your coaching persona.`
        : `${systemContext}\n\n**Strategic Imperatives:**
          1. **Weather Analysis**: How does ${gameState.weather} dictate the risk-reward profile of Passing vs Running?
          2. **Momentum Core**: Analyze how the current ${gameState.momentum} momentum affects play variety and audible success probability.
          3. **Tactical Sequence**: Recommend a specific 3-play sequence using HFL maneuvers (Run, Pass, Blitz, Cover, Trap).
          4. **Philosophical Anchor**: Provide a technical tactical quote that bridges football strategy with the 'Will to Power'.
          
          Format in structured Markdown using authoritative, technical, and esoteric terminology.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: prompt,
        config: { thinkingConfig: { thinkingBudget: 12000 } }
      });
      setAdvice(response.text ?? '');
      if (overridePrompt) setCustomQuery('');
    } catch (e) {
      console.error(e);
      setAdvice("Strategic synthesis error. The Oracle is silent in the face of this anomaly.");
    } finally {
      setLoading(false);
    }
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customQuery.trim() && !loading) {
        getAdvice(customQuery);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in h-full">
        <div className="bg-black/60 rounded-[3rem] border border-cyan-500/20 p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden flex flex-col h-full min-h-[800px]">
            <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
                <StadiumIcon className="w-64 h-64" />
            </div>

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12 shrink-0">
                    <div className="flex items-center gap-6">
                        <div className="bg-cyan-500 p-4 rounded-3xl shadow-[0_0_25px_rgba(6,182,212,0.5)]">
                            <RobotIcon className="w-10 h-10 text-black" />
                        </div>
                        <div>
                            <h2 className="text-4xl font-orbitron font-black text-white uppercase tracking-tighter italic">Tactical_Oracle</h2>
                            <p className="text-xs font-orbitron text-cyan-400 uppercase tracking-[0.3em] font-bold mt-1">Strategic Deep-Dive Module v3.1</p>
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                        <div className="bg-black/40 px-6 py-3 rounded-2xl border border-white/5 flex items-center gap-3">
                            <ZapIcon className="w-4 h-4 text-cyan-400" />
                            <div>
                                <p className="text-[8px] font-orbitron text-gray-500 uppercase">Momentum</p>
                                <p className="text-xl font-orbitron font-bold text-white">{gameState.momentum}%</p>
                            </div>
                        </div>
                        <div className="bg-black/40 px-6 py-3 rounded-2xl border border-white/5 flex items-center gap-3">
                            <ClockIcon className="w-4 h-4 text-purple-400" />
                            <div>
                                <p className="text-[8px] font-orbitron text-gray-500 uppercase">Weather</p>
                                <p className="text-xl font-orbitron font-bold text-white uppercase">{gameState.weather}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-8 bg-black/80 rounded-[2rem] border border-white/10 shadow-inner mb-10 space-y-8 shrink-0">
                    <p className="text-gray-400 font-rajdhani text-xl leading-relaxed italic text-center max-w-4xl mx-auto">
                        "The coach is but a lens through which the player's Will-to-Power is focused. In the ${gameState.weather}, tactical clarity is a weapon forged in chaos."
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <button 
                            onClick={() => getAdvice()}
                            disabled={loading}
                            className="bg-cyan-600 hover:bg-cyan-500 text-black font-orbitron font-black py-6 rounded-2xl transition-all flex items-center justify-center gap-4 uppercase tracking-[0.2em] text-sm shadow-xl active:scale-[0.98] disabled:opacity-50"
                        >
                            {loading && !customQuery ? <SpinnerIcon className="w-6 h-6" /> : <SparklesIcon className="w-6 h-6" />}
                            {loading && !customQuery ? 'CALIBRATING SYNAPSES...' : 'SYNTHESIZE SITUATIONAL MANIFEST'}
                        </button>

                        <form onSubmit={handleCustomSubmit} className="flex flex-col gap-2">
                             <div className="flex gap-2 h-full">
                                <input 
                                    type="text"
                                    value={customQuery}
                                    onChange={(e) => setCustomQuery(e.target.value)}
                                    placeholder="Enter custom strategic dilemma..."
                                    className="flex-grow bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white font-rajdhani focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-gray-600"
                                />
                                <button 
                                    type="submit"
                                    disabled={loading || !customQuery.trim()}
                                    className="px-8 bg-purple-600 hover:bg-purple-500 text-white rounded-2xl shadow-lg active:scale-95 disabled:opacity-50 transition-all flex items-center justify-center"
                                >
                                    {loading && customQuery ? <SpinnerIcon className="w-5 h-5" /> : <PaperAirplaneIcon className="w-5 h-5" />}
                                </button>
                             </div>
                             <p className="text-[9px] font-orbitron text-gray-600 uppercase tracking-widest ml-4">Engage Master Coach with direct tactical queries</p>
                        </form>
                    </div>
                </div>

                <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 overflow-y-auto custom-scrollbar pr-4 pb-4">
                        <AnimatePresence mode="wait">
                            {advice ? (
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-10 bg-white/5 rounded-[2.5rem] border border-cyan-500/10 shadow-2xl oracle-output relative overflow-hidden"
                                >
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
                                    <div className="prose prose-invert max-w-none">
                                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                            {advice}
                                        </ReactMarkdown>
                                    </div>
                                </motion.div>
                            ) : loading ? (
                                <div className="h-full flex flex-col items-center justify-center gap-6 opacity-60">
                                    <SpinnerIcon className="w-16 h-16 text-cyan-400" />
                                    <p className="font-orbitron text-xs tracking-[0.4em] uppercase animate-pulse">Calculating Neural Vectors...</p>
                                </div>
                            ) : (
                                <div className="h-full flex flex-col items-center justify-center opacity-10 border-2 border-dashed border-white/10 rounded-[2.5rem]">
                                    <DatabaseIcon className="h-32 w-32 mb-4" />
                                    <p className="font-orbitron text-sm tracking-[0.5em] uppercase">Ready for Analysis</p>
                                </div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="lg:col-span-1 bg-black/40 border border-white/5 rounded-[2.5rem] overflow-hidden flex flex-col relative group">
                        <div className="absolute top-6 left-6 z-20">
                            <span className="text-[8px] font-orbitron text-purple-400 uppercase tracking-[0.3em] font-black bg-black/60 px-2 py-1 rounded border border-purple-500/30">Neural_Blueprint_Render</span>
                        </div>
                        
                        <div className="flex-1 bg-black relative">
                            <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle,transparent_50%,rgba(0,0,0,0.8)_100%)]"></div>
                            <Canvas camera={{ position: [0, 0, 5], fov: 30 }}>
                                <Suspense fallback={null}>
                                    {/* @ts-ignore */}
                                    <ambientLight intensity={0.5} />
                                    {/* @ts-ignore */}
                                    <pointLight position={[10, 10, 10]} />
                                    {/* @ts-ignore */}
                                    {(React as any).createElement('group', { scale: [1.8, 1.8, 1.8] }, React.createElement(EulerVisualization))}
                                </Suspense>
                            </Canvas>
                        </div>
                        
                        <div className="p-6 bg-purple-500/10 border-t border-white/5 shrink-0">
                            <p className="text-[10px] font-orbitron text-purple-300 mb-2 uppercase tracking-widest font-black">Tactical Eigenvalues</p>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="bg-black/60 p-2 rounded border border-white/5">
                                    <p className="text-[7px] text-gray-500 uppercase">Will_Factor</p>
                                    <p className="text-xs font-orbitron text-cyan-400">λ_{Math.random().toFixed(3)}</p>
                                </div>
                                <div className="bg-black/60 p-2 rounded border border-white/5">
                                    <p className="text-[7px] text-gray-500 uppercase">Entropy_Res</p>
                                    <p className="text-xs font-orbitron text-red-400">σ_{Math.random().toFixed(3)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AiCoachScreen;

