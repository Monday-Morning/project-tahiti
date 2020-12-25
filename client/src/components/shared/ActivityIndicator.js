import React from 'react';

// libraries
import { makeStyles } from '@material-ui/core';
import logo from '../../assets/images/MMLogo.png';

function ActivityIndicator() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <img src={logo} alt='MM Logo' className={classes.logo} />
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
  },
}));
