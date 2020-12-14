import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#a6f6f1',
    },
    background: {
      paper: '#00587a',
      default: '#0f3057',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
});

theme = responsiveFontSizes(theme);

export default theme;
