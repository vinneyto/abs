import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

// vite.config.js
export default {
  plugins: [wasm(), topLevelAwait()],
  assetsInclude: ['**/*.glb'],
  base: './',
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
};
