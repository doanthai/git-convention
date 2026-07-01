import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/git-mastery/', // Update this if your GitHub repo name is different
  plugins: [react(), tailwindcss()],
})
