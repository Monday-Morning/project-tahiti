import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

function ReactLogo() {
  const classes = useStyles();

  return (
    <div className={classes.screen}>
      <Typography variant='h1'>IBM Plex Sans</Typography>
    </div>
  );
}

export default ReactLogo;

const useStyles = makeStyles((theme) => ({
  screen: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
}));
