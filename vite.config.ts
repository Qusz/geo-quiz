import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      components: fileURLToPath(new URL('./src/components', import.meta.url)),
      composables: fileURLToPath(new URL('./src/composables', import.meta.url)),
      views: fileURLToPath(new URL('./src/views', import.meta.url)),
      assets: fileURLToPath(new URL('./src/assets', import.meta.url)),
      types: fileURLToPath(new URL('./src/types', import.meta.url)),
      utils: fileURLToPath(new URL('./src/utils', import.meta.url)),
      stores: fileURLToPath(new URL('./src/stores', import.meta.url)),
      router: fileURLToPath(new URL('./src/router', import.meta.url))
    }
  },
  css: {
    postcss: {
      plugins: [autoprefixer()]
    },
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use 'sass:math';
          @import 'assets/scss/abstracts/variables';
          @import 'assets/scss/abstracts/functions';
          @import 'assets/scss/abstracts/mixins';
          @import 'assets/scss/base/fonts';
        `
      }
    }
  },
  build: {
    minify: true,
    manifest: true,
    target: 'es2015'
  }
});
