import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.glb"],
  base: '/AL_GHANI_CAR_REPAIR/',
})
