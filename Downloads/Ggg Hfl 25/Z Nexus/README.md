<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/1c692d60-619e-416d-be7b-6028146b0d0d

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## End-to-end tests (E2E)

Run Playwright E2E tests locally or in CI:

- From the Z Nexus package: `npm --prefix "Z Nexus" run test:e2e`
- From the repository root: `npm run test:e2e`

Notes:
- Playwright must be installed: `npm --prefix "Z Nexus" install`
- A preview server may be required: `npm --prefix "Z Nexus" run preview -- --port=5173`

