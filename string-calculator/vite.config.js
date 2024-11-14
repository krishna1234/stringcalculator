import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // for setting up test with jest
    test: {
        global: true,
        environment: "jsdom",
        setupFiles: "./src/setupTests.js",
    },
});
