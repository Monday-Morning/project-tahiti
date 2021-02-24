import React from 'react';

// libararies
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

//components
import PhotoCarousel from '../widgets/PhotoCarousel';

// Placeholder
import { CAROUSEL } from '../../assets/placeholder/guide';

const Issues = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.textWrapper}>
        <Typography variant='h1' className={classes.text}>
          Print Issues
        </Typography>
      </div>
      <div>
        <PhotoCarousel IMAGE={CAROUSEL} navigator = "2020-21" />
      </div>
    </div>
  );
};

export default Issues;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.secondary.main,
    padding: '24px 0px',
    [theme.breakpoints.down('xs')]: {
      padding: '12px 0px',
    },
    marginTop: '2rem',
  },

  textWrapper: {
    display: 'flex',
    direction: 'row',
    justifyContent: 'center',
  },
  text: {
    color: theme.palette.common.white,
    alignSelf: 'center',
    textWrapper: {
      display: 'flex',
      direction: 'row',
      justifyContent: 'center',
    },
    text: {
      color: theme.palette.common.white,
      alignSelf: 'center',
    },
  }));
