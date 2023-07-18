import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.GITHUB_PAGES
        ? "web"
        : "./",
  plugins: [react(),viteSingleFile()],
  build: {
    outDir: "docs",
  },
})
