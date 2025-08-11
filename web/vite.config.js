import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // BASE_PATH should be set in CI to `/${REPO_NAME}/` for project pages.
  // Falls back to `/` (e.g. for local dev or user/organization pages).
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
})
