import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
} from '@mui/material';
import { StyledBox } from './styles';
// import { StyledFocalPoint } from './styles';
import styled from 'styled-components';

export const StyledFocalPoint = styled(Box)(() => ({
  // backgroundColor: theme.palette.primary.main,
  backgroundColor: '#228693',
  width: '30vw',
  height: '170px',
  borderRadius: '10px',
}));

export const Banner = ({
  componentType,
  image,
  alt,
  cardContent,
  imagePosition,
}) => {
  // const classes = useStyles();
  return (
    <Container
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // height: '100vh',
      }}
    >
      <StyledBox>
        <Grid container spacing='40px'>
          <Grid item md={1} />
          <Grid item md={5}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component={componentType}
                  alt={alt}
                  height='300'
                  image={image}
                  // style={{ objectPosition: '50% 20%' }}
                  style={imagePosition}
                />
                {/* img src:https://www.pexels.com/photo/photo-of-person-surfing-on-the-sea-2959611/ */}
                <CardContent>{cardContent}</CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={2}>
            <StyledFocalPoint>
              Dive into the waves with the sleek and nimble design of fish-style
              surfboards. Inspired by the agility of ocean-dwelling fish, this
              board features a wider nose for effortless paddling and a
              swallowtail for unparalleled maneuverability. Crafted with
              precision and innovation, fish-style surfboards promise an
              exhilarating ride that effortlessly carves through the surf with
              style and grace.
            </StyledFocalPoint>
          </Grid>
        </Grid>
        {/* <StyledBox></StyledBox> */}
      </StyledBox>
    </Container>
  );
};
