// Community Modules
import React from 'react';
import { createRoot } from 'react-dom/client';

// Package Modules
import App from './App';

const rootElement: HTMLElement | null = window.document.getElementById('app');

const root = createRoot(rootElement!);

root.render(<App />);
