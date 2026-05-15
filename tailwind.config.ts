import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        amiri: ['Amiri', 'serif'],
      },
      boxShadow: {
        glow: '0 30px 80px rgba(80, 125, 195, 0.08)',
      },
      colors: {
        surface: '#F8F9FB',
        surfaceDark: '#0D1118',
        gold: '#D4B383',
        navy: '#0B1724',
      },
    },
  },
  plugins: [],
};

export default config;
