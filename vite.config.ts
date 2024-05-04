import { defineConfig } from 'vite' 
import react from '@vitejs/plugin-react-swc' 
import mkcert from 'vite-plugin-mkcert' 

export default defineConfig({ 
    server: { 
        port: 5173, 
        proxy: { 
          "^/api": "https://wwtbam.azurewebsites.net" 
        } 
    }, 
  base: "/wwtbam_client/",
  plugins: [react(), mkcert()], 
      build: {
          outDir: 'dist', 
      }
}) 