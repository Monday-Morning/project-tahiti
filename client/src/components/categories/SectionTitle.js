import React from 'react';
import Link from 'next/link';

// Libraries
import { Container } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Element } from 'react-scroll';

function Title({ heading, link, path, container }) {
  const classes = useStyles();
  const title = (
    <Element className={classes.root} name={link}>
      <div className={classes.head}>{heading}</div>
      <div className={classes.line} />
      <Link passHref href={path} style={{ textDecoration: 'none' }}>
        <div className={classes.seeAll}>See All</div>
      </Link>
    </Element>
  );

  return container ? <Container>{title}</Container> : title;
}

export default Title;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '2rem 0',
    lineHeight: '2rem',
  },
  head: {
    fontSize: '2rem',
    whiteSpace: 'nowrap',
    fontWeight: '600',
    fontFamily: 'Source Sans Pro',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
    },
  },
  line: {
    [theme.breakpoints.up('sm')]: {
      borderBottom: '1px solid #000000',
      borderColor: theme.palette.common.black,
      width: '-webkit-fill-available',
      marginInline: '1rem',
    },
  },
  seeAll: {
    whiteSpace: 'nowrap',
    fontSize: '1.25rem',
    fontWeight: '400',
    color: theme.palette.secondary.main,
    fontFamily: 'Source Sans Pro',
    borderBottom: '1px solid #000000',
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
    },
  },
}));
