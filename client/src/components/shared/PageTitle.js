import React from 'react';
import { Container, Typography } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

const Title = (props) => {
  const classes = useStyles();
  return (
    <Typography variant='h1' className={classes.heading}>
      {props.title}
    </Typography>
  );
};

const useStyles = makeStyles((theme) => ({
  heading: {
    color: theme.palette.primary.blue60,
    width: '100%',
    marginTop: '2.25rem',
  },
}));

export default Title;
