import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
// import theme from '../../config/themes/light';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'inline',
    // marginBottom: '10rem',

  },

  button: {
    textTransform: 'unset',
    alignItems: 'center',
    height: '26px',
    background: '#D9E9F7',
    borderRadius: '4px',
    marginRight: '0.4rem',
    marginTop: '0.4rem',
    },

  label: {
    textTransform: 'unset',
    fontFamily: 'IBM Plex Sans',
    fontSize: '14px',
    color: '#222222',
  },
}));

function SubCategories(props) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Button className={classes.button}>
        <span className={classes.label}> {props.text} </span>
      </Button>
    </div>
  );
}

export default SubCategories;
