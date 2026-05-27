// @lovable.dev/vite-tanstack-config can include the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Vercel serves the prerendered static output from dist/client.
// The server entry is still used at build time while TanStack prerenders pages.
export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: true,
      failOnError: true,
    },
    pages: [
      { path: "/" },
      { path: "/about" },
      { path: "/services" },
      { path: "/gallery" },
      { path: "/contact" },
      { path: "/sitemap.xml" },
    ],
    sitemap: {
      enabled: false,
    },
  },
});
