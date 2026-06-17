import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#fffdf8",
          100: "#fbf5e8",
          200: "#efe0c7"
        },
        charcoal: {
          800: "#262320",
          900: "#171513"
        },
        wood: {
          500: "#9b6438",
          600: "#7a4a28",
          700: "#57331f"
        },
        noble: {
          orange: "#ef5f3d",
          "orange-dark": "#d84b2d",
          ink: "#251f1b",
          mist: "#f7f4ef"
        },
        brass: {
          400: "#c99a4e",
          500: "#a87934"
        }
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Arial",
          "sans-serif"
        ]
      },
      boxShadow: {
        soft: "0 20px 80px rgba(38, 35, 32, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
