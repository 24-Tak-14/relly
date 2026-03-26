import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Building2, Landmark, BarChart3 } from 'lucide-react';

interface FinancialHUDProps {
  stats: {
    valuation: number;
    market: string;
    stadiumCapacity: number;
  };
  color: string;
}

const FinancialHUD: React.FC<FinancialHUDProps> = ({ stats, color }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Valuation Module */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-black/40 border border-white/5 p-6 rounded-[2rem] relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full" />
        <div className="flex items-center gap-3 mb-4">
          <Landmark className="text-cyan-400" size={18} />
          <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Franchise_Valuation</h4>
        </div>
        <div className="flex items-end gap-2">
          <span className="text-3xl font-black text-white tracking-tighter">${(stats.valuation / 1000000000).toFixed(1)}B</span>
          <div className="flex items-center text-green-500 text-[10px] font-bold mb-1">
            <TrendingUp size={12} /> +4.2%
          </div>
        </div>
        <p className="text-[8px] text-gray-600 mt-2 uppercase font-bold tracking-tighter">Market_Cap_Index: STABLE</p>
      </motion.div>

      {/* Market Reach */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-black/40 border border-white/5 p-6 rounded-[2rem] relative overflow-hidden"
      >
        <div className="flex items-center gap-3 mb-4">
          <Users className="text-purple-400" size={18} />
          <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Neural_Market_Reach</h4>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-end">
            <span className="text-2xl font-black text-white tracking-tighter">{stats.market}</span>
            <span className="text-[8px] text-gray-500 uppercase font-black">Sync_Rate: 92%</span>
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '75%' }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" 
            />
          </div>
        </div>
      </motion.div>

      {/* Stadium Analytics */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="md:col-span-2 bg-black/40 border border-white/5 p-6 rounded-[2rem] flex items-center justify-between"
      >
        <div className="flex items-center gap-6">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
            <Building2 className="text-cyan-400" size={24} />
          </div>
          <div>
            <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Arena_Throughput_Capacity</h4>
            <p className="text-xl font-black text-white tracking-tighter mt-1">{stats.stadiumCapacity.toLocaleString()} GUESTS</p>
          </div>
        </div>
        
        <div className="flex gap-4">
           <div className="text-right">
              <p className="text-[8px] font-black text-gray-600 uppercase">Occupancy</p>
              <p className="text-xs font-black text-cyan-500">98.2%</p>
           </div>
           <div className="text-right border-l border-white/5 pl-4">
              <p className="text-[8px] font-black text-gray-600 uppercase">Yield_Score</p>
              <p className="text-xs font-black text-purple-500">A+</p>
           </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FinancialHUD;
