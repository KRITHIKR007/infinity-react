import React from 'react';
import ReactDOM from 'react-dom/client';

// Import order matters for style cascading
import './styles/reset.css';         // 1. Reset styles first
import './styles/variables.css';     // 2. Variables
import './styles/animations.css';    // 3. Animations
import './styles/globals.css';       // 4. Global styles
import './index.css';                // 5. Index-specific styles
import './App.css';                  // 6. App styles

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();