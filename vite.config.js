import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.GITHUB_PAGES
        ? "web"
        : "./",
  plugins: [react()],
  build: {
    outDir: "docs",
  },
})
