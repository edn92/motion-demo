import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import {resolve} from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: "/motion-demo/",
  plugins: [
    react(),
    svgr({
      svgrOptions:{},
    })],
  /*build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        404: resolve(__dirname, "public/404.html"),
      },
    },
  },*/
})
