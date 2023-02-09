import React from 'react';

import makeStyles from '@mui/styles/makeStyles';
import { Typography } from '@mui/material';

import Carousel from '../guide/Carousel';

const BigCarousel = ({ head, navigator, content }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.textWrapper}>
        <Typography variant='h1' className={classes.text}>
          {head}
        </Typography>
      </div>
      <Carousel content={content} />
    </div>
  );
};

export default BigCarousel;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: '2rem',
    backgroundColor: '#222222',
    padding: '24px 0px',
    [theme.breakpoints.down('sm')]: {
      padding: '12px 0px',
    },
  },
  textWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  text: {
    fontSize: '28px',
    color: theme.palette.common.white,
  },
}));
