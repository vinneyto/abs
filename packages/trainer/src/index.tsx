import 'reset-css';

import { createRoot } from 'react-dom/client';
import { Scene } from './components/Scene/Scene';

const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

createRoot(root).render(
  <div style={{ height: '100vh', width: '100vw' }}>
    <Scene />
  </div>,
);
