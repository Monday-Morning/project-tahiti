import React from 'react';

// Libraries
import { makeStyles } from '@material-ui/core';

// Components
import ArticleCard from './ArticleCard';

function ArticleCardStack({ articleList }) {
  const classes = useStyles();

  // Code to show default article cards if length < 3
  // if (articleList?.length === 1)
  //   articleList.push({ id: 'placeholder1' }, { id: 'placeholder2' });
  // if (articleList?.length === 2) articleList.push({ id: 'placeholder1' });

  return (
    <div className={classes.root}>
      {articleList.map((article, index) => (
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
    gap: '10px',

    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    },
  },
  smallArticle: {
    gridColumn: '1/2',
  },
  regularArticle: {
    alignSelf: 'center',
  },
}));
