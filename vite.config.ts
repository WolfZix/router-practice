import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter()],
  base: "/react-router-vite-tailwind-starter/",
  resolve: {
    tsconfigPaths: true,
  },
});
