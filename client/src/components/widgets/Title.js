import React from 'react';

import makeStyles from '@mui/styles/makeStyles';
import { Element } from 'react-scroll';

// theme
import theme from '../../config/themes/light';

function Title({ heading, link }) {
  const classes = useStyles(theme);
  return (
    <Element className={classes.root} name={link}>
      <div className={classes.head}>{heading}</div>
      <div className={classes.line}></div>
      <div className={classes.seeAll}>See All</div>
    </Element>
  );
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
    [theme.breakpoints.down('md')]: {
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
    },
  },

  line: {
    [theme.breakpoints.up('sm')]: {
      borderBottom: '1px solid ',
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
    textDecoration: 'underline',
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
    },
  },
}));
