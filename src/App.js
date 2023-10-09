import { RouterProvider } from 'react-router-dom';
import { router } from './router/components/router';
import { Box, Button, ThemeProvider, Typography } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { theme } from './theme/theme';
import { Root } from './router/pages/Root/Root';

function App() {
  return (
    <div style={{ backgroundColor: '#94c4c1', height: '100vh' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div>
          <RouterProvider router={router} />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
