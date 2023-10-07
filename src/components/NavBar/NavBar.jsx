import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
// import { useStyles } from './styles';

export const NavBar = () => {
  // const classes = useStyles();
  const pages = ['Home', 'buy-sell', 'Community', 'Forum', 'Not sure yet'];
  const homePageVerification = () => {};
  const testData = [{ id: 1 }, { id: 2 }];

  return (
    <Box>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6'>Shma-shmiji</Typography>
          {pages.map((page) => (
            <Button key={page}>
              <Link
                style={{ textDecoration: 'none', color: 'white' }}
                to={page === 'Home' ? '/' : `/${page}`}
              >
                <Typography align='center'>{page}</Typography>
              </Link>
            </Button>
          ))}

          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
