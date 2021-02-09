import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
// import theme from '../../config/themes/light';

const SubCategories = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Button className={classes.button}>
        <span className={classes.label}> {props.text} </span>
      </Button>
    </div>
  );
};

export default SubCategories;

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'inline',
  },

  button: {
    textAlign: 'center',
    backgroundColor: theme.palette.primary.blue10,
    borderRadius: '4px',
    margin: '8px 8px 0px 0px',
    padding: '12px 16px',
    [theme.breakpoints.down('sm')]: {
      padding: '3px 8px',
    },
  },

  label: {
    textTransform: 'capitalize',
    fontFamily: 'IBM Plex sans',
    fontSize: '22px',
    fontWeight: '600',
    lineHeight: '1.5rem',
    color: theme.palette.secondary.main,
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
      lineHeight: '20px',
    },
  },
}));
