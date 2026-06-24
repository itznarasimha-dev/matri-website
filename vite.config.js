import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // For GitHub Pages: set base to '/your-repo-name/' — leave '/' for custom domain or Vercel/Netlify
  base: '/',
})
