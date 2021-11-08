import React from 'react';
import Image from 'next/image';

// libraries
import { makeStyles, Typography } from '@material-ui/core';

// Assets
import logo from '../../assets/images/logo_mm.png';

function ActivityIndicator({ size }) {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.subWrapper}>
        <Image
          src={logo}
          alt='MM Logo'
          className={classes.logo}
          placeholder='blur'
          width={`${size}px`}
          height={`${size}px`}
        />
        <Typography variant='h1' className={classes.text}>
          Monday Morning
        </Typography>
      </div>
    </div>
  );
}

export default ActivityIndicator;

const useStyles = makeStyles(() => ({
  wrapper: {
    width: '100%',
    height: '100vh',
    display: 'grid',
    alignItems: 'center',
    justifyItems: 'center',
  },
  subWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  logo: {
    width: '100px',
    height: '100px',
    animation: 'rotation 2s infinite linear',
  },
  text: {
    marginTop: '1rem',
    textAlign: 'center',
    fontSize: '2rem',
    lineHeight: '3rem',
  },
}));
