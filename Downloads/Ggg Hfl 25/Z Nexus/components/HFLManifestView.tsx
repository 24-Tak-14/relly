import React, { useState, useMemo } from 'react';
import Core3DViewport from './Core3DViewport';
import Asset3DContainer from './Asset3DContainer';
import NexusChatOverlay from './NexusChatOverlay';
import { getHFLManifest, HFLAssetMetadata } from '../utils/manifestService';
import { fastChat, getStrategicAdvice } from '../utils/gemini';
import { INITIAL_GAME_STATE } from '../types';
import { Layers, Box, Compass, Zap, Trophy, Users, Building, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const HFLManifestView: React.FC = () => {
  const manifest = useMemo(() => getHFLManifest(), []);
  const [selectedTeamId, setSelectedTeamId] = useState(manifest[0]?.id);
  const [activeAssetType, setActiveAssetType] = useState<'LOGO' | 'HELMET' | 'UNIFORM'>('LOGO');

  const selectedTeam = useMemo(() => 
    manifest.find(t => t.id === selectedTeamId) || manifest[0], 
  [selectedTeamId, manifest]);

  const handleNexusMessage = async (message: string) => {
    const contextPrompt = `
      [CONTEXT: HFL MANIFEST ANALYSIS]
      Active Team: ${selectedTeam.name}
      City: ${selectedTeam.city}
      Colors: ${selectedTeam.colors.join(', ')}
      Theme: ${selectedTeam.theme}
      Stats: ${selectedTeam.stats.megaChalices} Mega Chalices, ${selectedTeam.stats.stadiumCapacity} Stadium Capacity.
      
      User Message: ${message}
    `;
    return await fastChat(contextPrompt);
  };

  const handleGetStrategicAdvice = async () => {
    return await getStrategicAdvice(
      INITIAL_GAME_STATE,
      [], // No specific players passed for manifest view yet
      ['run', 'pass', 'blitz', 'cover'],
      `What is the ideal opening drive strategy for the ${selectedTeam.name}?`
    );
  };

  // Map CSS colors or named colors to hex for Three.js
  const primaryColor = useMemo(() => {
    const color = selectedTeam?.colors[0]?.toLowerCase() || 'cyan';
    const colorMap: Record<string, string> = {
      'black': '#111111',
      'white': '#ffffff',
      'powder purple': '#b19cd9',
      'matte orange': '#e67e22',
      'lavender': '#e6e6fa',
      'navy blue': '#000080',
      'tan': '#d2b48c',
      'fuschia': '#ff00ff',
      'dark brown': '#5d4037',
      'light blue': '#add8e6',
      'powder blue': '#b0e0e6',
      'crimson red': '#dc143c',
      'pastel pink': '#ffb6c1',
      'royal blue': '#4169e1',
      'matte purple': '#6a1b9a',
      'shiny yellow': '#ffff00',
      'mocha': '#a38068',
      'red': '#ff0000',
      'gold': '#ffd700',
      'aqua marine': '#7fffd4',
      'vantablack black': '#050505',
      'burnt orange': '#cc5500',
      'deep teal': '#008080',
      'snow white': '#fffafa',
      'blood red': '#8a0303',
      'deep ocean blue': '#000b47'
    };
    return colorMap[color] || '#06b6d4';
  }, [selectedTeam]);

  return (
    <div className="space-y-8 font-orbitron pb-20">
      <header className="border-b border-cyan-500/20 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 flex items-center gap-4 uppercase tracking-tighter">
            <Box className="w-8 h-8 text-cyan-500" /> HFL Core Manifest
          </h2>
          <p className="text-gray-400 mt-2 text-sm tracking-widest uppercase">
            Neural-Synchronized 3D Asset Management for the Heart Football League.
          </p>
        </div>
        <div className="flex gap-2">
           <div className="px-4 py-2 bg-black/40 border border-white/10 rounded-xl flex items-center gap-2">
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
                  onClick={() => setSelectedTeamId(team.id)}
                  className={`w-full px-4 py-2 rounded-xl text-left transition-all border group ${
                    selectedTeamId === team.id
                      ? 'bg-cyan-500/10 border-cyan-500/50 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)]'
                      : 'bg-transparent border-transparent text-gray-500 hover:bg-white/5 hover:text-gray-300'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold tracking-widest uppercase">{team.name}</span>
                    <span className="text-[8px] opacity-0 group-hover:opacity-100 transition-opacity text-gray-600 font-mono">
                       {team.id.split('-').pop()}
                    </span>
                  </div>
                  <div className="text-[8px] font-medium opacity-60 uppercase">{team.city}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Viewport & Detailed Info */}
        <div className="lg:col-span-9 space-y-8">
          <div className="relative group">
            <Core3DViewport>
              <Asset3DContainer 
                type={activeAssetType} 
                assetUrl={activeAssetType === 'LOGO' ? selectedTeam.logoUrl : selectedTeam.helmetUrl}
                color={primaryColor}
              />
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <Card className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                      <Shield className="text-cyan-400" size={20} />
                   </div>
                   <div>
                      <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Team_Identity</p>
                      <p className="text-xl font-black text-white uppercase tracking-tighter">{selectedTeam.name}</p>
                   </div>
                </div>
                <div className="space-y-2 border-t border-white/5 pt-4">
                   <div className="flex justify-between text-[10px] font-orbitron">
                      <span className="text-gray-500 uppercase">Mascot</span>
                      <span className="text-cyan-400 font-black">{selectedTeam.id.split('-').pop()?.toUpperCase()}</span>
                   </div>
                   <div className="flex justify-between text-[10px] font-orbitron">
                      <span className="text-gray-500 uppercase">Colors</span>
                      <div className="flex gap-1">
                         {selectedTeam.colors.slice(0, 3).map(c => (
                            <div key={c} className="w-2 h-2 rounded-full border border-white/20" style={{ backgroundColor: c.toLowerCase().replace(' ', '') }} title={c} />
                         ))}
                      </div>
                   </div>
                </div>
             </Card>

             <Card className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                      <Building className="text-purple-400" size={20} />
                   </div>
                   <div>
                      <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Home_Field</p>
                      <p className="text-xl font-black text-white uppercase tracking-tighter">SEC_LVL_01</p>
                   </div>
                </div>
                <div className="space-y-2 border-t border-white/5 pt-4">
                   <div className="flex justify-between text-[10px] font-orbitron">
                      <span className="text-gray-500 uppercase">Capacity</span>
                      <span className="text-purple-400 font-black">{selectedTeam.stats.stadiumCapacity.toLocaleString()}</span>
                   </div>
                   <div className="flex justify-between text-[10px] font-orbitron">
                      <span className="text-gray-500 uppercase">Status</span>
                      <span className="text-green-500 font-black">MANIFESTED</span>
                   </div>
                </div>
             </Card>

             <Card className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                      <Trophy className="text-amber-400" size={20} />
                   </div>
                   <div>
                      <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Legacy_Score</p>
                      <p className="text-xl font-black text-white uppercase tracking-tighter">{selectedTeam.stats.megaChalices} CHALICES</p>
                   </div>
                </div>
                <div className="space-y-2 border-t border-white/5 pt-4">
                   <div className="flex justify-between text-[10px] font-orbitron">
                      <span className="text-gray-500 uppercase">Will_To_Power</span>
                      <span className="text-amber-400 font-black">HIGH</span>
                   </div>
                   <div className="flex justify-between text-[10px] font-orbitron">
                      <span className="text-gray-500 uppercase">Sim_Efficiency</span>
                      <span className="text-cyan-400 font-black">98.4%</span>
                   </div>
                </div>
             </Card>
          </div>

          {/* Theme Description */}
          <Card className="p-8 bg-gradient-to-br from-cyan-900/10 to-transparent relative overflow-hidden group">
             <div className="absolute right-8 top-1/2 -translate-y-1/2">
                <button 
                  onClick={() => handleNexusMessage("Provide a strategic BLUF analysis for this team.")}
                  className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-black text-[10px] uppercase tracking-widest rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all hover:scale-105"
                >
                  Initiate_Nexus_Analysis
                </button>
             </div>
             <div className="flex items-center gap-4 mb-4">
                <Zap className="text-cyan-400" size={24} />
                <h3 className="text-xs font-black text-cyan-500 uppercase tracking-[0.3em]">Architectural_Doctrine</h3>
             </div>
             <p className="text-gray-300 font-rajdhani text-xl leading-relaxed italic max-w-2xl">
                "{selectedTeam.theme}"
             </p>
          </Card>
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

// Helper card for consistent styling
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
    <div className={`bg-black/40 border border-white/5 rounded-[2rem] backdrop-blur-md shadow-xl ${className}`}>
        {children}
    </div>
);

export default HFLManifestView;
