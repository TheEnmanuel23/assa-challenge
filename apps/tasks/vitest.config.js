import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    global: true,
    environment: "jsdom",
    setupFiles: "./setupTests.ts",
    coverage: {
      include: ["src/**/*.{js,jsx,ts,tsx}"], // specify files to include
      exclude: ["src/generated/**/*.ts"], // specify files to exclude
      reporter: ["text", "html"], // customize reporters. don't forget to include 'html' if you use vitest-ui
    },
  },
});
