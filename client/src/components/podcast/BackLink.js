import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

// Libraries
import { Typography } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

const BackLink = ({ backTo }) => {
  const classes = useStyles();
  const { pathname } = useRouter();
  const category = pathname.split('/')[1];
  return (
    <div className={classes.wrapper}>
      <Link
        passHref
        href={`/${backTo?.toLowerCase()}`}
        className={classes.link}
      >
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
    cursor: 'pointer',
    color: theme.palette.secondary.neutral70,
  },
  text: {
    marginLeft: '1rem',
  },
}));
