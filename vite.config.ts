import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import alias from '@rollup/plugin-alias'
import { resolve } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths'

const projectRootDir = resolve(__dirname);

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    svgr({
      exportAsDefault: false,
    }),
  ],
})
