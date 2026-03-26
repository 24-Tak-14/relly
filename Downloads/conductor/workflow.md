# Workflow Definition

This document outlines the Conductor workflow, including standard practices for task execution, testing, and code management.

## Task Lifecycle

### 1. Implementation
- **Action:** Execute the task as defined in the track's implementation plan.
- **Tools:** Utilize Conductor's available tools (`run_shell_command`, `read_file`, `write_file`, `ask_user`, etc.) according to the task's requirements.
- **Code Analysis:** Before making changes, analyze existing code relevant to the task.

### 2. Testing
- **Requirement:** Strive for >80% test code coverage for all implemented features.
- **Procedure:** Write unit tests, integration tests, or end-to-end tests as appropriate for the task.

### 3. Code Review & Committing
- **Commit Frequency:** Commit changes after each completed **task**.
- **Commit Message Standard:** Follow conventional commits (e.g., `feat:`, `fix:`, `chore:`). Include a concise description of the change.
- **Code Style:** Adhere to the selected code style guides.

### 4. Verification
- **Static Analysis:** Run linters and type checkers (e.g., `eslint`, `tsc`, `ruff check`) to ensure code quality.
- **Test Execution:** Run all project tests.

### 5. Phase Completion Verification and Checkpointing Protocol
- **Purpose:** To ensure a coherent and stable state at the end of each major development phase.
- **Procedure:**
    1.  **Manual Review:** The AI agent will prompt the user to manually review the completed phase's work.
    2.  **User Feedback:** The user provides feedback or confirms readiness to proceed.
    3.  **Agent Action:** Based on user feedback, the AI agent will either:
        a.  Address feedback by creating new tasks.
        -   Commit changes related to feedback resolution.
        b.  Proceed to the next phase if confirmation is given.
    4.  **Checkpoint:** Mark the phase as complete in the Conductor tracks file.

## Task Workflow

When executing a task from the Implementation Plan:

1.  **Understand Task:** Read the task description and any associated sub-tasks.
2.  **Contextualize:** Analyze `product.md`, `product-guidelines.md`, `tech-stack.md`, and `workflow.md` for relevant context.
3.  **Implement:** Write and modify code to fulfill the task.
4.  **Test:** Write and execute tests to ensure functionality and coverage.
5.  **Verify:** Run static analysis and project tests.
6.  **Commit:** Stage changes and commit using conventional commit messages.
7.  **Update Plan:** Mark the task as complete in the track's `plan.md`.
8.  **Phase Checkpoint:** If the task is the last in a phase, initiate the "Phase Completion Verification and Checkpointing Protocol" defined above.

---

## Branching Strategy

- **Main Branch:** `main`
- **Feature Branches:** All new development, including tracks, will be branched off `main` and merged back into `main` after completion and approval.

---

## Commit Message Conventions

- **Type:** `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `perf`, `test`
- **Scope:** (Optional) e.g., `(conductor)`, `(api)`, `(ui)`
- **Subject:** Concise description (imperative mood, no period)
- **Body:** (Optional) Detailed explanation of "why" and "how".
- **Footer:** (Optional) Breaking changes, issues.

---

## Continuous Integration/Continuous Deployment (CI/CD)

- **Placeholder:** CI/CD setup is TBD and will be defined in a future track.

---

## Debugging and Error Handling

- **Logging:** Utilize the integrated logging framework (e.g., Firebase) for runtime diagnostics.
- **Error Reporting:** Implement robust error handling and reporting mechanisms.
- **Debugging Tools:** Leverage available debugging tools based on the project's tech stack.

---

## Code Style Standards

- Adhere to the selected code style guides (`python.md`, `javascript.md`, `typescript.md`, `general.md`).
