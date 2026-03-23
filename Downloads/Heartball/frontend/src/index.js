// File: frontend/src/index.js

// This is the entry point for the React application.
// It sets up the main App component and renders it into the DOM.

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css'; // Import the global styles

// Use createRoot for modern React concurrent mode rendering
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
