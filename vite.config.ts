import { defineConfig } from "vite";
import { ViteAliases } from "vite-aliases";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: "src/github-search-app.ts",
            formats: ["es"],
        },
        rollupOptions: {
            external: /^lit/,
        },
    },
    plugins: [ViteAliases()],
});
