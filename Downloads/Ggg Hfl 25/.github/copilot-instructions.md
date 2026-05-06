# Copilot instructions — Zori Nexus: HFL Manifest

Purpose: give future Copilot sessions repository-specific guidance for running, navigating, and making changes.

1) Build, test, and lint commands
- Install dependencies (root):
  - npm install
- Dev (recommended):
  - From repo root (recommended): npm run dev
    - Root script proxies to the Z Nexus app: equivalent to npm --prefix "Z Nexus" run dev
  - Or run in the app folder: cd "Z Nexus" && npm run dev
  - NOTE: Set GEMINI_API_KEY in Z Nexus/.env.local before running dev (see GEMINI.md)
- Build (production):
  - npm --prefix "Z Nexus" run build  (or cd into Z Nexus and run npm run build)
- Preview production build:
  - npm --prefix "Z Nexus" run preview
- Lint / type-check:
  - npm run lint (root proxies to Z Nexus; Z Nexus lint runs: tsc --noEmit)
- Tests:
  - Unit tests: none configured at the workspace root or in Z Nexus by default (root test is a placeholder).
  - E2E / integration:
    - From the workspace root: npm run test:e2e
      - This runs the Z Nexus Playwright tests (npm --prefix "Z Nexus" run test:e2e).
    - Z Nexus uses Playwright for test:e2e (see Z Nexus/package.json).
- Windows notes:
  - On Windows use npm.cmd if needed (e.g., npm.cmd install).
2) High-level architecture (big picture)
- Workspace layout:
  - Root is a multi-package workspace that delegates the main app to the Z Nexus folder.
  - "Z Nexus" is the primary React + TypeScript + Vite application (R3F + three.js for 3D visuals).
  - Assets and team data live in `Logos.0/`, `4 uniforms/`, regional folders (NORCENT/NORWEST), and `Z Nexus/assets`.
  - `conductor/` contains product specs, plans, and the Conductor workflow for track-driven development and manual verification steps.
- Data & AI:
  - The app maps static constants into a runtime manifest via `manifestService` (service-oriented mapping).
  - Nexus (the co-pilot) is integrated via Google GenAI (@google/genai) — key materialized via environment variables (.env.local).
- Rendering & visuals:
  - 3D scenes are composed of modular visualizers (e.g., DoctrineVisualizer, Asset3DContainer) used by a Core3DViewport.
  - Procedural visualization is driven from team metadata (doctrines, keywords) to generate effects.

3) Key conventions and patterns (repo-specific)
- Conductor methodology:
  - Work is organized into "Tracks" with spec.md and plan.md files inside `conductor/` and per-feature folders. Follow those specs for behavioral and verification steps.
- TypeScript-first and strict typing:
  - New features should add explicit interfaces/types in TypeScript files under `Z Nexus` (strict typing is enforced by tsc lint script).
- Component & scene structure:
  - Keep 3D scene logic in dedicated visualizer components (avoid mixing large scene logic into generic UI components).
  - Use `utils/` for manifest mapping, AI helpers, and shared logic.
- Running scripts from root:
  - Most day-to-day commands are proxied from the root to Z Nexus using npm --prefix "Z Nexus" <cmd>. Use that from CI or automation to avoid changing cwd.
- Env & secrets:
  - GEMINI_API_KEY (or other AI keys) live in Z Nexus/.env.local — ensure these keys are present locally and not committed.
- Linting is type checking:
  - The lint script in Z Nexus is `tsc --noEmit` — it enforces type correctness rather than stylistic rules.

4) AI / assistant config discovery
- No other assistant config files (CLAUDE.md, .cursorrules, AGENTS.md, .windsurfrules, CONVENTIONS.md, AIDER_CONVENTIONS.md, .clinerules) were found in the repository. If you add one, include a short summary here so Copilot sessions can ingest it.
5) Quick references for automation and CI
- Dev server for local development: npm run dev
- Add CI steps that run (in order): npm install, npm --prefix "Z Nexus" run build, npm --prefix "Z Nexus" run lint

If adding tests or other subprojects, ensure each subproject exposes standard scripts (dev/build/test/lint) in its package.json so workspace-level automation can use npm --prefix.

---
If useful, configure an MCP server for end-to-end testing (Playwright) or visual regression — ask and I can add a starter MCP server config.
