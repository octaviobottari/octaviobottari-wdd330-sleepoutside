import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  publicDir: "public",

  build: {
    outDir: "../dist",
    emptyOutDir: true,
    copyPublicDir: true,
    assetsDir: "assets",

    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        cart: resolve(__dirname, "src/cart/index.html"),
        checkout: resolve(__dirname, "src/checkout/index.html"),
        product: resolve(__dirname, "src/product_pages/index.html"),
      },

      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split(".");
          const ext = info[info.length - 1];
          if (["json", "ico", "svg"].includes(ext)) {
            return `assets/[name].[ext]`;
          }
          return `assets/[name]-[hash].[ext]`;
        },
      },
    },
  },

  server: {
    port: 5173,
  },
});
