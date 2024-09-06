import fs from 'fs';
import path, { resolve } from 'path';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import preserveDirectives from 'rollup-preserve-directives';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

function generateEntryPoints(baseDir: string, subDir: string) {
  const entries: Record<string, string> = {};

  const traverseDirectory = (dir: string, prefix = '') => {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        traverseDirectory(filePath, path.join(prefix, file));
      } else if (file.endsWith('.tsx') && !file.includes('.stories')) {
        const relativePath = path.relative(baseDir, filePath);
        const entryName = path.join(
          'components',
          subDir,
          relativePath.replace('.tsx', ''),
        );
        entries[entryName] = filePath;
      }
    });
  };

  traverseDirectory(baseDir);

  return entries;
}

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: {
        ...generateEntryPoints(
          resolve(__dirname, 'src/lib/components/ui'),
          'ui',
        ),
        ...generateEntryPoints(
          resolve(__dirname, 'src/lib/components/layouts'),
          'layouts',
        ),
        ...generateEntryPoints(
          resolve(__dirname, 'src/lib/components/parts'),
          'parts',
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
      outDir: 'dist',
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
