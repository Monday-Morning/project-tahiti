import React from 'react';

// Libraries
import { makeStyles } from '@material-ui/core';

// Components
import ArticleCard from './ArticleCard';

function ArticleCardStack() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {[0, 1, 2].map((val, index) => (
        <ArticleCard key={val} isLastInStack={index === 2} />
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
    [theme.breakpoints.between('sm', 'md')]: {
      justifyContent: 'flex-start',
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      justifyContent: 'center',
    },
  },
}));
