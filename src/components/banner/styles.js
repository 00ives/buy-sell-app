import { Box, Button } from '@mui/material';
import styled from 'styled-components';

export const StyledBox = styled(Box)({
  backgroundColor: '#bfddde',
  width: '100vw',
  height: '525px',
  padding: 20,
});

export const StyledFocalPoint = styled(Box)(() => ({
  // backgroundColor: theme.palette.primary.main,
  backgroundColor: 'blue',
  width: '30vw',
  height: '170px',
  borderRadius: '10px',
}));
