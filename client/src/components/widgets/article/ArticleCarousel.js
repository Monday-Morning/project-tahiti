import React from 'react';

// Libraries
import { makeStyles } from '@material-ui/core';

// Components
import RegularArticleCard from './RegularArticleCard';

// Assets
import { DEFAULT_ARTICLE } from '../../../assets/placeholder/article';

const Carousel = ({ articleList }) => {
  const classes = useStyles();

  const renderArticles = (articleParam) => {
    const isDefaultArticle = !articleParam?.title;
    const article = isDefaultArticle ? DEFAULT_ARTICLE : articleParam;

    return <RegularArticleCard key={article.id} article={article} carousel />;
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.black} />
      <div className={classes.carousel}>
        <div className={classes.articleRow}>
          <div className={classes.articles}>
            {articleList.map(renderArticles)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'relative',
    maxWidth: '100%',
  },

  black: {
    position: 'absolute',
    backgroundColor: theme.palette.secondary.main,
    bottom: '0',
    left: '0',
    right: '0',
    height: '286px',
    [theme.breakpoints.up('sm')]: {
      height: '230px',
    },
  },

  carousel: {
    display: 'flex',
    overflowX: 'scroll',
    overflowY: 'hidden',
  },

  articleRow: {
    marginTop: '2.25rem',
    zIndex: '1',
    paddingLeft: '1.5rem',
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '7rem',
    },
  },

  articles: {
    display: 'flex',
    paddingBottom: '1.5rem',
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '0.5rem',
    },
  },
}));
