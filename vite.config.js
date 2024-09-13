import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// <https://vitejs.dev/config/>
export default defineConfig({
  plugins: [react()],
  base: "/zad-5-test/",
  build: {
    sourcemap: true,
  },
});
