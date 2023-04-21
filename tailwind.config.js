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
      subheader: ['2.8rem', '1.1'],
      header: ['3.25rem', '1.1'],
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
    colors: {
      primary: {
        gold: {
          light: '#fef3c7', // 100
          DEFAULT: '#f59e0b', // 400
          dark: '#d97706', // 500
        },
        red: {
          light: '#fca5a5', // 300
          DEFAULT: '#dc2626', // 600
          dark: '#b91c1c', // 700
        },
        green: {
          light: '#bbf7d0', // 200
          DEFAULT: '#22c55e', // 500
          dark: '#15803d', // 700
        },
        gray: '#6b7280', // 500
      },
      neutral: {
        light: '#f4f4f5', // 200
        DEFAULT: '#121212',
        dark: '#18181b', // 900
        ultradark: '#09090b', // 950
      },
    },
    extend: {
      height: {
        banner: '500px',
      },
    },
  },
  plugins: [],
};
