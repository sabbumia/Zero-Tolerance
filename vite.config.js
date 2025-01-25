// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@': '/src',
//     },
//   },
//   define: {
//     'process.env': {}, // Polyfill process.env
//   },
//   optimizeDeps: {
//     include: ['next/link'], // Ensure Next.js packages are included in optimization
//   },
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Ensure that `@` maps to the `src` folder
    },
  },
  define: {
    'process.env': {}, // Polyfill for process.env, needed for some libraries
  },
  optimizeDeps: {
    include: [], // Clean this up unless you specifically need to optimize certain packages
  },
})
