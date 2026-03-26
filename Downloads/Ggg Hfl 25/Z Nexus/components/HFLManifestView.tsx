import React, { useState, useMemo } from 'react';
import Core3DViewport from './Core3DViewport';
import Asset3DContainer from './Asset3DContainer';
import NexusChatOverlay from './NexusChatOverlay';
import FinancialHUD from './FinancialHUD';
import { getHFLManifest, HFLAssetMetadata } from '../utils/manifestService';
import { fastChat, getStrategicAdvice } from '../utils/gemini';
import { INITIAL_GAME_STATE } from '../types';
import { Layers, Box, Compass, Zap, Trophy, Users, Building, Shield, ChevronRight } from 'lucide-react';
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
                  onClick={() => setSelectedTeamId(team.id)}
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
            <Core3DViewport doctrine={selectedTeam.doctrine} color={primaryColor}>
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
