import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import preserveDirectives from 'rollup-preserve-directives';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: {
        Accordion: resolve(__dirname, 'src/lib/components/ui/accordion.tsx'),
        Alert: resolve(__dirname, 'src/lib/components/ui/alert.tsx'),
        Button: resolve(__dirname, 'src/lib/components/ui/button.tsx'),
        Container: resolve(
          __dirname,
          'src/lib/components/layouts/Container/index.tsx',
        ),
        index: resolve(__dirname, 'src/lib/index.ts'),
      },
      fileName: '[name]',
      name: 'Nako UI',
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-dom', 'tailwindcss'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
          tailwindcss: 'tailwindcss',
        },
      },
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [
    react(),
    dts({
      exclude: ['src/lib/**/*.stories.tsx'],
      include: ['src/lib/**/*', 'src/vite-env.d.ts'],
      outDir: 'dist/types',
      tsconfigPath: resolve(__dirname, 'tsconfig.app.json'),
    }),
    preserveDirectives(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src/lib'),
    },
  },
});
