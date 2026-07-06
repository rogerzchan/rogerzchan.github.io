import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://rogerchan.dev',
  server: {
    port: 4321,
    host: '127.0.0.1',
  },
});
