import React, { useRef } from 'react';

// Libraries
import { makeStyles, Icon, Box, useMediaQuery } from '@material-ui/core';
import { ArrowLeftTwoTone, ArrowRightTwoTone } from '@material-ui/icons';

// Components
import RegularArticleCard from './RegularArticleCard';
import theme from '../../../config/themes/light';

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

  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  const hideButton = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      {!hideButton && (
        <div className={classes.LeftRightButtonWrapper}>
          <Icon className={classes.leftButton} onClick={() => scroll(-400)}>
            <ArrowLeftTwoTone fontSize='large' />
          </Icon>

          <Icon className={classes.rightButton} onClick={() => scroll(400)}>
            <ArrowRightTwoTone fontSize='large' />
          </Icon>
        </div>
      )}
      <div className={classes.wrapper}>
        <div className={classes.black} />
        <div className={classes.carousel} ref={ref}>
          <div className={classes.articleRow}>
            <div className={classes.articles}>
              {articleList?.map(renderArticles)}
            </div>
          </div>
        </div>
      </div>
    </>
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
  LeftRightButtonWrapper: {
    display: 'flex',
    justifyContent: 'end',
    marginRight: '20px',
    alignItems: 'center',
  },
}));
