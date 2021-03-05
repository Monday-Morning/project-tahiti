import React from 'react';

// Library
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function RegularButton(props) {
  const classes = useStyles();
  const {
    text,
    loading,
    containerStyles,
    textStyles,
    disabled,
    onClick,
  } = props;

  // TODO: Change button styling when component disabled.

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${classes.container} ${containerStyles}`}
    >
      {loading ? (
        <Typography
          className={`${classes.buttonText} ${textStyles}`}
          variant='body1'
        >
          Loading...
        </Typography>
      ) : (
        <Typography
          className={`${classes.buttonText} ${textStyles}`}
          variant='body1'
        >
          {text}
        </Typography>
      )}
    </button>
  );
}

export default RegularButton;

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    padding: 7,
    backgroundColor: theme.palette.primary.blue50,
    display: 'flex',
    justifyContent: 'center',
    alignmentItems: 'center',
    borderRadius: 5,
    border: 0,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  buttonText: {
    color: theme.palette.common.white,
    fontSize: '18px',
    margin: 0,
    padding: 0,
  },
}));
