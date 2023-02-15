import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import alias from '@rollup/plugin-alias'
import { resolve } from 'path';

const projectRootDir = resolve(__dirname);

export default defineConfig({
  plugins: [
    react(),
    svgr({
      exportAsDefault: false,
    }),
    alias({
      entries: [
        {
          find: '@',
          replacement: resolve(projectRootDir, 'src')
        },
        {
          find: '@/constants',
          replacement: resolve(projectRootDir, 'src/constants'),
        }, 
        {
          find: '@/components',
          replacement: resolve(projectRootDir, 'src/components'),
        },
        {
          find: '@/assets',
          replacement: resolve(projectRootDir, 'src/assets'),
        }
      ]
    })
  ],
})
