import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { colors } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#075061', // page will be #bfddde
    },
    secondary: {
      main: '#83c8d1',
    },
    success: {
      main: '#228693',
    },
    info: {
      main: '#94c4c1',
    },
    warning: {
      main: '#042434',
    },
    error: {
      main: '#f9c7be',
    },
    primary2: {
      main: '#edada3',
    },
    secondary2: {
      main: '#f9c7be',
    },
    success2: {
      main: '#42899b',
    },
    info2: {
      main: '#94c4c1',
    },
    warning2: {
      main: '#28405c',
    },
    error2: {
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

// export default responsiveFontSizes(theme);
