import { Container, Grid, Typography } from '@mui/material';
import { Banner } from '../../components/banner/Banner';
import surftheline from './images/surftheline.jpg';
import styled from 'styled-components';

const TitleTypography = styled(Typography)(() => ({
  // backgroundColor: theme.palette.primary.main,
  width: '30vw',
  height: '170px',
  borderRadius: '10px',
}));

export const About = () => {
  const cardContent =
    "Riding a surf wave is an ecstatic dance with the ocean, where the rush of salt air and the rhythmic pulse of the waves converge into an exhilarating symphony. There's an unparalleled joy in harnessing the energy of the sea, feeling the board beneath you as it glides effortlessly, and losing yourself in the timeless bliss of riding a perfect wave.";
  const imagePosition = { objectPosition: '50% 0%' };
  return (
    <>
      <Grid container rowSpacing={4}>
        <Grid item md={12}>
          <Typography style={{ padding: 8, paddingLeft: 50 }} variant='h4'>
            About
          </Typography>
        </Grid>
        <Grid item md={12}>
          <Banner
            componentType='img'
            image={surftheline}
            alt='surfing the line'
            cardContent={cardContent}
            imagePosition={imagePosition}
          />
        </Grid>
      </Grid>
      <Container disableGutters={true}></Container>
    </>
  );
};
