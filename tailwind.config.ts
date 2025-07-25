import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorantGaramond: ["var(--font-cormorand-garamond", "serif"],
        poppins: ["var (--font-poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
