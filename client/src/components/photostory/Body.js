import React from 'react';

import makeStyles from '@mui/styles/makeStyles';
import { Typography } from '@mui/material';

// Components
import PhotoCarousel from '../widgets/PhotoCarousel';
import Disclaimer from '../article/Disclaimer';
import ArticleTags from '../article/Tags';

// Placeholder
import { PHOTOSTORY } from '../../assets/placeholder/photostory';

const Body = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.carouselWrapper}>
        <div>
          <PhotoCarousel IMAGE={PHOTOSTORY.image} />
        </div>
        <div className={classes.textWrapper}>
          <Typography variant='body1' className={classes.text}>
            {PHOTOSTORY.carousel}
          </Typography>
        </div>
      </div>
      <div className={classes.wrapper}>
        <Disclaimer />
        <ArticleTags tags={PHOTOSTORY.tags} />
      </div>
    </div>
  );
};

export default Body;

const useStyles = makeStyles((theme) => ({
  carouselWrapper: {
    backgroundColor: theme.palette.secondary.main,
    padding: '24px 0px 48px 0px',
    [theme.breakpoints.down('sm')]: {
      padding: '12px 0px',
    },
  },
  textWrapper: {
    marginTop: '12px',
    display: 'flex',
    direction: 'row',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: '0px 24px',
      justifyContent: 'flex-start',
    },
  },
  text: {
    color: theme.palette.common.white,
    alignSelf: 'center',
  },
  wrapper: {
    maxWidth: '1280px',
    margin: '60px auto 0px auto',
    [theme.breakpoints.down('sm')]: {
      margin: '40px 16px 0px 24px',
    },
  },
}));
