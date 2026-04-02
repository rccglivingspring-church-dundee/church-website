import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        church: {
          blue: "#1A3A6B",
          "blue-light": "#2A5298",
          green: "#2E7D4F",
          "green-light": "#3DAA6A",
          white: "#FFFFFF",
          surface: "#F0F4F8",
          text: "#0F1E35",
          muted: "#6B7280",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;