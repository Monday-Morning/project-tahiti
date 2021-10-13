import React from 'react';

// Libraries
import { makeStyles } from '@material-ui/core';

// Components
import ArticleCard from './ArticleCard';
import TitleWrapper from '../../shared/TitleWrapper';

function ArticleCardStack({ articleList }) {
  const classes = useStyles();
  const title = true;
  return (
    <div>
      {title ? <TitleWrapper title='This Issue' /> : false}
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
      justifyContent: 'center',
      gridTemplateColumns: 'repeat(1, minmax(400px, 600px))',
    },

    [theme.breakpoints.up('md')]: {
      justifyContent: 'center',
      gridTemplateColumns: 'repeat(2, minmax(400px, 600px))',
    },

    [theme.breakpoints.up('lg')]: {
      justifyItems: 'start',
      gridTemplateColumns: 'repeat(3, minmax(400px, 600px))',
    },
  },
  smallArticle: {
    gridColumn: '1/2',
  },
  regularArticle: {
    alignSelf: 'center',
  },
}));
