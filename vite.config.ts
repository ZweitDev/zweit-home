import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import Unfonts from "unplugin-fonts/vite";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
    plugins: [
        cloudflare({ viteEnvironment: { name: "ssr" } }),
        tailwindcss(),
        reactRouter(),
        tsconfigPaths(),
        Unfonts({
            custom: {
                families: [
                    {
                        name: "Geist",
                        src: "./app/fonts/geist/*.woff2",
                    },
                ],
            },
        }),
    ],
});
