import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@text": "../../components/text",
      "@shared": "../../components/shared/",
    },
  },
  plugins: [vue()],
});
