import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import civetPlugin from '@danielx/civet/vite'

export default defineConfig({
  base: './',
  plugins: [
    civetPlugin({
      ts: "preserve",
      //typecheck: true,
    }),
    solidPlugin(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
  test: {
    environment: 'node',
    include: 'test/*.test.civet',
  },
  assetsInclude: [
    '**/*.txt'
  ],
})