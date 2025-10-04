import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/appdev1_midterm_exam/",
  plugins: [react()],
})
