import React from 'react';

// libraries
import { makeStyles, Typography } from '@material-ui/core';
import logo from '../../assets/images/logo_mm.png';

function ActivityIndicator({ size }) {
  const classes = useStyles(size);
  return (
    <div className={classes.wrapper}>
      <div className={classes.subWrapper}>
        <img src={logo} alt='MM Logo' className={classes.logo} />
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
    width: '100vw',
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
