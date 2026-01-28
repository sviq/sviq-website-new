import type { Config } from "tailwindcss";

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#463DEB',
        'primary-light': '#6A63F2',
        'primary-dark': '#2F27B8',
        navyBlue: '#0D063A',
        softCyan: '#DBEBEC',
        primaryGreen: '#29B473',
        primaryBlack: '#002F32',
      },
    },
  },
  plugins: [],
} satisfies Config;
