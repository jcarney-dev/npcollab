import { defineConfig } from 'astro/config';

export default defineConfig({
  base: '/npcollab',
  trailingSlash: 'always',
  build: {
    assets: 'assets'
  }
});
