import React from 'react';

// Libraries
import { makeStyles } from '@material-ui/core';

// Components
import ArticleCard from './ArticleCard';

function ArticleCardStack() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {[0, 1, 2].map((val) => (
        <ArticleCard key={val} />
      ))}
    </div>
  );
}

export default ArticleCardStack;

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',

    [theme.breakpoints.down('md')]: {
      justifyContent: 'flex-start',
    },
  },
}));
