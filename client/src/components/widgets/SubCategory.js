import React from 'react';

// Libraries
import { ButtonBase } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

const SubCategories = ({ text, isRed, onclick }) => {
  const classes = useStyles({ isRed });

  return (
    <div className={classes.container}>
      <ButtonBase type='button' className={classes.button} onClick={onclick}>
        <span className={classes.label}> {text} </span>
      </ButtonBase>
    </div>
  );
};

export default SubCategories;

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'inline',
    textDecoration: 'none',
  },

  button: {
    textAlign: 'center',
    backgroundColor: ({ isRed }) =>
      isRed ? 'rgba(215, 36, 46, 0.6)' : theme.palette.primary.blue10,
    borderRadius: '4px',
    margin: '8px 8px 0px 0px',
    padding: '12px 16px',
    [theme.breakpoints.down('md')]: {
      padding: '3px 8px',
    },
  },

  label: {
    textTransform: 'capitalize',
    fontFamily: 'IBM Plex sans',
    fontSize: '22px',
    fontWeight: '600',
    lineHeight: '1.5rem',
    textDecoration: 'none',
    color: ({ isRed }) =>
      isRed ? theme.palette.secondary.neutral20 : theme.palette.secondary.main,
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
      lineHeight: '20px',
    },
  },
}));
