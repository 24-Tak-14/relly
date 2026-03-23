# Heart Football League (HFL) Tech Stack

## Frontend
- **Framework:** [React](https://react.dev/) (v18.3.1) initialized with [Vite](https://vitejs.dev/) (v5.3.1) for a fast, modern development experience.
- **3D Visualizations:** [Three.js](https://threejs.org/) (v0.165.0) for rendering game canvases and interactive player cards.
- **Data Visualization:** [Recharts](https://recharts.org/) (v2.12.7) for dynamic, data-rich dashboards and simulation analytics.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v3.4.4) with [Autoprefixer](https://github.com/postcss/autoprefixer) and [PostCSS](https://postcss.org/) for a premium, responsive UI.
- **Routing:** [React Router DOM](https://reactrouter.com/) (v6.24.1) for seamless navigation across team management modules.
- **Icons:** [Lucide React](https://lucide.dev/) (v0.407.0) for a consistent and professional icon system.

## Backend & Simulation Logic
- **Language:** [Python](https://www.python.org/) (v3.7+) as the core engine for simulation logic, AI coaching, and complex game-state management.
- **Core Engine:** Custom Python modules for dice-based systems, tactical decision-making, and procedural generation.
- **Asset Generation:** Python-based logo generation using standard libraries and predefined color schemes.

## Infrastructure & Services
- **Cloud Platform:** [Firebase](https://firebase.google.com/) (v10.12.3) for authentication, real-time database management, and scalable backend services.
- **Version Control:** Git for source code management and collaborative development.

## Architecture
- **Structure:** Multi-module/Monorepo architecture with a clear separation between the Python-based simulation engine (py/, game_engine/) and the React-based frontend (rontend/).
