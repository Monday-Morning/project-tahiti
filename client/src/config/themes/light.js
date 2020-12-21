import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    value: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    type: 'light',
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
    primary: {
      main: '#006DCC',
      blue90: '#00101F',
      blue80: '#002647',
      blue70: '#003C70',
      blue60: '#005299',
      blue50: '#006DCC',
      blue40: '#4091D9',
      blue30: '#73AFE3',
      blue20: '#A6CCED',
      blue10: '#D9E9F7',
    },
    secondary: {
      main: '#222222',
      neutral90: '#424242',
      neutral80: '#6E6E6E',
      neutral70: '#999999',
      neutral60: '#C4C4C4',
      neutral50: '#DADADA',
      neutral40: '#EDEDED',
      neutral30: '#F1F1F1',
      neutral20: '#F6F6F6',
    },
    accent: {
      red: '#D7242E',
      orange: '#EC642A',
      yellow: '#F8AA11',
      green: '#1F9943',
      purple: '#771CD1',
      brown: '#9B4D20',
      pink: '#BD0FA1',
      indigo: '#0F269E',
      squiggles: '#F6D982',
      squigglesButton: '#E15B62',
    },
    grey: {
      100: '#F2F2F2',
      200: '#D8D8D8',
      300: '#9F9F9F',
      400: '#737273',
      500: '#787678',
      600: '#5E5D5E',
      700: '#464546',
      800: '#2E2D2E',
      900: '#141414',
    },
    text: {
      primary: 'rgba(0, 0, 0, 1)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.4)',
      hint: 'rgba(0, 0, 0, 0.4)',
    },
    divider: 'rgba(0, 0, 0, 0.2)',
    background: {
      default: '#FFF',
      paper: '#FAFAFA',
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.4)',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.08)',
      seletedOpacity: 0.08,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledOpacity: 0.12,
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      activatedOpacity: 0.12,
    },
  },
  shadows: [
    '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 3px rgba(0, 0, 0, 0.12)',
    '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 8px 16px rgba(0, 0, 0, 0.12)',
  ],
  typography: {
    // Global Font Styles
    fontFamily: [
      'IBM Plex Sans',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    // Individual Font Styles for each element
    h1: {
      fontFamily: '"IBM Plex Sans" ,"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: '3rem',
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
        lineHeight: '3rem',
      },
    },
    h2: {
      fontFamily: '"IBM Plex Sans" ,"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: '2rem',
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
        lineHeight: '3rem',
      },
    },
    h3: {
      fontFamily: '"IBM Plex Sans" ,"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
      fontSize: '1.375rem',
      lineHeight: '1.75rem',
      '@media (max-width:600px)': {
        fontSize: '1.125rem',
        lineHeight: '1.5rem',
      },
    },
    // Regular Body
    body1: {
      fontFamily: '"IBM Plex Sans" ,"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
      '@media (max-width:600px)': {
        fontSize: '1rem',
        lineHeight: '1.5rem',
      },
    },
    // MetaData
    body2: {
      fontFamily: '"IBM Plex Sans" ,"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: '0.75rem',
      lineHeight: '1rem',
    },
  },
  zIndex: {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  spacing: [0, 4, 8, 16, 32, 64],
});

export default theme;
