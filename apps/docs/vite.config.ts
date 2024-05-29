import {defineConfig} from 'vite';

export default defineConfig({
  plugins: [],
  base: './',
  build: {
    outDir: './dist',
  },
  server: {
    open: true,
    port: 8080,
  },
});
