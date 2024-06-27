import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: 'src/index.tsx',
      name: 'ReactDateFns',
      fileName: (format) => `react-date-fns.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'date-fns'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'date-fns': 'dateFns'
        }
      }
    }
  }
})