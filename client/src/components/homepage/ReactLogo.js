import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

function ReactLogo() {
  const classes = useStyles();

  return (
    <div className={classes.screen}>
      <h1 className={classes.h1}>Welcome to React Template</h1>
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
  h1: {
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.background.paper,
  },
}));
