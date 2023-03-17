import { defineConfig } from "vite";
import { ViteAliases } from "vite-aliases";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: "src/my-element.ts",
            formats: ["es"],
        },
        rollupOptions: {
            external: /^lit/,
        },
    },
    plugins: [ViteAliases()],
});
