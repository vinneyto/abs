import 'reset-css';

import { createRoot } from 'react-dom/client';
import { Scene } from './containers';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

createRoot(root).render(
  <div style={{ height: '100vh', width: '100vw' }}>
    <React.StrictMode>
      <Provider store={store}>
        <Scene />
      </Provider>
    </React.StrictMode>
    ,
  </div>,
);
