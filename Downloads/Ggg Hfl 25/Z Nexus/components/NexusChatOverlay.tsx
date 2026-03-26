import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X, Minimize2, Maximize2, Bot, User, Loader2, Zap } from 'lucide-react';

interface Message {
  id: string;
  role: 'nexus' | 'user';
  content: string;
  timestamp: Date;
}

interface NexusChatOverlayProps {
  onSendMessage: (message: string) => Promise<string>;
  onGetStrategicAdvice?: () => Promise<string>;
  teamContext?: string;
}

const NexusChatOverlay: React.FC<NexusChatOverlayProps> = ({ onSendMessage, onGetStrategicAdvice, teamContext }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'nexus',
      content: "NEXUS ONLINE. Strategic Co-pilot active. How can I assist your manifest analysis today?",
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleStrategicAdvice = async () => {
    if (!onGetStrategicAdvice || isLoading) return;
    setIsLoading(true);
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      role: 'user',
      content: "Requesting tactical strategic advice for current personnel.",
      timestamp: new Date()
    }]);

    try {
      const response = await onGetStrategicAdvice();
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'nexus',
        content: response,
        timestamp: new Date()
      }]);
    } catch (error) {
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'nexus',
        content: "Neural simulation failed to generate tactical path.",
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await onSendMessage(input);
      const nexusMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'nexus',
        content: response,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, nexusMsg]);
    } catch (error) {
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'nexus',
        content: "Error manifesting strategic response. Connection to neural nodes interrupted.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center text-black shadow-[0_0_20px_rgba(6,182,212,0.5)] z-50 hover:scale-110 transition-transform"
        >
          <Bot size={28} />
        </motion.button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? '80px' : '600px',
              width: '400px'
            }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-8 right-8 bg-black/80 backdrop-blur-xl border border-cyan-500/30 rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden font-orbitron"
          >
            {/* Header */}
            <div className="p-4 border-b border-cyan-500/20 flex items-center justify-between bg-cyan-500/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center border border-cyan-500/40">
                  <Bot size={18} className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xs font-black text-white uppercase tracking-widest">Nexus_Co-pilot</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[8px] text-green-500 font-bold uppercase tracking-tighter">System_Active</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-2 hover:bg-white/5 rounded-lg text-gray-500 hover:text-white transition-colors"
                >
                  {isMinimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-red-500/20 rounded-lg text-gray-500 hover:text-red-400 transition-colors"
                >
                  <X size={14} />
                </button>
              </div>
            </div>

            {/* Chat Content */}
            {!isMinimized && (
              <>
                <div 
                  ref={scrollRef}
                  className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.05),transparent_70%)]"
                >
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, x: msg.role === 'nexus' ? -10 : 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`flex ${msg.role === 'nexus' ? 'justify-start' : 'justify-end'}`}
                    >
                      <div className={`max-w-[85%] flex flex-col ${msg.role === 'nexus' ? 'items-start' : 'items-end'} gap-2`}>
                        <div className={`flex items-center gap-2 text-[8px] font-black uppercase tracking-widest ${msg.role === 'nexus' ? 'text-cyan-500' : 'text-purple-400'}`}>
                          {msg.role === 'nexus' ? <Bot size={10} /> : <User size={10} />}
                          {msg.role}
                        </div>
                        <div className={`p-4 rounded-2xl text-xs leading-relaxed ${
                          msg.role === 'nexus' 
                            ? 'bg-white/5 border border-white/10 text-gray-200' 
                            : 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-100'
                        }`}>
                          {msg.content}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                        <Loader2 size={16} className="text-cyan-500 animate-spin" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-cyan-500/20 bg-black/40 space-y-4">
                  {onGetStrategicAdvice && (
                    <button
                      onClick={handleStrategicAdvice}
                      disabled={isLoading}
                      className="w-full py-2 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-400 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                    >
                      <Zap size={12} /> Request_Tactical_Recommendation
                    </button>
                  )}
                  <div className="relative flex items-center gap-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                      placeholder="Enter strategic inquiry..."
                      className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder:text-gray-600 outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                    />
                    <button
                      onClick={handleSend}
                      disabled={isLoading}
                      className="p-3 bg-cyan-500 hover:bg-cyan-400 text-black rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                    >
                      <Send size={16} />
                    </button>
                  </div>
                  {teamContext && (
                    <div className="mt-3 flex items-center gap-2">
                       <div className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded text-[8px] font-black text-cyan-400 uppercase tracking-tighter flex items-center gap-1">
                          <Zap size={8} /> Active_Context: {teamContext}
                       </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NexusChatOverlay;
