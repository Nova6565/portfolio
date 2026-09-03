import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F4EFE6",
        parchment: "#E8DFD2",
        linen: "#D6C4AD",
        taupe: "#A58F78",
        walnut: "#705441",
        espresso: "#241C16",
        ink: "#1D1916",
        brass: "#B08D57",
        olive: "#71725C",
        graphite: "#27302D",
        signal: "#2D6666"
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-manrope)", "sans-serif"]
      },
      boxShadow: {
        editorial: "0 24px 70px rgba(36, 28, 22, 0.16)",
        line: "inset 0 0 0 1px rgba(112, 84, 65, 0.18)"
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)"
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 1px 1px, rgba(36, 28, 22, 0.09) 1px, transparent 0)"
      }
    }
  },
  plugins: [typography]
};

export default config;
