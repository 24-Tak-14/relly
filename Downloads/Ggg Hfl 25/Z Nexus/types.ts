
export interface AIDifficulty {
  level: string;
  skill_effectiveness: number;
  decision_speed: number;
  play_variety: number;
  audible_chance: number;
  bluff_factor: number;
  description: string;
}

export interface LunarPhase {
  [key: string]: number | string;
}

export interface ZoriCalendarData {
  new_year_start: string;
  months: string[];
  lunar_phases: Record<string, LunarPhase>;
}

export interface PlayerStats {
  speed: number;
  strength: number;
  agility: number;
  technique: number;
  accuracy: number;
  awareness: number;
  catching: number;
}

export type PlayerRarity = 'Legendary' | 'Epic' | 'Rare' | 'Common';

export interface Player {
  id: string;
  name: string;
  position: string;
  rating: number;
  teamId: string; // Updated to support dynamic HFL Team IDs
  willpower_score: number;
  stats: PlayerStats;
  nietzsche_quote: string;
  lore?: string;
  image: string;
  rarity?: PlayerRarity;
  jung_archetype?: string;
  handle?: string;
  designation?: string;
  classification?: string;
  manifest?: string;
}

export type WeatherType = 'CLEAR' | 'RAIN' | 'SNOW' | 'VOID_STORM';
export type PlayType = 'run' | 'pass' | 'special' | 'blitz' | 'cover' | 'trap' | 'draw' | 'screen' | 'hail_mary';

export interface GameState {
  down: number;
  distance: number;
  ballPosition: number;
  possession: 'offense' | 'defense';
  quarter: number;
  timeLeft: number;
  score: { offense: number; defense: number };
  phase: 'pre-snap' | 'in-play' | 'reveal' | 'post-play';
  weather: WeatherType;
  momentum: number; // 0 to 100, 50 is neutral
  playerFatigue: Record<string, number>; // player.id -> 0 to 100
}

export interface GameLogEntry {
  id: string;
  message: string;
  type: 'play' | 'score' | 'penalty' | 'info';
}

export interface PlayResult {
  yardage: number;
  turnover: boolean;
  description: string;
  offenseRolls: number[];
  defenseRolls: number[];
}

export interface Screen {
  id: string;
}

export const INITIAL_GAME_STATE: GameState = {
  down: 1,
  distance: 10,
  ballPosition: 20,
  possession: 'offense',
  quarter: 1,
  timeLeft: 900,
  score: { offense: 0, defense: 0 },
  phase: 'pre-snap',
  weather: 'CLEAR',
  momentum: 50,
  playerFatigue: {}
};

export interface FrontOfficeMember {
  name: string;
  role: string;
  expertise: string;
  lore: string;
  icon: string;
}

export interface Quest {
  id?: number;
  objective: string;
  reward: string;
  monetize?: string;
  ceremony?: string;
  tie?: string;
}

export interface QuestStage {
  stage?: number;
  id?: number;
  name: string;
  description?: string;
  quests: Quest[];
  ceremony?: string;
}

export interface JungArchetype {
  name: string;
  description: string;
  integration: string;
}

export interface CosmicEntity {
  name: string;
  type: "APZU" | "TIAMAAT";
  height_ft: number;
  color: string;
  visibility: string;
  mood?: string;
  vr_mode: boolean;
  lore: string;
}

export type AspectRatio = "1:1" | "16:9" | "9:16" | "4:3" | "3:4";
export type VideoResolution = "720p" | "1080p";

export interface TeamData {
  id: string;
  name: string;
  location: string;
  colors: string[];
  doctrine: string;
  identity: {
    offense: string;
    defense: string;
    chalices: number;
  };
  artifactPrompts: {
    logo: string;
    helmet: string;
    tee: string;
    uniform: string;
    stadium: string;
    jumbotron: string;
    doctrine: string;
    merch_hoodies_prompt?: string;
    merch_sneakers_prompt?: string;
    staff_sideline_prompt?: string;
    staff_concessions_prompt?: string;
    staff_security_prompt?: string;
  };
  financial?: {
    valuation: number;
    market: string;
    capacity: number;
  };
}

export interface Concept {
  name: string;
  type: string;
  description: string;
}

export interface MediaDoctrine {
  brand: string;
  strategies: { flow: string; description: string; why: string }[];
}

export interface FantasyGameMode {
  id: number;
  title: string;
  objective: string;
  entryFee: string;
  prizePool: string;
  scoring: string;
}

export type ViewType = 'dashboard' | 'ai_levels' | 'player_manifest' | 'zori_calendar' | 'psyche_quests' | 'cosmic_entities' | 'gemini_lab' | 'team_forge' | 'audit_ledger' | 'go_live_roadmap' | 'wheel_of_debauchery' | 'front_office' | 'hub' | 'architect' | 'tactical_ai' | 'ops' | 'buzz_center' | 'finance_center' | 'weaver_loom' | 'spirit_doctrine' | 'match_sim' | 'league_doctrine' | 'agent_swarm' | 'league_lore' | 'fantasy_vault' | 'nexus_systems' | 'ecosystem' | 'sim_lab' | 'roster_terminal' | 'spirit_foundry' | 'identity_creator' | 'visualizer' | 'hfl_manifest';

export interface SwarmAgent {
    id: string;
    name: string;
    role: string;
    status: 'IDLE' | 'ACTIVE' | 'SCORCHING' | 'DEPLOYING' | 'AUDITING' | 'ONLINE';
    color: string;
    lastAction: string;
}
