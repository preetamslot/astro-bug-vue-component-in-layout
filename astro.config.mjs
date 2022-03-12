// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.
import astroImagePlugin from "astro-imagetools/plugin";
// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  // Enable the Vue renderer to support Vue components.
  vite: {
    plugins: [astroImagePlugin],
  },

  devOptions: {
    tailwindConfig: "./tailwind.config.js",
  },
  renderers: ["@astrojs/renderer-vue"],
});
