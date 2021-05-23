import React from 'react';

// Libraries
import { makeStyles } from '@material-ui/core';

// Components
import ArticleCard from './ArticleCard';

function ArticleCardStack({ articleList }) {
  const classes = useStyles();

  if (articleList.length === 1)
    articleList.push({ id: 'placeholder1' }, { id: 'placeholder2' });
  if (articleList.length === 2) articleList.push({ id: 'placeholder1' });

  return (
    <div className={classes.root}>
      {articleList.length > 0
        ? articleList.map((article, index) => (
            <ArticleCard
              key={article.id}
              article={article}
              isLastInStack={index === 2}
            />
          ))
        : [0, 1, 2].map((val, index) => (
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
