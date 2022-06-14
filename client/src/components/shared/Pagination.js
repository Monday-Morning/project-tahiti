import { colors, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';

const Pagination = () => {
  const classes = useStyles();
  return (
    <Typography variant='subtitle2' className={classes.text}>
      1 2 3 4 5
    </Typography>
  );
};

export default Pagination;

const useStyles = makeStyles((theme) => ({
  text: {
    marginTop: '4rem',
    textAlign: 'center',
    marginBottom: '4rem',
    fontSize: '15px',
    fontWeight: '400',
    color: theme.palette.secondary.neutral70,
    letterSpacing: '3px',
  },
}));
