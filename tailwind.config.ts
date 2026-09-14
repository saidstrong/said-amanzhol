import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0d0b0c",
        paper: "#f1ece7",
        muted: "#9d9497",
        burgundy: "#6f1f2b",
        line: "#2b2527"
      },
      fontFamily: {
        sans: ["var(--font-geist)", "Arial", "sans-serif"]
      },
      letterSpacing: {
        tightish: "-0.04em"
      }
    }
  },
  plugins: []
};

export default config;
