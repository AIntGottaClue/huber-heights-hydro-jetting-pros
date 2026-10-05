import { defineConfig } from 'astro/config';

// Real domain by default. The GitHub Pages workflow sets BASE=/huber-heights-hydro-jetting-pros for the preview.
export default defineConfig({
  site: 'https://huberheightshydrojetting.prosapp.site',
  base: process.env.BASE ?? '/',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
