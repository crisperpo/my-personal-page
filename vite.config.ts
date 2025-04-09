/// <reference types="vitest/config" />
/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  test: {
    css: true,
    environment: 'jsdom',
    globals: true,
    include: ['**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    setupFiles: './src/test/setup.ts',
  },
})
