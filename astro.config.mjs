import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://kistler-it.ch',
  integrations: [icon()],
});
