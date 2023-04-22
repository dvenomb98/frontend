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
    fontSize: 16,
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
    divider: '#6b7280',
    primary: {
      light: '#fef3c7',
      main: '#f59e0b',
      dark: '#d97706',
    },
    secondary: {
      light: '#f1f5f9',
      main: '#94a3b8',
      dark: '#475569',
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          '&:-webkit-autofill': {
            '-webkit-box-shadow': '0 0 0 100px #09090b inset',
            '-webkit-text-fill-color': '#fffff',
          },
        },
      },
    },
  },
});

export default THEME;
