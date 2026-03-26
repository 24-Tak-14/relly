import { TEAM_IDENTITIES, TeamIdentity } from '../teamIdentityData';
import { HFL_TEAMS } from '../constants/teams';
import { TeamData } from '../types';

export interface HFLAssetMetadata {
  id: string;
  name: string;
  city: string;
  logoUrl: string;
  helmetUrl: string;
  colors: string[];
  theme: string;
  doctrine: string;
  identity: {
    offense: string;
    defense: string;
    chalices: number;
  };
  stats: {
    megaChalices: number;
    stadiumCapacity: number;
    valuation: number;
    market: string;
  };
}

/**
 * Resolves the logo path based on the team ID and city/name.
 */
const resolveLogoUrl = (city: string, name: string): string => {
  const citySlug = city.toLowerCase().replace(/'/g, '').replace(/\s+/g, '-');
  const nameSlug = name.toLowerCase().replace(/'/g, '').replace(/\s+/g, '-');
  return `/Logos.0/${citySlug}-${nameSlug}-logo.png`;
};

export const getHFLManifest = (): HFLAssetMetadata[] => {
  return HFL_TEAMS.map(team => {
    // Attempt to find legacy identity for mascot or specific theme details if needed
    const legacyId = `${team.location.toLowerCase().replace(/'/g, '').replace(/\s+/g, '-')}-${team.name.toLowerCase()}`;
    const legacy = TEAM_IDENTITIES[legacyId];

    return {
      id: team.id,
      name: team.name,
      city: team.location,
      logoUrl: resolveLogoUrl(team.location, team.name),
      helmetUrl: '/4 uniforms/logos/helmet1.jpg',
      colors: team.colors,
      theme: legacy?.theme || team.doctrine,
      doctrine: team.doctrine,
      identity: team.identity,
      stats: {
        megaChalices: team.identity.chalices,
        stadiumCapacity: team.financial?.capacity || 0,
        valuation: team.financial?.valuation || 0,
        market: team.financial?.market || "Unknown"
      }
    };
  });
};

export const getTeamById = (id: string): HFLAssetMetadata | undefined => {
  return getHFLManifest().find(t => t.id === id);
};
