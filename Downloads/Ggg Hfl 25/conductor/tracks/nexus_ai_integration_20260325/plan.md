# Track Implementation Plan: Integrate Strategic Co-pilot (Nexus) with Gemini AI

## Phase 1: Chat UI & Base Setup
- [x] **Task: Create NexusChatOverlay Component**
    - [x] Build a collapsible chat overlay with Framer Motion animations.
    - [x] Implement message list with distinct styles for "Nexus" and "User".
    - [x] Add auto-scroll and loading indicators.
- [x] **Task: Conductor - User Manual Verification 'Phase 1: Chat UI & Base Setup' (Protocol in workflow.md)**

## Phase 2: Contextual AI Integration
- [x] **Task: Connect to Gemini Utilities**
    - [x] Implement `handleSendMessage` using `fastChat` from `gemini.ts`.
    - [x] Integrate `AGENT_CONSTITUTION` into the chat context.
- [x] **Task: Team Context Injection**
    - [x] Pass currently selected team data from `HFLManifestView` to `NexusChatOverlay`.
    - [x] Implement "Analyze Current Team" shortcut button.
- [x] **Task: Conductor - User Manual Verification 'Phase 2: Contextual AI Integration' (Protocol in workflow.md)**

## Phase 3: Strategic Recommendations & Polishing
- [x] **Task: Implement Strategic Advice Flow**
    - [x] Integrate `getStrategicAdvice` with a dedicated "Tactical Recommendation" action.
    - [x] Use placeholder game state for initial recommendations.
- [x] **Task: Final UI/UX Polishing**
    - [x] Add "BLUF" formatting to Nexus responses.
    - [x] Enhance holographic effects and transitions.
- [x] **Task: Conductor - User Manual Verification 'Phase 3: Strategic Recommendations & Polishing' (Protocol in workflow.md)**
