import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: "var(--font-roboto)",
      },
      colors: {
        "white-opacity-02": "rgba(255, 255, 255, 0.02)",
        "white-opacity-05": "rgba(255, 255, 255, 0.05)",
        picasso: "var(--picasso)",
        "picasso-opacity-70": "rgba(var(--picasso-rgb), 0.7)",
        "picasso-opacity-50": "rgba(var(--picasso-rgb), 0.5)",
        "picasso-opacity-06": "rgba(var(--picasso-rgb), 0.06)",
        "deep-catch": "var(--deep-catch)",
        peppermint: "var(--peppermint)",
        "peppermint-opacity-80": "rgba(var(--peppermint-rgb), 0.8)",
        "peppermint-opacity-10": "rgba(var(--peppermint-rgb), 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
