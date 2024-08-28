import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib/index.ts'),
      fileName: 'index',
      name: 'Nako UI',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  plugins: [
    react(),
    dts({
      exclude: ['src/lib/**/*.stories.tsx'],
      include: ['src/lib/**/*', 'src/vite-env.d.ts'],
      tsconfigPath: resolve(__dirname, 'tsconfig.app.json'),
    }),
  ],
});
