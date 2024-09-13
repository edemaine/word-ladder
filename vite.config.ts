import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import civetPlugin from '@danielx/civet/vite';

export default defineConfig({
  base: './',
  plugins: [
    civetPlugin({
      ts: 'preserve',
    }),
    solidPlugin(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        format: 'es',
        // Enable detailed output
        verbose: true,
      },
      // Log the build steps more explicitly
      onwarn(warning, warn) {
        // Log all warnings
        console.warn('Rollup Warning: ', warning);
        warn(warning);
      },
    },
  },
  test: {
    environment: 'node',
    include: 'test/*.test.civet',
  },
  assetsInclude: [
    '**/*.txt'
  ],
});
