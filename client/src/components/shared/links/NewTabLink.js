import React from 'react';

// Libraries
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const NewTabLink = ({ to, children, className }) => {
  const classes = useStyles();

  return (
    <Link
      to={to}
      target='_blank'
      rel='noopener noreferrer'
      className={`${classes.link} ${className}`}
    >
      {children}
    </Link>
  );
};

export default NewTabLink;

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: theme.palette.common.black,
  },
}));
