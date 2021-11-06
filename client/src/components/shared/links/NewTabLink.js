import React from 'react';
import Link from 'next/link';

// Libraries
import { makeStyles } from '@material-ui/core';

const NewTabLink = ({ to, children, className }) => {
  const classes = useStyles();

  return (
    <Link
      href={to}
      target='_blank'
      rel='noopener noreferrer'
      className={`${classes.link} ${className}`}
    >
      <span className={`${classes.link} ${className}`}>{children}</span>
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
