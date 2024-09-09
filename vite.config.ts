import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import civetPlugin from '@danielx/civet/vite'

export default defineConfig({
  base: './',
  plugins: [
    civetPlugin({
      ts: "preserve",
      // ensure civet files are transpiled to .js
      include: /\.civet$/,
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
