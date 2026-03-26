# Track Specification: Integrate Strategic Co-pilot (Nexus) with Gemini AI

## Overview
This track implements the "Nexus" Strategic Co-pilot, an AI-powered assistant that provides strategic insights, team analysis, and tactical recommendations directly within the Zori Nexus interface. It leverages the Gemini AI SDK to create a contextual and philosophical interaction layer.

## Goals
- Implement a holographic chat interface for the Nexus Co-pilot.
- Integrate existing Gemini AI utilities (`getStrategicAdvice`, `fastChat`) from `utils/gemini.ts`.
- Enable contextual analysis of the currently selected team in the HFL Manifest.
- Provide "BLUF" (Bottom Line Up Front) summaries for HFL teams.

## Technical Details
- **Tech Stack:** React, TypeScript, Framer Motion, Google GenAI SDK.
- **Context Integration:** Access the current manifest state from `HFLManifestView` to feed team data into AI prompts.
- **UI Aesthetic:** Use "holographic" styling (blur, semi-transparency, neon accents) consistent with the `product-guidelines.md`.

## User Stories
- As a user, I want to ask Nexus for a strategic summary of a specific team.
- As a user, I want to get tactical play recommendations based on team personnel.
- As a user, I want to interact with a high-fidelity chat interface that feels like a strategic co-pilot.
