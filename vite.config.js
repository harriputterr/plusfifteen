import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: { 
    sourcemap: true,
  },
  // server: {
  //   https: {
  //     key: './httpsplus15-privateKey.key',
  //     cert: './httpsplus15.crt',
  //   }
  // }
})
