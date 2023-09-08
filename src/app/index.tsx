import React from 'react';
import { createRoot } from 'react-dom/client';

const rootElement: HTMLElement | null = window.document.getElementById("app");

const root = createRoot(rootElement!);

root.render(<h1>Hello</h1>);
