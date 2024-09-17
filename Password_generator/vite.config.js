import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    assetsInclude: ['**/*.docx'],
    server:{
      host:"0.0.0.0",
      fs:{
          strict:false,
      },
    }
  })