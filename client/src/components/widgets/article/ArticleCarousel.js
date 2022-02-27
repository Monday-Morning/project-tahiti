import React, { useRef, useState } from 'react';

// Libraries
import { makeStyles, IconButton, useMediaQuery } from '@material-ui/core';
import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather';

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

  const [isLeftButtonDisable, setLeftButtonDisable] = useState(true);
  const [isRightButtonDisable, setRightButtonDisable] = useState(false);
  const [scrollLeft, setScrollLeft] = useState(0);

  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
    if (ref.current.scrollLeft > 0) setLeftButtonDisable(false);
    else setLeftButtonDisable(true);

    setScrollLeft((prev) => {
      if (prev === ref.current.scrollLeft) {
        setRightButtonDisable(true);
        return ref.current.scrollLeft;
      } else {
        setRightButtonDisable(false);
        return ref.current.scrollLeft;
      }
    });
    console.log(scrollLeft);
  };

  const showButton = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <>
      <div className={classes.wrapper}>
        {showButton && (
          <span className={classes.LeftRightButtonWrapper}>
            <IconButton
              className={classes.leftButton}
              disabled={isLeftButtonDisable}
              onClick={() => scroll(-340)}
            >
              <ArrowLeftCircle fontSize='large' />
            </IconButton>

            <IconButton
              className={classes.rightButton}
              disabled={isRightButtonDisable}
              onClick={() => scroll(340)}
            >
              <ArrowRightCircle fontSize='large' />
            </IconButton>
          </span>
        )}
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
    overflowY: 'none',
  },

  articleRow: {
    // marginTop: '2.25rem',
    zIndex: '1',
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 'calc((100% - 1280px)/2 - 8px)',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '2.25rem',
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
    flexWrap: 'wrap',
    justifyContent: 'end',
    alignItems: 'center',
    marginRight: '20px',
  },
  leftButton: {
    marginRight: '10px',
    color: 'black',
  },
  rightButton: {
    color: 'black',
  },
}));
