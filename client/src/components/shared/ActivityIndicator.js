import React, { useEffect, useState } from 'react';

// libraries
import { makeStyles, Typography } from '@material-ui/core';
import logo from '../../assets/images/MMLogo.png';

function ActivityIndicator() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div>
        <img src={logo} alt='MM Logo' className={animate ? classes.logo : ''} />
        <Typography variant='h1' className={classes.text}>
          Monday Morning
        </Typography>
      </div>
    </div>
  );
}

export default ActivityIndicator;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'grid',
    width: '100vw',
    height: '100vh',
    alignItems: 'center',
    justifyItems: 'center',
  },
  logo: {
    width: '300px',
    height: '300px',
    transform: 'rotate(360deg)',
    transition: theme.transitions.create('transform', {
      duration: '3s',
    }),
  },
  text: {
    marginTop: '1rem',
    textAlign: 'center',
    fontSize: '2rem',
    lineHeight: '3rem',
  },
}));
