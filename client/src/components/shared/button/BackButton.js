import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { ChevronLeft } from 'react-feather';
import { Link } from 'react-router-dom';
import theme from '../../../config/themes/light';

function BackButton({ path, goTo }) {
  const classes = useStyles(theme);
  return (
    <div className={classes.root}>
      <Link to={`${path}`} className={classes.link}>
        <Button className={classes.backButton}>
          <ChevronLeft size={24} className={classes.backIcon} />
          <div>Back to {goTo}</div>
        </Button>
      </Link>
    </div>
  );
}

export default BackButton;
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '3rem',
  },

  backButton: {
    textTransform: 'unset',
    fontFamily: 'Source Sans Pro',
    fontSize: '1.25rem',
    lineHeight: '1.25rem',
    padding: '5px',
    // marginTop: '47.5px',
    fontWeight: '400',
    color: theme.palette.secondary.neutral80,
    '& div': {
      [theme.breakpoints.down("xs")]: {
        display: 'none',
      },
    },
  },
  link: {
    textDecoration: 'none',
  },
  backIcon: {
    marginRight: '21px',

  },
}));
