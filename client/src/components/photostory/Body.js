import React from 'react';

// libraries
import makeStyles from '@mui/styles/makeStyles';
import { Container, Typography } from '@mui/material';

// Components
import PhotoCarousel from '../widgets/PhotoCarousel';
import Disclaimer from '../article/Disclaimer';
import ArticleTags from '../article/Tags';

// Placeholder
import { PHOTOSTORY } from '../../assets/placeholder/photostory';

const Body = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.carouselWrapper}>
        <PhotoCarousel IMAGE={PHOTOSTORY.image} Text={PHOTOSTORY.carousel} />
      </div>
      <Container className={classes.container}>
        <Disclaimer />
        <ArticleTags tags={PHOTOSTORY.tags} />
        <hr />
      </Container>
    </>
  );
};

export default Body;

const useStyles = makeStyles((theme) => ({
  carouselWrapper: {
    backgroundColor: theme.palette.secondary.main,
    padding: '16px 0px 36px 0px',
    [theme.breakpoints.down('sm')]: {
      padding: '12px 0px',
    },
  },
  wrapper: {
    maxWidth: '1280px',
    margin: '60px auto 0px auto',
    [theme.breakpoints.down('sm')]: {
      margin: '40px 16px 0px 24px',
    },
  },
}));
