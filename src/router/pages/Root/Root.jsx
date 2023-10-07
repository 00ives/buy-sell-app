import { Outlet } from 'react-router-dom';
import { NavBar } from '../../../components/NavBar';
import { Box, Container } from '@mui/material';
// import { useStyles } from './styles';

export const Root = () => {
  // const classes = useStyles();
  return (
    <div>
      <NavBar />
      root page
      <Container>
        <Box>Welcome to Shma-Shmiji</Box>
      </Container>
      <Outlet />
    </div>
  );
};
