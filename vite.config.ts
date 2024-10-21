import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: 'https://github.com/Aj23Mah/food-Ordering', 
  server: {
    proxy: {
      '/assets': {
        target: 'https://github.com/Aj23Mah/food-Ordering',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/assets/, '/assets')
      }
    }
  }
})
