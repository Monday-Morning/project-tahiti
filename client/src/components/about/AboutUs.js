import React from 'react';
import Image from 'next/image';

import makeStyles from '@mui/styles/makeStyles';
import { Typography } from '@mui/material';

// images
import about from '../../assets/images/about/about1.png';

const AboutUs = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Image src={about} alt='About' className={classes.image} />
      <Typography variant='h1' className={classes.title1}>
        About Us
      </Typography>
      <Typography variant='h1' className={classes.title2}>
        ↓ About Us
      </Typography>
    </div>
  );
};

export default AboutUs;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: '1.5rem',
    position: 'relative',
    minHeight: '650px',
    [theme.breakpoints.down('sm')]: {
      minHeight: '250px',
      marginTop: '1rem',
    },
    '& > span': {
      minHeight: '650px',
      [theme.breakpoints.down('sm')]: {
        minHeight: '250px',
        marginTop: '1rem',
      },
    },
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    filter: 'brightness(50%)',
  },
  title1: {
    position: 'absolute',
    top: '80%',
    left: '5%',
    fontSize: '64px',
    color: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      visibility: 'hidden',
      display: 'none',
    },
  },
  title2: {
    visibility: 'hidden',
    display: 'none',
    color: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      visibility: 'visible',
      display: 'inherit',
      position: 'absolute',
      top: '70%',
      left: '5%',
      color: theme.palette.common.white,
    },
  },
}));
