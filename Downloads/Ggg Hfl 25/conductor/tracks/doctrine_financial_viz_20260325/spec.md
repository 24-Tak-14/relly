# Track Specification: Implement Dynamic Team Doctrine & Financial Visualizations

## Overview
This track enhances the HFL Manifest by integrating richer team data from `constants/teams.ts` and creating dynamic 3D visualizations for team "Doctrines" and "Financial Profiles".

## Goals
- Transition `manifestService.ts` to use `HFL_TEAMS` (TeamData) as the primary data source.
- Implement `DoctrineVisualizer` component: A 3D system that generates procedural visual effects (grids, voids, particles) based on team doctrine keywords.
- Implement `FinancialHUD` component: A 3D-styled dashboard for visualizing team valuation, market reach, and stadium metrics.
- Add "Neural-Sync" transitions between team selections.

## Technical Details
- **Data Source:** `Z Nexus/constants/teams.ts`.
- **3D Effects:** Use R3F `Points`, `ShaderMaterial`, or `InstanceMesh` for doctrine effects.
- **UI:** Integrate Lucide icons and Framer Motion for the financial HUD.

## User Stories
- As a user, I want to see a visual representation of a team's strategic doctrine in the 3D viewport.
- As a user, I want to view detailed financial and market data for each franchise.
- As a user, I want a seamless, high-fidelity experience when switching between different HFL teams.
