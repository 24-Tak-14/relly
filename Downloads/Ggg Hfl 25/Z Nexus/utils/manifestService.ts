import { TEAM_IDENTITIES, TeamIdentity } from '../teamIdentityData';

export interface HFLAssetMetadata {
  id: string;
  name: string;
  city: string;
  logoUrl: string;
  helmetUrl: string;
  colors: string[];
  theme: string;
  stats: {
    megaChalices: number;
    stadiumCapacity: number;
  };
}

/**
 * Resolves the logo path based on the team ID and city/name.
 * Assets are located in the root 'Logos.0' or '4 uniforms' directories.
 * Note: In a production Vite environment, these would be in /public or handled via imports.
 */
const resolveLogoUrl = (team: TeamIdentity): string => {
  // Pattern: Logos.0/<city-slug>-<team-slug>-logo.png
  const citySlug = team.city.toLowerCase().replace(/'/g, '').replace(/\s+/g, '-');
  const nameSlug = team.name.toLowerCase().replace(/'/g, '').replace(/\s+/g, '-');
  
  // Special mapping for some files that might not follow the exact pattern or are in subfolders
  const specialCases: Record<string, string> = {
    'kaitlynnville-eclipse': '/kaitlynnville-eclipse-logo.png', // Example
  };

  if (specialCases[team.id]) return specialCases[team.id];

  return `/Logos.0/${citySlug}-${nameSlug}-logo.png`;
};

export const getHFLManifest = (): HFLAssetMetadata[] => {
  return Object.values(TEAM_IDENTITIES).map(team => {
    // Extract mega chalices from description if not explicitly available
    const chaliceMatch = team.description.match(/(\d+) Mega Chalices/);
    const megaChalices = chaliceMatch ? parseInt(chaliceMatch[1]) : 0;

    // Extract capacity
    const capacityMatch = team.stadiumDescription.match(/capacity of ([\d,]+)/);
    const capacity = capacityMatch ? parseInt(capacityMatch[1].replace(/,/g, '')) : 0;

    return {
      id: team.id,
      name: team.name,
      city: team.city,
      logoUrl: resolveLogoUrl(team),
      helmetUrl: '/4 uniforms/logos/helmet1.jpg', // Default placeholder for now
      colors: team.colors,
      theme: team.theme,
      stats: {
        megaChalices,
        stadiumCapacity: capacity
      }
    };
  });
};

export const getTeamById = (id: string): HFLAssetMetadata | undefined => {
  return getHFLManifest().find(t => t.id === id);
};
