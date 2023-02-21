import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { AllData } from './Context';
import './style.css'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <AllData>
      <App />
    </AllData>
);

