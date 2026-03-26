import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, SortAscending, SortDescending, User, ChevronUp, ChevronDown, Users, Grid, PlayCircle } from 'lucide-react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows, Float, Text, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

import Core3DViewport from './Core3DViewport'; // Assuming Core3DViewport is a sibling or parent component
import Asset3DContainer from './Asset3DContainer';
import NexusChatOverlay from './NexusChatOverlay';
import FinancialHUD from './FinancialHUD';
import { getHFLManifest, HFLAssetMetadata, getTeamById } from '../utils/manifestService';
import { fastChat, getStrategicAdvice } from '../utils/gemini';
import { INITIAL_GAME_STATE } from '../types';
import { Player3DModel } from './Player3DModel'; // Assuming Player3DModel component is created

// --- Sample Data (replace with actual data fetching later) ---
const SAMPLE_PLAYER_DATA = {
    id: 'player1',
    name: 'Ace Ventura',
    position: 'WR',
    speed: 99,
    strength: 80,
    holo_rarity: 'ZORI',
    team: 'Kaitlynnville Eclipse',
    // Add more stats as needed
    stats: {
        passing_accuracy: 85,
        catching: 98,
        route_running: 95,
        juke_move: 99,
        throwing_power: 70, // Example attribute for QB
        tackling: 60,       // Example attribute for Defensive
    },
    doctrine: 'Celestial Grid',
    identity: { offense: 'Air Raid', defense: 'Blitz Heavy', chalices: 0 },
    team_colors: ['Black', 'Powder Purple', 'Off White'],
    theme: 'Celestial, Shadow, and Cosmic Power',
    stats: {
        megaChalices: 0,
        stadiumCapacity: 64397,
        valuation: 1.2e9, // $1.2 Billion
        market: 'Major Metro'
    }
};

// --- Component for Player Showcase ---
const PlayerShowcase: React.FC<{ player: any; onClose: () => void }> = ({ player, onClose }) => {
    if (!player) return null;

    const primaryColor = player.colors?.[0]?.toLowerCase() || '#06b6d4'; // Default to cyan if no color

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-8 bg-black/80 backdrop-blur-lg"
        >
            <div className="bg-black/50 border border-cyan-500/30 p-8 rounded-[2rem] shadow-2xl w-full max-w-4xl h-[80vh] overflow-hidden flex flex-col">
                <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                            <User size={24} className="text-cyan-400" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-black text-white uppercase tracking-tight">{player.name}</h3>
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{player.position} | {player.team}</p>
                        </div>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-lg text-gray-500 hover:text-red-400 transition-colors">
                        <X size={20} />
                    </button>
                </div>

                <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Player 3D Model Area */}
                    <div className="lg:col-span-2 relative">
                        <Core3DViewport 
                            doctrine={player.doctrine || "Default Doctrine"} 
                            color={primaryColor} 
                            playerModelUrl={player.modelUrl || "/placeholder_player_model.glb"} // Use player's model URL
                        />
                        {/* Placeholder for Player Stats overlay or similar */}
                    </div>

                    {/* Player Stats Panel */}
                    <div className="lg:col-span-1 space-y-4">
                        <Card className="p-6">
                            <h4 className="text-xs font-black text-cyan-500 uppercase tracking-widest mb-3">Core_Attributes</h4>
                            <div className="grid grid-cols-2 gap-3 text-sm">
                                <div><span className="font-bold text-gray-400">Speed:</span> <span className="text-cyan-400 font-bold">{player.speed}</span></div>
                                <div><span className="font-bold text-gray-400">Strength:</span> <span className="text-blue-400 font-bold">{player.strength}</span></div>
                                {player.passing_accuracy && <div><span className="font-bold text-gray-400">Pass Acc:</span> <span className="text-yellow-400 font-bold">{player.passing_accuracy}</span></div>}
                                {player.catching && <div><span className="font-bold text-gray-400">Catching:</span> <span className="text-orange-400 font-bold">{player.catching}</span></div>}
                                {player.tackling && <div><span className="font-bold text-gray-400">Tackling:</span> <span className="text-red-400 font-bold">{player.tackling}</span></div>}
                                {/* Add more stats dynamically */}
                            </div>
                        </Card>
                        <Card className="p-6">
                             <h4 className="text-xs font-black text-cyan-500 uppercase tracking-widest mb-3">Meta_Attributes</h4>
                             <div className="text-[10px] font-bold text-gray-400 flex flex-col gap-2">
                                <div>Rarity: <span className={`px-2 py-1 rounded-full border ${getRarityClass(player.holo_rarity)}`}>{player.holo_rarity}</span></div>
                                <div>Age: {player.age || 'N/A'}</div> {/* Assuming age might be added later */}
                             </div>
                        </Card>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// --- HFLManifestView Component (Updated) ---
const HFLManifestView: React.FC = () => {
  const manifest = useMemo(() => getHFLManifest(), []);
  const [selectedTeamId, setSelectedTeamId] = useState(manifest[0]?.id);
  const [activeAssetType, setActiveAssetType] = useState<'LOGO' | 'HELMET' | 'UNIFORM'>('LOGO');
  const [selectedPlayerId, setSelectedPlayerId] = useState<string | null>(null); // State to track selected player for showcase

  const selectedTeam = useMemo(() => 
    manifest.find(t => t.id === selectedTeamId) || manifest[0], 
  [selectedTeamId, manifest]);

  // Function to get mock player data for showcase - REPLACE with actual data fetching
  const playerToShowcase = useMemo(() => {
    if (!selectedPlayerId) return null;
    // Placeholder: In a real scenario, this would fetch player data based on ID
    // For now, we'll return a dummy player or null if not found
    // Example: const player = getPlayerById(selectedPlayerId); return player;
    if (selectedPlayerId === 'player1') { // Example mock player
        return {
            id: 'player1', name: 'Ace Ventura', position: 'WR', speed: 99, strength: 80, holo_rarity: 'ZORI',
            team: selectedTeam.name, colors: selectedTeam.colors, theme: selectedTeam.theme,
            stats: { megaChalices: 5, stadiumCapacity: 75000, valuation: 1.5e9, market: 'Major Metro' },
            doctrine: 'Speed Demon Doctrine', // Example doctrine
            modelUrl: '/models/ace_ventura_player.glb', // Placeholder URL for player model
            age: 25,
            passing_accuracy: 0, catching: 98, route_running: 99, juke_move: 99,
            // Add other stats if available, or default to 0/N/A
        };
    }
    return null;
  }, [selectedPlayerId, selectedTeam]);


  const handleNexusMessage = async (message: string) => {
    const contextPrompt = `
      [CONTEXT: HFL MANIFEST ANALYSIS]
      Active Team: ${selectedTeam.name}
      City: ${selectedTeam.city}
      Colors: ${selectedTeam.colors.join(', ')}
      Theme: ${selectedTeam.theme}
      Doctrine: ${selectedTeam.doctrine}
      Stats: ${selectedTeam.stats.megaChalices} Mega Chalices, ${selectedTeam.stats.stadiumCapacity} Stadium Capacity, $${(selectedTeam.stats.valuation / 1000000000).toFixed(1)}B Valuation.
      
      User Message: ${message}
    `;
    return await fastChat(contextPrompt);
  };

  const handleGetStrategicAdvice = async () => {
    return await getStrategicAdvice(
      INITIAL_GAME_STATE,
      [], 
      ['run', 'pass', 'blitz', 'cover'],
      `Based on the ${selectedTeam.name} doctrine: "${selectedTeam.doctrine}", provide a tactical recommendation.`
    );
  };

  const primaryColor = useMemo(() => {
    const color = selectedTeam?.colors[0]?.toLowerCase() || 'cyan';
    const colorMap: Record<string, string> = {
      'black': '#111111', 'white': '#ffffff', 'powder purple': '#b19cd9', 'matte orange': '#e67e22',
      'lavender': '#e6e6fa', 'navy blue': '#000080', 'tan': '#d2b48c', 'fuschia': '#ff00ff',
      'dark brown': '#5d4037', 'light blue': '#add8e6', 'powder blue': '#b0e0e6', 'crimson red': '#dc143c',
      'pastel pink': '#ffb6c1', 'royal blue': '#4169e1', 'matte purple': '#6a1b9a', 'shiny yellow': '#ffff00',
      'mocha': '#a38068', 'red': '#ff0000', 'gold': '#ffd700', 'aqua marine': '#7fffd4',
      'vantablack black': '#050505', 'burnt orange': '#cc5500', 'deep teal': '#008080', 'snow white': '#fffafa',
      'blood red': '#8a0303', 'deep ocean blue': '#000b47'
    };
    return colorMap[color] || '#06b6d4';
  }, [selectedTeam]);

  const availablePlays = useMemo(() => [...SAMPLE_OFFENSIVE_PLAYS, ...SAMPLE_DEFENSIVE_PLAYS], []);

  return (
    <div className="space-y-8 font-orbitron pb-20">
      <header className="border-b border-cyan-500/20 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 flex items-center gap-4 uppercase tracking-tighter">
            <Box className="w-8 h-8 text-cyan-500" /> HFL Core Manifest
          </h2>
          <p className="text-gray-400 mt-2 text-sm tracking-widest uppercase">
            Neural-Synchronized 3D Asset Management & Strategic Visualization.
          </p>
        </div>
        <div className="flex gap-2">
           <div className="px-4 py-2 bg-black/40 border border-white/10 rounded-xl flex items-center gap-2 shadow-lg">
              <Trophy size={14} className="text-amber-500" />
              <span className="text-[10px] font-black text-white">{manifest.length} TEAMS_INDEXED</span>
           </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Team Selector Sidebar */}
        <div className="lg:col-span-3 space-y-6 max-h-[800px] overflow-y-auto custom-scrollbar pr-2">
          <div className="bg-black/40 border border-white/5 p-4 rounded-[2rem] space-y-4 shadow-xl">
            <h3 className="text-[10px] font-black text-cyan-500 uppercase tracking-widest flex items-center gap-2 px-2">
              <Compass size={14} /> Team_Registry
            </h3>
            
            <div className="space-y-1">
              {manifest.map((team) => (
                <button
                  key={team.id}
                  onClick={() => {
                    setSelectedTeamId(team.id);
                    setSelectedPlayerId(null); // Reset player selection when team changes
                  }}
                  className={`w-full px-4 py-3 rounded-xl text-left transition-all border group ${
                    selectedTeamId === team.id
                      ? 'bg-cyan-500/10 border-cyan-500/50 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)]'
                      : 'bg-transparent border-transparent text-gray-500 hover:bg-white/5 hover:text-gray-300'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black tracking-widest uppercase">{team.name}</span>
                    <ChevronRight size={12} className={`transition-transform ${selectedTeamId === team.id ? 'translate-x-0' : '-translate-x-2 opacity-0 group-hover:opacity-100'}`} />
                  </div>
                  <div className="text-[8px] font-medium opacity-60 uppercase mt-0.5">{team.city}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Viewport & Detailed Info */}
        <div className="lg:col-span-9 space-y-8">
          <div className="relative group">
            <Core3DViewport 
              doctrine={selectedTeam.doctrine} 
              color={primaryColor} 
              playerModelUrl={selectedPlayer ? '/models/placeholder_player_model.glb' : undefined} // Use placeholder URL for player model
            >
              {/* Conditionally render Asset3DContainer or Player3DModel */}
              {selectedPlayer ? (
                <Player3DModel 
                  modelUrl={selectedPlayer.modelUrl || '/models/placeholder_player_model.glb'} 
                  scale={1.5} 
                  position={[0, 1.5, 0]} 
                  colors={[primaryColor]} 
                />
              ) : (
                <Asset3DContainer 
                  type={activeAssetType} 
                  assetUrl={activeAssetType === 'LOGO' ? selectedTeam.logoUrl : selectedTeam.helmetUrl}
                  color={primaryColor}
                />
              )}
            </Core3DViewport>
            
            {/* Asset Type Switcher Overlay */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 bg-black/60 backdrop-blur-md p-2 rounded-2xl border border-white/10 shadow-2xl">
              {(['LOGO', 'HELMET', 'UNIFORM'] as const).map(type => (
                <button
                  key={type}
                  onClick={() => setActiveAssetType(type)}
                  className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                    activeAssetType === type
                      ? 'bg-cyan-500 text-black shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTeam.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <FinancialHUD stats={selectedTeam.stats} color={primaryColor} />

              {/* Doctrine Description */}
              <Card className="p-8 bg-gradient-to-br from-cyan-900/10 to-transparent relative overflow-hidden group border border-cyan-500/20">
                 <div className="absolute right-8 top-1/2 -translate-y-1/2">
                    <button 
                      onClick={() => handleNexusMessage(`Explain the strategic significance of the ${selectedTeam.name} doctrine: "${selectedTeam.doctrine}"`)}
                      className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-black text-[10px] uppercase tracking-widest rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all hover:scale-105"
                    >
                      Analyze_Doctrine
                    </button>
                 </div>
                 <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                       <Zap className="text-black" size={20} />
                    </div>
                    <h3 className="text-xs font-black text-cyan-500 uppercase tracking-[0.3em]">Architectural_Doctrine</h3>
                 </div>
                 <p className="text-gray-300 font-rajdhani text-2xl leading-relaxed italic max-w-2xl drop-shadow-sm">
                    "{selectedTeam.doctrine}"
                 </p>
                 <div className="mt-6 flex gap-4">
                    <div className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-[8px] font-bold text-gray-500 uppercase">OFF: {selectedTeam.identity.offense}</div>
                    <div className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-[8px] font-bold text-gray-500 uppercase">DEF: {selectedTeam.identity.defense}</div>
                    <div className="px-3 py-1 bg-amber-500/10 rounded-full border border-amber-500/20 text-[8px] font-bold text-amber-500 uppercase">{selectedTeam.identity.chalices} MEGA CHALICES</div>
                 </div>
              </Card>

              {/* Play Visualization Section */}
              <div className="p-6 bg-black/40 border border-white/5 rounded-[2rem] space-y-4 shadow-xl">
                 <h3 className="text-[12px] font-black text-cyan-500 uppercase tracking-[0.3em] flex items-center gap-2 px-2">
                    <PlayCircle size={16} className="text-cyan-400" /> Tactical_Playbook
                 </h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {availablePlays.slice(0, 4).map(play => ( // Displaying first 4 plays for simplicity
                      <button
                        key={play.id}
                        onClick={() => setSelectedPlayId(play.id)}
                        className={`px-4 py-3 rounded-xl text-left transition-all border group ${
                          selectedPlayId === play.id
                            ? 'bg-cyan-500/10 border-cyan-500/50 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)]'
                            : 'bg-transparent border-transparent text-gray-500 hover:bg-white/5 hover:text-gray-300'
                        }`}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-[10px] font-black tracking-widest uppercase">{play.name}</span>
                          <span className={`text-[8px] font-medium uppercase ${selectedPlayId === play.id ? 'opacity-100' : 'opacity-60'} transition-opacity`}>
                            {play.formation}
                          </span>
                        </div>
                        <div className="text-[8px] font-medium text-gray-600">Play Type: {play.type}</div>
                      </button>
                    ))}
                 </div>
                 {selectedPlayId && (
                   <div className="mt-4 pt-4 border-t border-white/5">
                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Selected Play: {availablePlays.find(p => p.id === selectedPlayId)?.name}</p>
                      {/* Placeholder for actual 3D play visualization */}
                      <div className="w-full h-32 bg-black/50 rounded-2xl border border-white/10 flex items-center justify-center text-gray-600 italic text-sm">
                         3D Play Visualization Placeholder (Implement later)
                      </div>
                   </div>
                 )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <NexusChatOverlay 
        onSendMessage={handleNexusMessage} 
        onGetStrategicAdvice={handleGetStrategicAdvice}
        teamContext={selectedTeam.name} 
      />
    </div>
  );
};

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
    <div className={`bg-black/40 border border-white/5 rounded-[2rem] backdrop-blur-md shadow-xl ${className}`}>
        {children}
    </div>
);

export default HFLManifestView;
