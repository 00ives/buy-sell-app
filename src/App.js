import { RouterProvider } from 'react-router-dom';
import { router } from './router/components/router';
// import { ThemeProvider } from '@mui/material/styles';
// import { theme } from './theme/theme';

function App() {
  return (
    // <ThemeProvider theme={theme}>
    <div>
      <RouterProvider router={router} />
      <h1>hi</h1>
    </div>
    // </ThemeProvider>
  );
}

export default App;
