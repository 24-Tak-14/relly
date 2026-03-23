// File: frontend/src/components/GameCanvas.jsx

// This component is a React wrapper for the Three.js game.
// It uses an iframe to embed the separate Three.js application
// located in the public directory.

import React from 'react';

const GameCanvas = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gray-900 rounded-lg overflow-hidden">
      <iframe
        src="/public/unity_game/index.html"
        title="Heart Football League"
        className="w-full h-full"
        style={{ border: 'none' }}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GameCanvas;// --- Placeholder Data ---
// This JSON object contains sample player data with image URLs.
export const hutPlayerPool = {
  "players": [
    {
      "id": 1,
      "name": "Black 'Flash' Muzzlefingers",
      "position": "QB",
      "team": "Blitz Brigade",
      "rarity": "Gold",
      "attributes": {
        "speed": 95,
        "strength": 75,
        "agility": 90,
        "intelligence": 88
      },
      "imageUrl": "https://placehold.co/400x600/1f2937/a5f3fc?text=ACE"
    },
    {
      "id": 2,
      "name": "Nick 'Steel' Grain",
      "position": "DL",
      "team": "Iron Wall",
      "rarity": "Silver",
      "attributes": {
        "speed": 70,
        "strength": 98,
        "agility": 65,
        "intelligence": 80
      },
      "imageUrl": "https://placehold.co/400x600/1f2937/a5f3fc?text=TITAN"
    },
    {
      "id": 3,
      "name": "Ghost 'Phantom' White",
      "position": "WR",
      "team": "Shadow Strikers",
      "rarity": "Glamour",
      "attributes": {
        "speed": 99,
        "strength": 60,
        "agility": 97,
        "intelligence": 85
      },
      "imageUrl": "https://placehold.co/400x600/1f2937/a5f3fc?text=GHOST"
    },
    {
      "id": 4,
      "name": "Footy 'Quick' Zori",
      "position": "RB",
      "team": "Void Vipers",
      "rarity": "@~ZORI~@",
      "attributes": {
        "speed": 100,
        "strength": 95,
        "agility": 99,
        "intelligence": 99
      },
      "imageUrl": "https://placehold.co/400x600/1f2937/a5f3fc?text=ZORI"
    },
    {
      "id": 5,
      "name": "Rocky 'Stallion' Blowbowah",
      "position": "OL",
      "team": "Stone Giants",
      "rarity": "Bronze",
      "attributes": {
        "speed": 50,
        "strength": 100,
        "agility": 45,
        "intelligence": 70
      },
      "imageUrl": "https://placehold.co/400x600/1f2937/a5f3fc?text=ROCK"
    },
    {
      "id": 6,
      "name": "Leo 'The Lionheart' King",
      "position": "LB",
      "team": "Royal Roar",
      "rarity": "Iron",
      "attributes": {
        "speed": 85,
        "strength": 90,
        "agility": 80,
        "intelligence": 92
      },
      "imageUrl": "https://placehold.co/400x600/1f2937/a5f3fc?text=LEO"
    },
    {
      "id": 7,
      "name": "Bean 'The Sprout' Stalk",
      "position": "WR",
      "team": "Garden Golems",
      "rarity": "$Glamour-Bean$",
      "attributes": {
        "speed": 98,
        "strength": 55,
        "agility": 99,
        "intelligence": 82
      },
      "imageUrl": "https://placehold.co/400x600/1f2937/a5f3fc?text=BEAN"
    },
    {
      "id": 8,
      "name": "Kore 'The Wall' Stone",
      "position": "CB",
      "team": "Stone Giants",
      "rarity": "Gold",
      "attributes": {
        "speed": 92,
        "strength": 85,
        "agility": 90,
        "intelligence": 95
      },
      "imageUrl": "https://placehold.co/400x600/1f2937/a5f3fc?text=KORE"
    },
    {
      "id": 9,
      "name": "Puck 'The Mischief' Spirit",
      "position": "WR",
      "team": "Mystic Haze",
      "rarity": "Glamour",
      "attributes": {
        "speed": 97,
        "strength": 65,
        "agility": 96,
        "intelligence": 90
      },
      "imageUrl": "https://placehold.co/400x600/1f2937/a5f3fc?text=PUCK"
    },
    {
      "id": 10,
      "name": "Fenrir 'The Wild' Wolf",
      "position": "LB",
      "team": "Forest Fangs",
      "rarity": "Silver",
      "attributes": {
        "speed": 90,
        "strength": 92,
        "agility": 88,
        "intelligence": 85
      },
      "imageUrl": "https://placehold.co/400x600/1f2937/a5f3fc?text=FENRIR"
    }
  ]
};

