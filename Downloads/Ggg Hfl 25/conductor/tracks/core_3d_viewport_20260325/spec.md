# Track Specification: Implement Core 3D Manifest Viewport

## Overview
This track focuses on building the foundational 3D interface for visualizing HFL teams and their assets (logos, helmets, player models). It integrates the confirmed tech stack (React, Three.js, R3F) to create a high-fidelity, interactive manifest.

## Goals
- Initialize a React Three Fiber viewport.
- Create a 3D scene with dynamic HFL team assets.
- Implement basic camera controls (OrbitControls).
- Load and display HFL team logos and uniform concepts in a 3D space.

## Technical Details
- **Tech Stack:** React, TypeScript, Three.js, R3F, R3D.
- **Assets:** Use team logos and models from the project root (e.g., `Logos.0`, `4 uniforms`).
- **Data:** Use `teamIdentityData.ts` and `ecosystemData.ts` from `Z Nexus` for team metadata.

## User Stories
- As a user, I want to see a 3D view of HFL team assets.
- As a user, I want to interact with the 3D scene (rotate, zoom).
- As a user, I want to switch between different team manifests.
