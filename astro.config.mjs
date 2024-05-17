import { defineConfig } from 'astro/config';
import db from "@astrojs/db";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [db(), tailwind(), svelte()],
  output: "server",
  adapter: vercel(),
  experimental: {
    actions: true
  }
});