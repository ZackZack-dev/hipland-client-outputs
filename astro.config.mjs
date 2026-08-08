import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://systemsound.com.au',
  build: {
    assets: 'assets'
  },
  server: {
    host: true
  }
});
