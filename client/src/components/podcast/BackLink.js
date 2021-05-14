import React from 'react';

// Libraries
import { makeStyles, Typography } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';

const BackLink = ({ backTo }) => {
  const classes = useStyles();
  const location = useLocation();
  const category = location.pathname.split('/')[1];
  return (
    <div className={classes.wrapper}>
      <Link to={`/${category}`} className={classes.link}>
        <Typography variant='body1'>
          <i className='fas fa-chevron-left' />
          <span className={classes.text}>Back to {backTo}</span>
        </Typography>
      </Link>
    </div>
  );
};
export default BackLink;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: '2rem',
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.secondary.neutral70,
  },
  text: {
    marginLeft: '1rem',
  },
}));
