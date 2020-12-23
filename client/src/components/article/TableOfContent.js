import React from 'react';

//libraries
import { Link } from 'react-router-dom';
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
                <Link to={index.link} className={classes.indexLink}>
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
  },
  indexList: {
    fontSize: '1.375rem',
    lineHeight: '1.75rem',
    fontWeight: '400',
  },
  indexLink: {
    color: 'unset',
  },
}));
