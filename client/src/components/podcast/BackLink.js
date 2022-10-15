import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

// Libraries
import { Button } from '@mui/material';
import { ChevronLeft } from 'react-feather';

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
        <Button className={classes.backButton}>
          <ChevronLeft className={classes.backIcon} />
          <div>Back to {backTo}</div>
        </Button>
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
  backButton: {
    textTransform: 'unset',
    fontFamily: 'Source Sans Pro',
    fontSize: '1.25rem',
    lineHeight: '1.25rem',
    padding: '5px',
    fontWeight: '400',
    color: theme.palette.secondary.neutral80,
  },
  backIcon: {
    marginRight: '1rem',
  },
}));
