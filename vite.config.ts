import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import Unfonts from "unplugin-fonts/vite";

export default defineConfig({
    plugins: [
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
