import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['styled-components'],
  },
  build: {
    commonjsOptions: {
      include: [/styled-components/, /node_modules/],
    },
  },
})
