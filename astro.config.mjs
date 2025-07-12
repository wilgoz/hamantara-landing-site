// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://hamantara.com",
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes("/thank-you"),
    }),
  ],
});
