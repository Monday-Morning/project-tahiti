import React from 'react';
import Link from 'next/link';

import makeStyles from '@mui/styles/makeStyles';

const NewTabLink = ({ to, children, className }) => {
  const classes = useStyles();

  return (
    <Link
      passHref
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
