import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { initializeFirebase } from './config/firebase.ts';
import './index.css';

// initializeFirebase();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
