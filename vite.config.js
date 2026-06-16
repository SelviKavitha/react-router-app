import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // 1. Forces the live file watcher to look for updates directly on your hard drive
    watch: {
      usePolling: true,
      interval: 100,
    },
    // 2. Fixes the broken WebSocket connection causing the live update freeze
    hmr: {
      protocol: 'ws',
      host: 'localhost',
    },
    // 3. Ensures the port is strictly locked and stable
    port: 5173,
    strictPort: true,
  }
})