
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from './Views';
import { RobotIcon, SparklesIcon, ZapIcon, NewspaperIcon, DatabaseIcon, CpuChipIcon, UserGroupIcon, SpinnerIcon, SpeakIcon, StopIcon } from '../assets/icons';
import type { SwarmAgent } from '../types';
import { GoogleGenAI } from '@google/genai';

const INITIAL_AGENTS: SwarmAgent[] = [
    { id: 'cuzzn_j', name: 'Cuzzn_J', role: 'Kink Content Alchemist', status: 'SCORCHING', color: 'text-red-500', lastAction: 'Generating UCC Cumtract v3.0' },
    { id: 'rellbot', name: 'RellBoT', role: 'Reddit Chaos Engine', status: 'ACTIVE', color: 'text-purple-400', lastAction: 'Infiltrating r/kink_legal' },
    { id: 'fvo_codee', name: 'FvO_CoDee', role: 'Compliance Guardian', status: 'AUDITING', color: 'text-green-400', lastAction: 'Verifying Article 9 UCC alignment' },
    { id: 'tak_zu', name: 'Tak_Zu.0', role: '3D Vision & UX', status: 'DEPLOYING', color: 'text-cyan-400', lastAction: 'Rendering stadium shadow-mesh' },
    { id: 'j72codai', name: 'J72CODAI', role: 'Full-Stack Architect', status: 'ONLINE', color: 'text-blue-500', lastAction: 'Optimizing ReAct loop latency' },
    { id: 'nexus', name: 'Nexus', role: 'Chief of Staff', status: 'ONLINE', color: 'text-[--radiant-gold]', lastAction: 'Nexus Matrix Synchronized' },
];

const AgentCard: React.FC<{ agent: SwarmAgent }> = ({ agent }) => (
    <Card className={`relative overflow-hidden group border-2 ${agent.color.replace('text', 'border')}/30 bg-black/60 hover:bg-black/80 transition-all`}>
        <div className={`absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity`}>
            <RobotIcon className="w-16 h-16" />
        </div>
        <div className="relative z-10 space-y-4">
            <div className="flex justify-between items-start">
                <div>
                    <h4 className={`text-xl font-orbitron font-black uppercase tracking-tighter ${agent.color}`}>{agent.name}</h4>
                    <p className="text-[10px] font-orbitron text-gray-500 uppercase font-black">{agent.role}</p>
                </div>
                <div className={`px-2 py-0.5 rounded text-[8px] font-orbitron font-black uppercase ${agent.status === 'SCORCHING' ? 'bg-red-600 text-white animate-pulse' : 'bg-white/10 text-gray-400'}`}>
                    {agent.status}
                </div>
            </div>
            <div className="pt-4 border-t border-white/5">
                <span className="text-[8px] font-orbitron text-gray-600 uppercase tracking-widest">Last_Manifest</span>
                <p className="text-xs text-gray-400 font-rajdhani mt-1 italic">"{agent.lastAction}"</p>
            </div>
            <div className="flex gap-2 pt-2">
                <div className={`w-1.5 h-1.5 rounded-full ${agent.status === 'IDLE' ? 'bg-gray-600' : 'bg-green-500 animate-pulse'}`} />
                <span className="text-[8px] font-mono text-gray-700">NODE_ID_{agent.id.toUpperCase()}</span>
            </div>
        </div>
    </Card>
);

const AgentSwarmView: React.FC = () => {
    const [agents, setAgents] = useState(INITIAL_AGENTS);
    const [isGenerating, setIsGenerating] = useState(false);
    const [output, setOutput] = useState<string | null>(null);

    const triggerAction = async (type: string) => {
        setIsGenerating(true);
        setOutput(null);
        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            const prompt = type === 'filth' 
                ? "Generate an ultra-explicit, Nietzschean UCC-themed kink post for Fansly. Use price hooks and legal terminology like 'secured party' and 'perfected interest'."
                : "Generate a strategic Reddit post for r/tech_philosophy discussing the autonomous agent swarm architecture for digital empires.";

            const response = await ai.models.generateContent({
                model: 'gemini-3-flash-preview',
                contents: prompt,
            });
            setOutput(response.text ?? null);
            setAgents(prev => prev.map(a => a.id === 'cuzzn_j' ? { ...a, status: 'SCORCHING', lastAction: 'New content vector deployed.' } : a));
        } catch (e) {
            console.error(e);
            setOutput("Synthesis failure. Swarm node timeout.");
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="animate-fade-in space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-red-500/20 pb-6 gap-6">
                <div>
                    <h2 className="text-5xl font-orbitron font-bold text-red-500 uppercase italic flex items-center gap-4">
                        <UserGroupIcon className="w-12 h-12 animate-pulse text-red-500" />
                        FVC_AGENT_SWARM_v3.0
                    </h2>
                    <p className="text-gray-500 mt-1 uppercase tracking-[0.3em] text-[10px] font-bold">FETISH_VULTURE_CAPITAL // AUTONOMOUS_EMPIRE_CORE</p>
                </div>
                
                <div className="flex gap-4">
                    <button 
                        onClick={() => triggerAction('filth')}
                        disabled={isGenerating}
                        className="bg-red-600 hover:bg-red-500 text-white font-orbitron font-black px-6 py-3 rounded-xl transition-all shadow-lg shadow-red-900/40 flex items-center gap-3 uppercase tracking-widest text-[10px] disabled:opacity-50"
                    >
                        {isGenerating ? <SpinnerIcon className="w-4 h-4" /> : <ZapIcon className="w-4 h-4" />}
                        GENERATE_FILTH
                    </button>
                    <button 
                        onClick={() => triggerAction('reddit')}
                        disabled={isGenerating}
                        className="bg-purple-600 hover:bg-purple-500 text-white font-orbitron font-black px-6 py-3 rounded-xl transition-all shadow-lg shadow-purple-900/40 flex items-center gap-3 uppercase tracking-widest text-[10px] disabled:opacity-50"
                    >
                        {isGenerating ? <SpinnerIcon className="w-4 h-4" /> : <NewspaperIcon className="w-4 h-4" />}
                        TRIGGER_REDDIT_LOOP
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {agents.map(agent => (
                    <AgentCard key={agent.id} agent={agent} />
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <Card className="border-white/10 bg-black/40 h-full flex flex-col">
                        <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/5">
                            <h3 className="text-xl font-orbitron font-black text-white uppercase tracking-widest flex items-center gap-2">
                                <DatabaseIcon className="w-4 h-4 text-cyan-400" /> SWARM_OUTPUT_BUFFER
                            </h3>
                            <span className="text-[8px] font-mono text-gray-600 animate-pulse">MONITORING_TRANSMISSION...</span>
                        </div>
                        <div className="flex-grow bg-black/60 rounded-2xl p-8 border border-white/5 overflow-y-auto custom-scrollbar font-rajdhani text-lg text-gray-300 leading-relaxed italic min-h-[300px]">
                            {output ? (
                                <p className="animate-slide-in">"{output}"</p>
                            ) : isGenerating ? (
                                <div className="h-full flex flex-col items-center justify-center space-y-4 opacity-50">
                                    <SpinnerIcon className="w-12 h-12 text-red-500" />
                                    <p className="font-orbitron text-xs tracking-widest uppercase">Orchestrating Agent Nodes...</p>
                                </div>
                            ) : (
                                <div className="h-full flex flex-col items-center justify-center opacity-10">
                                    <SparklesIcon className="w-24 h-24 mb-4" />
                                    <p className="font-orbitron text-sm tracking-[0.5em] uppercase">Awaiting Swarm Action</p>
                                </div>
                            )}
                        </div>
                    </Card>
                </div>

                <div className="lg:col-span-1 space-y-6">
                    <Card className="border-green-500/20 bg-green-900/5">
                        <h4 className="text-xs font-orbitron font-black text-green-400 uppercase tracking-widest mb-4">REVENUE_STREAM_V3</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-end">
                                <p className="text-[10px] font-orbitron text-gray-500 uppercase">Fansly_PPV_Projected</p>
                                <p className="text-2xl font-orbitron font-black text-white">$1,402.00</p>
                            </div>
                            <div className="flex justify-between items-end">
                                <p className="text-[10px] font-orbitron text-gray-500 uppercase">Reddit_Conversion_Rate</p>
                                <p className="text-2xl font-orbitron font-black text-cyan-400">4.2%</p>
                            </div>
                        </div>
                        <div className="mt-6 pt-6 border-t border-white/5">
                            <p className="text-[9px] font-rajdhani text-gray-500 italic">"Every dollar logged is a perfected security interest in the future of the empire." — Bean Financials</p>
                        </div>
                    </Card>

                    <Card className="border-cyan-500/20 bg-cyan-900/5">
                         <h4 className="text-xs font-orbitron font-black text-cyan-400 uppercase tracking-widest mb-4">UCC_COMPLIANCE_STATUS</h4>
                         <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center">
                                <FvO_CoDee_Icon className="w-6 h-6 text-cyan-400" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-white uppercase">Article 9 Secured</p>
                                <p className="text-[8px] text-gray-500 font-mono">HASH: 0x82f...a109</p>
                            </div>
                         </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

const FvO_CoDee_Icon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
);

export default AgentSwarmView;

