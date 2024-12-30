import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/auth": {
        target: "https://dummyjson.com", // Proxy ke dummyjson.com
        changeOrigin: true, // Ubah origin agar sesuai dengan target
        rewrite: (path) => path.replace(/^\/auth/, ""), // Hilangkan prefix "/auth"
      },
    },
  },
});
