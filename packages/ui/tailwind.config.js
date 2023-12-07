const sharedConfig = require("@repo/tailwind-config/tailwind.config.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...sharedConfig,
  content: ["./src/**/*.{ts,tsx}"],
};
