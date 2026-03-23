// File: frontend/src/components/PlayerCard.jsx

// This component displays a player's information in a visually engaging "holographic" card format.
// It uses Tailwind CSS for styling and includes a subtle animation.

import React from 'react';
import { Sparkles } from 'lucide-react';

const rarityColors = {
  'Clay': 'bg-gray-500',
  'Iron': 'bg-gray-400',
  'Bronze': 'bg-yellow-800',
  'Silver': 'bg-gray-300',
  'Gold': 'bg-yellow-400',
  'Glamour': 'bg-purple-600',
  '$Glamour-Bean$': 'bg-indigo-600',
  '@~ZORI~@': 'bg-red-600'
};

const PlayerCard = ({ player }) => {
  if (!player) {
    return (
      <div className="text-center text-gray-400">
        <p>No player data available.</p>
      </div>
    );
  }

  const getRarityClass = (rarity) => {
    const color = rarityColors[rarity] || 'bg-gray-700';
    return `${color} text-white`;
  };

  return (
    <div 
      className={`relative w-96 h-[500px] rounded-2xl overflow-hidden shadow-2xl transition-transform transform hover:scale-105 
                  bg-gray-800 border-2 border-gray-700 glow-animation`}
    >
      {/* Rarity and sparkles */}
      <div className={`absolute top-4 left-4 px-4 py-1 rounded-full text-xs font-bold uppercase z-10 ${getRarityClass(player.rarity)} flex items-center`}>
        {player.rarity === '@~ZORI~@' && <Sparkles size={16} className="mr-1 text-yellow-300 animate-pulse" />}
        {player.rarity}
      </div>

      {/* Player Image with subtle glow effect */}
      <div 
        className="w-full h-2/3 bg-gray-900 border-b-2 border-gray-700" 
        style={{
          backgroundImage: `url(${player.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: '0 0 15px rgba(125, 255, 255, 0.2) inset'
        }}
      ></div>

      {/* Player Info */}
      <div className="p-6 text-gray-200">
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

export default PlayerCard;
