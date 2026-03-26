# Track Implementation Plan: Integrate Strategic Co-pilot (Nexus) with Gemini AI

## Phase 1: Chat UI & Base Setup
- [ ] **Task: Create NexusChatOverlay Component**
    - [ ] Build a collapsible chat overlay with Framer Motion animations.
    - [ ] Implement message list with distinct styles for "Nexus" and "User".
    - [ ] Add auto-scroll and loading indicators.
- [ ] **Task: Conductor - User Manual Verification 'Phase 1: Chat UI & Base Setup' (Protocol in workflow.md)**

## Phase 2: Contextual AI Integration
- [ ] **Task: Connect to Gemini Utilities**
    - [ ] Implement `handleSendMessage` using `fastChat` from `gemini.ts`.
    - [ ] Integrate `AGENT_CONSTITUTION` into the chat context.
- [ ] **Task: Team Context Injection**
    - [ ] Pass currently selected team data from `HFLManifestView` to `NexusChatOverlay`.
    - [ ] Implement "Analyze Current Team" shortcut button.
- [ ] **Task: Conductor - User Manual Verification 'Phase 2: Contextual AI Integration' (Protocol in workflow.md)**

## Phase 3: Strategic Recommendations & Polishing
- [ ] **Task: Implement Strategic Advice Flow**
    - [ ] Integrate `getStrategicAdvice` with a dedicated "Tactical Recommendation" action.
    - [ ] Use placeholder game state for initial recommendations.
- [ ] **Task: Final UI/UX Polishing**
    - [ ] Add "BLUF" formatting to Nexus responses.
    - [ ] Enhance holographic effects and transitions.
- [ ] **Task: Conductor - User Manual Verification 'Phase 3: Strategic Recommendations & Polishing' (Protocol in workflow.md)**
