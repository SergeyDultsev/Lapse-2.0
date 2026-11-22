import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import { defineConfig } from 'vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  base: "/",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@app': path.resolve(__dirname, 'src/app'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@modules': path.resolve(__dirname, 'src/modules'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@shared': path.resolve(__dirname, 'src/shared'),
    },
  },
})
