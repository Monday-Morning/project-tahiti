import React from 'react';

// libraries
import { Link } from 'react-scroll';
import { makeStyles, Typography } from '@material-ui/core';

const TableOfContent = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Typography variant='h3'>Table of Content</Typography>
      <div>
        <ol>
          {props.index.map((index, key) => {
            return (
              <li key={key} className={classes.indexList}>
                <Link
                  to={index.link}
                  className={classes.indexLink}
                  smooth={true}
                  spy={true}
                  activeClass={classes.indexLinkActive}
                >
                  {index.title}
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default TableOfContent;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: '1rem',
    paddingLeft: '4rem',
    [theme.breakpoints.down('md')]: {
      marginTop: '2rem',
      paddingLeft: '1rem',
      paddingRight: '2rem',
    },
  },
  indexList: {
    fontSize: '1.375rem',
    lineHeight: '1.75rem',
    fontWeight: '400',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.125rem',
      lineHeight: '1.5rem',
    },
  },
  indexLink: {
    color: 'unset',
    cursor: 'pointer',
  },
  indexLinkActive: {
    color: theme.palette.primary.blue50,
    fontWeight: '600',
    textDecoration: 'underline',
  },
}));
