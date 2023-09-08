import * as React from 'react';
import * as ReactDOM from 'react-dom';

const rootElement: HTMLElement | null = window.document.getElementById("app");

console.log('testing load');

ReactDOM.render(<h1>Hello</h1>, rootElement);
