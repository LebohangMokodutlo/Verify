import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

import requireTransform from 'vite-plugin-require-transform';
import vue from '@vitejs/plugin-vue';

const PAGE_TITLE = 'AfriGIS - Identity Config'; // EDIT THIS

const htmlPlugin = () => ({
  name: 'html-transform',
  transformIndexHtml(html) {
    return html.replace(
      /<title>(.*?)<\/title>/,
      `<title>${PAGE_TITLE}</title>`,
    );
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  build: {
    minify: true,
  },
  plugins: [
    vue({
      template: { transformAssetUrls },
      defineModel: true,
    }),
    vuetify({
      autoImport: true,
    }),
    htmlPlugin(),

    requireTransform({
      fileRegex: /.js$/,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 8080,
    // https: true,
  },
});
