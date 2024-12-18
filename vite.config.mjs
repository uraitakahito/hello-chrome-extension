// Vitest supports the same extensions for your configuration file as Vite does:
// .js, .mjs, .cjs, .ts, .cts, .mts.

import { resolve } from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        sidepanel: resolve(__dirname, 'src/sidepanel/sidepanel.html'),
        service_worker: resolve(__dirname, 'src/service_worker.js'),
      },
      output: {
        // https://rollupjs.org/configuration-options/#output-entryfilenames
        entryFileNames: ({ name }) => {
          if (name === 'service_worker') {
            return '[name].js';
          }
          return 'assets/[name].js';
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
});
