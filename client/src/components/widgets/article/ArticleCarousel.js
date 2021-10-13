import React from 'react';

// Libraries
import { makeStyles } from '@material-ui/core';

// Components
import RegularArticleCard from './RegularArticleCard';

// Assets
// import { DEFAULT_ARTICLE } from '../../../assets/placeholder/article';

const renderArticles = (article) => {
  const isValidArticle = !article?.title;

  return isValidArticle ? null : (
    <RegularArticleCard key={article.id} article={article} carousel />
  );
};

const Carousel = ({ articleList }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.black} />
      <div className={classes.carousel}>
        <div className={classes.articleRow}>
          <div className={classes.articles}>
            {articleList?.map(renderArticles)}
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
    height: '273px',
    [theme.breakpoints.up('sm')]: {
      height: '266px',
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
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 'calc((100% - 1280px)/2 - 8px)',
    },
  },

  articles: {
    marginLeft: '24px',
    [theme.breakpoints.up('lg')]: {
      marginLeft: '33px',
    },
    display: 'flex',
    paddingBottom: '1.5rem',
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '1rem',
    },
  },
}));
