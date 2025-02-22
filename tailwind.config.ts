import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ['var(--font-noto)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: {
          300: "#333E66",
          dark: "#333E66",
        },
        green: {
          300: "#339989",
        },
        red: {
          300: "#f87171",
        },
        gray: {
          300: "#d1d5db",
        },
      },
      safelist: ["bg-green-300", "bg-red-300", "bg-gray-300"],
    },
  },
  plugins: [],
} satisfies Config;
