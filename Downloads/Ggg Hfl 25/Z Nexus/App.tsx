
import React, { useState, useCallback, useEffect } from 'react';
import type { ViewType } from './types';
import { DashboardView, AILevelsView, PlayerManifestView, ZoriCalendarView, PsycheQuestsView, CosmicEntitiesView, FrontOfficeView } from './components/Views';
import { GeminiLabView } from './components/GeminiLabView';
import { ArtifactGeneratorView } from './components/ArtifactGeneratorView';
import { AuditLedgerView } from './components/AuditLedgerView';
import { DeploymentRoadmapView } from './components/DeploymentRoadmapView';
import { WheelOfDebauchery } from './components/WheelOfDebauchery';
import LeagueHub from './components/LeagueHub';
import StadiumBuilder from './components/StadiumBuilder';
import AILab from './components/AILab';
import ShadowOpsView from './components/ShadowOpsView';
import { BuzzCenter } from './components/BuzzCenter';
import { FinanceCenter } from './components/FinanceCenter';
import WeaverLoom from './components/WeaverLoom';
import SpiritDoctrineView from './components/SpiritDoctrineView';
import GrottoMatchView from './components/GrottoMatchView';
import DoctrineView from './components/DoctrineView';
import AgentSwarmView from './components/AgentSwarmView';
import LoreManifestView from './components/LoreManifestView';
import FantasyVaultView from './components/FantasyVaultView';
import { NexusSystemsView } from './components/NexusSystemsView';
import EcosystemView from './components/EcosystemView';
import SimulationLabView from './components/SimulationLabView';
import RosterTerminalView from './components/RosterTerminalView';
import SpiritFoundryView from './components/SpiritFoundryView';
import IdentityCreatorView from './components/IdentityCreatorView';
import HolographicVisualizerView from './components/HolographicVisualizerView';
import HFLManifestView from './components/HFLManifestView';
import { DashboardIcon, CpuChipIcon, UserGroupIcon, CalendarDaysIcon, SparklesIcon, GlobeAltIcon, BeakerIcon, StopCircleIcon, PaperAirplaneIcon, RobotIcon, BuildingIcon, DatabaseIcon, ZapIcon, NewspaperIcon, BanknotesIcon, LayersIcon, BrainCircuitIcon, StadiumIcon, NexusIcon, StarIcon } from './assets/icons';
import { Users, Zap, Palette, Box } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NavItem: React.FC<{ icon: React.ReactNode; label: string; isActive: boolean; onClick: () => void; }> = ({ icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center w-full px-4 py-3 text-left transition-all duration-300 ease-in-out group ${
      isActive
        ? 'bg-[--radiant-gold]/10 text-[--radiant-gold] border-r-4 border-[--radiant-gold]'
        : 'text-gray-400 hover:bg-white/5 hover:text-white'
    }`}
  >
    <span className={`transition-transform duration-300 group-hover:scale-110 ${isActive ? 'text-[--radiant-gold]' : 'text-gray-500 group-hover:text-cyan-400'}`}>
      {icon}
    </span>
    <span className="ml-4 font-orbitron font-medium tracking-wider text-xs">{label}</span>
  </button>
);

const BootOverlay: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const steps = [
    "HOLOGRAPHIC MANIFEST ACTIVATING...",
    "SYNCING NEURAL NODES...",
    "LOCKING ARCHITECTURE...",
    "ZORI NEXUS ONLINE.",
    "SIMULATION INITIATED."
  ];

  useEffect(() => {
    if (step < steps.length) {
      const timer = setTimeout(() => setStep(s => s + 1), 700);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(onComplete, 1000);
      return () => clearTimeout(timer);
    }
  }, [step, onComplete, steps.length]);

  return (
    <div className="fixed inset-0 z-[2000] bg-black flex flex-col items-center justify-center p-10 font-orbitron">
      <div className="w-full max-w-md space-y-4">
        <div className="flex justify-between text-[10px] text-cyan-500 uppercase tracking-widest mb-2">
          <span>System Boot</span>
          <span>v3.1.99</span>
        </div>
        <div className="h-1 bg-white/5 w-full rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${(step / steps.length) * 100}%` }}
          >
            <div className="h-full bg-cyan-500 shadow-[0_0_10px_cyan]" />
          </motion.div>
        </div>
        <div className="min-h-[60px] pt-4">
          <AnimatePresence mode="wait">
            <motion.p 
              key={step}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="text-white text-sm tracking-[0.2em] font-bold text-center uppercase"
            >
              {steps[step] || "ACCESS GRANTED"}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const PermissionStatus: React.FC = () => {
    const [status, setStatus] = useState<'prompt' | 'granted' | 'denied'>('prompt');

    const requestAccess = async () => {
        try {
            await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
            setStatus('granted');
        } catch (err) {
            setStatus('denied');
        }
    };

    return (
        <div className="px-4 py-2 mt-auto border-t border-[--radiant-gold]/10 space-y-2">
            <div className="flex justify-between items-center">
                <span className="text-[10px] font-orbitron text-gray-500 uppercase">Nexus Sensors</span>
                <div className={`w-2 h-2 rounded-full ${status === 'granted' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' : status === 'denied' ? 'bg-red-500' : 'bg-yellow-500 animate-pulse'}`}></div>
            </div>
            {status !== 'granted' && (
                <button 
                    onClick={requestAccess}
                    className="w-full py-1.5 text-[10px] font-orbitron bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-400/20 rounded transition-all"
                >
                    {status === 'denied' ? 'Re-Authorize Sensors' : 'Authorize Sensors'}
                </button>
            )}
        </div>
    );
}

const App: React.FC = () => {
  const [view, setView] = useState<ViewType>('dashboard');
  const [isBooting, setIsBooting] = useState(true);
  const [simulationActive, setSimulationActive] = useState(false);

  const renderView = useCallback(() => {
    switch (view) {
      case 'dashboard':
        return <DashboardView />;
      case 'league_lore':
        return <LoreManifestView />;
      case 'fantasy_vault':
        return <FantasyVaultView />;
      case 'agent_swarm':
        return <AgentSwarmView />;
      case 'match_sim':
        return <GrottoMatchView />;
      case 'league_doctrine':
        return (
          <DoctrineView 
            title="THE ZORI CONSTITUTION" 
            subtitle="THE SUPREME LAW OF THE HEART FOOTBALL LEAGUE"
            doctrine="Proactively and reactively maximize productivity, effectiveness, and strategic leverage in achieving our professional goals through the self-overcoming of chaos into predictable might. The Order is the Will. Battle not with monsters, lest ye become a monster. What does not kill us makes us stronger." 
          />
        );
      case 'tactical_ai':
        return <AILab onBack={() => setView('dashboard')} />;
      case 'ai_levels':
        return <AILevelsView />;
      case 'player_manifest':
        return <PlayerManifestView />;
      case 'zori_calendar':
        return <ZoriCalendarView />;
      case 'psyche_quests':
        return <PsycheQuestsView />;
      case 'cosmic_entities':
        return <CosmicEntitiesView />;
      case 'front_office':
        return <FrontOfficeView />;
      case 'gemini_lab':
        return <GeminiLabView />;
      case 'team_forge':
        return <ArtifactGeneratorView />;
      case 'audit_ledger':
        return <AuditLedgerView />;
      case 'go_live_roadmap':
        return <DeploymentRoadmapView />;
      case 'wheel_of_debauchery':
        return <WheelOfDebauchery />;
      case 'hub':
        return <LeagueHub />;
      case 'architect':
        return <StadiumBuilder />;
      case 'ops':
        return <ShadowOpsView />;
      case 'buzz_center':
        return <BuzzCenter />;
      case 'finance_center':
        return <FinanceCenter />;
      case 'weaver_loom':
        return <WeaverLoom />;
      case 'spirit_doctrine':
        return <SpiritDoctrineView />;
      case 'nexus_systems':
        return <NexusSystemsView />;
      case 'ecosystem':
        return <EcosystemView />;
      case 'sim_lab':
        return <SimulationLabView />;
      case 'roster_terminal':
        return <RosterTerminalView />;
      case 'spirit_foundry':
        return <SpiritFoundryView />;
      case 'identity_creator':
        return <IdentityCreatorView />;
      case 'visualizer':
        return <HolographicVisualizerView />;
      case 'hfl_manifest':
        return <HFLManifestView />;
      default:
        return <DashboardView />;
    }
  }, [view]);

  return (
    <div className={`min-h-screen bg-[--matte-black] bg-hfl-grid flex text-gray-200 ${simulationActive ? 'simulation-active' : ''}`}>
      <AnimatePresence>
        {isBooting && <BootOverlay onComplete={() => setIsBooting(false)} />}
      </AnimatePresence>

      <aside className="w-64 bg-black/50 backdrop-blur-sm border-r border-[--radiant-gold]/10 flex flex-col h-screen sticky top-0 overflow-y-auto custom-scrollbar">
        <div className="h-24 flex items-center justify-center border-b border-[--radiant-gold]/10 shrink-0">
          <h1 className="text-2xl font-orbitron font-bold text-[--radiant-gold] tracking-widest text-center">
            ZORI NEXUS
          </h1>
        </div>

        <div className="p-4 border-b border-white/5">
          <button 
            onClick={() => setSimulationActive(!simulationActive)}
            className={`w-full py-3 rounded-xl font-orbitron text-[10px] font-black flex items-center justify-center gap-3 transition-all ${
              simulationActive 
              ? 'bg-red-600/20 border border-red-500 text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.3)]' 
              : 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-400'
            }`}
          >
            <ZapIcon className={`w-4 h-4 ${simulationActive ? 'animate-pulse' : ''}`} />
            {simulationActive ? 'HALT_SIMULATION' : 'INITIATE_SIMULATION'}
          </button>
        </div>

        <nav className="flex-grow py-4">
          <NavItem icon={<DashboardIcon />} label="Dashboard" isActive={view === 'dashboard'} onClick={() => setView('dashboard')} />
          <NavItem icon={<NexusIcon className="text-cyan-400" />} label="Nexus Systems" isActive={view === 'nexus_systems'} onClick={() => setView('nexus_systems')} />
          <NavItem icon={<LayersIcon className="text-blue-400" />} label="Ecosystem" isActive={view === 'ecosystem'} onClick={() => setView('ecosystem')} />
          <NavItem icon={<BeakerIcon className="text-yellow-400" />} label="Sim Lab" isActive={view === 'sim_lab'} onClick={() => setView('sim_lab')} />
          <NavItem icon={<Users className="text-cyan-400" size={18} />} label="Roster Terminal" isActive={view === 'roster_terminal'} onClick={() => setView('roster_terminal')} />
          <NavItem icon={<Zap className="text-purple-400" size={18} />} label="Spirit Foundry" isActive={view === 'spirit_foundry'} onClick={() => setView('spirit_foundry')} />
          <NavItem icon={<Palette className="text-orange-400" size={18} />} label="Identity Creator" isActive={view === 'identity_creator'} onClick={() => setView('identity_creator')} />
          <NavItem icon={<LayersIcon className="text-blue-400 w-5 h-5" />} label="Visualizer" isActive={view === 'visualizer'} onClick={() => setView('visualizer')} />
          <NavItem icon={<Box className="text-cyan-400 w-5 h-5" />} label="HFL Manifest" isActive={view === 'hfl_manifest'} onClick={() => setView('hfl_manifest')} />
          <NavItem icon={<SparklesIcon className="text-cyan-400" />} label="League Lore" isActive={view === 'league_lore'} onClick={() => setView('league_lore')} />
          <NavItem icon={<StarIcon className="text-amber-500" />} label="Fantasy Vault" isActive={view === 'fantasy_vault'} onClick={() => setView('fantasy_vault')} />
          <NavItem icon={<UserGroupIcon className="text-red-500" />} label="Agent Swarm" isActive={view === 'agent_swarm'} onClick={() => setView('agent_swarm')} />
          <NavItem icon={<NexusIcon className="w-5 h-5 text-amber-500" />} label="Zori Doctrine" isActive={view === 'league_doctrine'} onClick={() => setView('league_doctrine')} />
          <NavItem icon={<StadiumIcon className="w-5 h-5 text-red-500" />} label="Grotto Match" isActive={view === 'match_sim'} onClick={() => setView('match_sim')} />
          <NavItem icon={<LayersIcon className="w-5 h-5 text-indigo-400" />} label="Weaver's Loom" isActive={view === 'weaver_loom'} onClick={() => setView('weaver_loom')} />
          <NavItem icon={<BrainCircuitIcon className="w-5 h-5 text-amber-400" />} label="Spirit Doctrine" isActive={view === 'spirit_doctrine'} onClick={() => setView('spirit_doctrine')} />
          <NavItem icon={<NewspaperIcon className="w-5 h-5 text-purple-400" />} label="Buzz Center" isActive={view === 'buzz_center'} onClick={() => setView('buzz_center')} />
          <NavItem icon={<BanknotesIcon className="w-5 h-5 text-green-400" />} label="Finance Hub" isActive={view === 'finance_center'} onClick={() => setView('finance_center')} />
          <NavItem icon={<DatabaseIcon className="w-5 h-5 text-red-400" />} label="Shadow Ops" isActive={view === 'ops'} onClick={() => setView('ops')} />
          <NavItem icon={<RobotIcon className="w-5 h-5 text-cyan-400" />} label="Tactical AI" isActive={view === 'tactical_ai'} onClick={() => setView('tactical_ai')} />
          <NavItem icon={<GlobeAltIcon className="w-5 h-5" />} label="Search Hub" isActive={view === 'hub'} onClick={() => setView('hub')} />
          <NavItem icon={<BuildingIcon className="w-5 h-5" />} label="Architect" isActive={view === 'architect'} onClick={() => setView('architect')} />
          <NavItem icon={<StopCircleIcon className="text-red-500" />} label="The Wheel" isActive={view === 'wheel_of_debauchery'} onClick={() => setView('wheel_of_debauchery')} />
          <NavItem icon={<GlobeAltIcon className="text-purple-500"/>} label="Audit Ledger" isActive={view === 'audit_ledger'} onClick={() => setView('audit_ledger')} />
          <NavItem icon={<SparklesIcon />} label="Team Forge" isActive={view === 'team_forge'} onClick={() => setView('team_forge')} />
          <NavItem icon={<GlobeAltIcon />} label="Deployment Guide" isActive={view === 'go_live_roadmap'} onClick={() => setView('go_live_roadmap')} />
          <NavItem icon={<CpuChipIcon />} label="AI Levels" isActive={view === 'ai_levels'} onClick={() => setView('ai_levels')} />
          <NavItem icon={<UserGroupIcon />} label="Front Office" isActive={view === 'front_office'} onClick={() => setView('front_office')} />
          <NavItem icon={<UserGroupIcon />} label="Players" isActive={view === 'player_manifest'} onClick={() => setView('player_manifest')} />
          <NavItem icon={<CalendarDaysIcon />} label="Zori Calendar" isActive={view === 'zori_calendar'} onClick={() => setView('zori_calendar')} />
          <NavItem icon={<SparklesIcon />} label="Psyche Quests" isActive={view === 'psyche_quests'} onClick={() => setView('psyche_quests')} />
          <NavItem icon={<GlobeAltIcon />} label="Cosmic Entities" isActive={view === 'cosmic_entities'} onClick={() => setView('cosmic_entities')} />
          <NavItem icon={<BeakerIcon />} label="Gemini Lab" isActive={view === 'gemini_lab'} onClick={() => setView('gemini_lab')} />
        </nav>
        
        <PermissionStatus />

        <div className="p-4 border-t border-[--radiant-gold]/10 text-center text-gray-500">
          <p className="font-orbitron text-xs">HFL ARCHITECTURE v3.1</p>
          <p className="text-xs uppercase tracking-tighter">Manifest Activated.</p>
        </div>
      </aside>

      <main className="flex-1 p-8 h-screen overflow-y-auto custom-scrollbar">
        <div className="min-h-full w-full bg-black/10 backdrop-blur-sm rounded-[2rem] border border-cyan-500/10 p-8 shadow-inner">
          {renderView()}
        </div>
      </main>
    </div>
  );
};

export default App;
