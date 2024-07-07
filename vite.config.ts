import MillionLint from '@million/lint';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
const _plugins = [react(), tsconfigPaths()];
_plugins.unshift(MillionLint.vite())
export default defineConfig({
  plugins: _plugins,
  optimizeDeps: {
    include: ['@emotion/styled']
  }
});