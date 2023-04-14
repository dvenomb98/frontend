const { fontFamily } = require('tailwindcss/defaultTheme');
const BREAKPOINTS = require('./src/config/breakpoints.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/config/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', ...fontFamily.sans],
    },
    fontSize: {
      small: '0.85rem',
      base: '1.1rem',
      h4: '1.25rem',
      h3: '1.5rem',
      h2: '1.875rem',
      h1: '2.25rem',
      subheader: '3rem',
      header: ['4rem', '1.1'],
    },
    fontWeight: {
      light: 200,
      normal: 400,
      medium: 500,
      bold: 700,
    },
    screens: {
      sm: { max: `${BREAKPOINTS.SM.MAX}px` },
      lg: `${BREAKPOINTS.LG.MIN}px`,
      fullhd: `${BREAKPOINTS.FULLHD.MIN}px`,
    },
    extend: {
      colors: {
        primary: {
          gold: '#fbbf24',
          black: '#111827',
          white: '#f5f5f4',
        },
        neutral: {
          gray: '#71717a',
        },
      },
      height: {
        banner: '600px',
      },
    },
  },
  plugins: [],
};
