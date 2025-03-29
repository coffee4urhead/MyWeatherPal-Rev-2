// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/MyWeatherPal-Rev-2/home',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html' // Explicit entry point
      }
    }
  }
})