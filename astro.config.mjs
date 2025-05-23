import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://utp-lite-version1.com',
  integrations: [],
  vite: {
    optimizeDeps: {
      exclude: ['react', 'react-dom']
    }
  }
});
