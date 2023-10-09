import { Box, Button, Typography } from '@mui/material';
import { NavBar } from '../../components/NavBar';

export const Components = () => {
  return (
    <div>
      <NavBar />
      <Box sx={{ backgroundColor: '#f1f1f1' }}>
        <Typography variant='h4'>My Component Library</Typography>
        <Typography variant='h5'>Primary Colors</Typography>
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
        <Typography variant='h5'>Test Additional Colors</Typography>
        <Button variant='contained' color='primary2'>
          Primary2
        </Button>
        <Button variant='contained' color='secondary2'>
          Secondary2
        </Button>
        <Button variant='contained' color='success2'>
          Success2
        </Button>
        <Button variant='contained' color='warning2'>
          Warning2
        </Button>
        <Button variant='contained' color='info2'>
          Info2
        </Button>
        <Button variant='contained' color='error2'>
          Erro2
        </Button>
        <Button variant='outlined' color='primary2'>
          Outlined Primary2 theme
        </Button>
      </Box>
    </div>
  );
};
