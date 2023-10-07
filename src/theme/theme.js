import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { colors } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#edada3',
    },
    secondary: {
      main: '#f9c7be',
    },
    success: {
      main: '#42899b',
    },
    info: {
      main: '#94c4c1',
    },
    warning: {
      main: '#28405c',
    },
    error: {
      main: '#ce6a6c',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10, // this will change the style for all buttons
        },
        outlinedPrimary: {
          borderRadius: 20,
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
