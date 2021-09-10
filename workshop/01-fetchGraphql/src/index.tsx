import React from 'react';
import 'isomorphic-fetch';
import ReactDOM from 'react-dom';

import App from './App';

const container = document.getElementById('root');

if (!container) throw new Error('Failed to find the root element');

// Create a root.
const root = ReactDOM.createRoot(container);

root.render(<App />);
