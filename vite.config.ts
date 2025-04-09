/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  test: {
    include: ['**/*.{test,spec}.?(c|m)[jt]s?(x)']
  },
})
