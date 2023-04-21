import { createTheme } from '@mui/material';
const BREAKPOINTS = require('../config/breakpoints.js');

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    desktop: true;
    fullhd: true;
  }
}

const THEME = createTheme({
  typography: {
    fontFamily: `"Poppins", sans-serif`,
    fontWeightLight: 200,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  breakpoints: {
    values: {
      mobile: 0,
      desktop: BREAKPOINTS.LG.MIN,
      fullhd: BREAKPOINTS.FULLHD.MIN,
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      light: '#fef3c7',
      main: '#f59e0b',
      dark: '#d97706',
    },
    secondary: {
      light: '#fafafa',
      main: '#f4f4f5',
      dark: '#18181b',
    },
  },
});

export default THEME;
