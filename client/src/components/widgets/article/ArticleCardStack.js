import React from 'react';

// Libraries
import { makeStyles } from '@material-ui/core';

// Components
import ArticleCard from './ArticleCard';

function ArticleCardStack({ articleList }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {articleList?.map((article, index) => (
        <ArticleCard
          key={article.id}
          article={article}
          isLastInStack={index === 2}
          smallArticleClassName={classes.smallArticle}
          regularArticleClassName={classes.regularArticle}
        />
      ))}
    </div>
  );
}

export default ArticleCardStack;

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '30px',

    display: 'grid',
    gridTemplateColumns: '1fr',
    justifyItems: 'center',
    gap: '10px',

    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    },

    [theme.breakpoints.up('lg')]: {
      justifyItems: 'start',
    },
  },
  smallArticle: {
    gridColumn: '1/2',
  },
  regularArticle: {
    alignSelf: 'center',
  },
}));
