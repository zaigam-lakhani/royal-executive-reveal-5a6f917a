// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Force Nitro on with the Vercel preset for self-hosted builds (e.g. on Vercel CI).
// Inside a Lovable build, the Cloudflare preset is still forced — this override only
// applies when building outside the Lovable sandbox.
export default defineConfig({
  nitro: { preset: "vercel" },
});
