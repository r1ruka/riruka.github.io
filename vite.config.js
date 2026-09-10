import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/riruka.github.io/',
  plugins: [react()],
  assetsInclude: ['**/*.mp3'],
})
