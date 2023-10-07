import { RouterProvider } from 'react-router-dom';
import { router } from './router/components/router';
import { Box, Button, ThemeProvider, Typography } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { theme } from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <h1>Shma-Shmiji(app component)</h1>
        <RouterProvider router={router} />
      </div>
      <Box sx={{ backgroundColor: '#f1f1f1' }}>
        <Typography variant='h4'>My Component Library</Typography>
        <Button variant='contained' color='primary'>
          Primary
        </Button>
        <Button variant='contained' color='secondary'>
          Secondary
        </Button>
        <Button variant='contained' color='success'>
          Success
        </Button>
        <Button variant='contained' color='warning'>
          Warning
        </Button>
        <Button variant='contained' color='info'>
          Info
        </Button>
        <Button variant='contained' color='error'>
          Error
        </Button>
        <Button variant='outlined' color='primary'>
          Outlined Primary theme
        </Button>
      </Box>
    </ThemeProvider>
  );
}

export default App;
