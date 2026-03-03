import { defineConfig } from 'astro/config';

export default defineConfig({
  // When deploying to a cPanel subfolder e.g. public_html/npcollab
  // Change 'npcollab' to match your exact subfolder name
  base: '/npcollab',
  trailingSlash: 'always',
  build: {
    assets: 'assets'
  }
});
