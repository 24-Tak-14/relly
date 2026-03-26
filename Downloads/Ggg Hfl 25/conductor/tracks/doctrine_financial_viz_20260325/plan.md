# Track Implementation Plan: Implement Dynamic Team Doctrine & Financial Visualizations

## Phase 1: Data Unification & Refactoring
- [x] **Task: Update manifestService.ts**
    - [x] Import `HFL_TEAMS` from `constants/teams.ts`.
    - [x] Map `TeamData` to a consolidated manifest format.
    - [x] Ensure backward compatibility with existing `HFLManifestView`.
- [x] **Task: Conductor - User Manual Verification 'Phase 1: Data Unification & Refactoring' (Protocol in workflow.md)**

## Phase 2: 3D Doctrine Visualizers
- [x] **Task: Create DoctrineVisualizer Component**
    - [x] Implement procedural 3D effects (e.g., Grid, Sphere, Particle Swarm).
    - [x] Create a mapping between doctrine keywords (Celestial, Tectonic, Crystalline) and visual styles.
- [x] **Task: Integrate into Core3DViewport**
    - [x] Render `DoctrineVisualizer` as a background layer in the 3D scene.
    - [x] Synchronize color and intensity with selected team metadata.
- [x] **Task: Conductor - User Manual Verification 'Phase 2: 3D Doctrine Visualizers' (Protocol in workflow.md)**

## Phase 3: Financial HUD & Integration
- [x] **Task: Create FinancialHUD Component**
    - [x] Build a modern, data-dense overlay for financial metrics.
    - [x] Use `Chart.js` or custom SVG/Framer components for market reach visualization.
- [x] **Task: Final Integration in HFLManifestView**
    - [x] Update main manifest view to include the new visualizers and HUD.
    - [x] Implement smooth Framer Motion transitions for data updates.
- [x] **Task: Conductor - User Manual Verification 'Phase 3: Financial HUD & Integration' (Protocol in workflow.md)**
