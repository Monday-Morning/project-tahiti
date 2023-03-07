import React, { useEffect, useRef, useState } from 'react';

// Libraries
import { IconButton, useMediaQuery } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
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

  let isFirstRightClick = true;

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;

    let CurrentleftScroll = ref.current.scrollLeft;
    let maxScrollWidth = ref.current.scrollWidth - ref.current.clientWidth;

    if (isFirstRightClick) {
      setLeftButtonDisable(false);
      isFirstRightClick = false;
      return;
    }

    if (CurrentleftScroll >= maxScrollWidth) {
      setRightButtonDisable(true);
      setLeftButtonDisable(false);
    }

    if (CurrentleftScroll === 0) {
      setRightButtonDisable(false);
      setLeftButtonDisable(true);
    }
    if (CurrentleftScroll !== 0) {
      setLeftButtonDisable(false);
    }
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
              onClick={() => {
                setRightButtonDisable(false), scroll(-424);
              }}
              size='large'
            >
              <ArrowLeftCircle fontSize='large' />
            </IconButton>

            <IconButton
              className={classes.rightButton}
              disabled={isRightButtonDisable}
              onClick={() => {
                setLeftButtonDisable(false), scroll(424);
              }}
              size='large'
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
    backgroundColor: theme.palette.background.banner,
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
    scrollBehavior: 'smooth',
  },

  articleRow: {
    zIndex: '1',
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 'calc((100% - 1280px)/2 + 24px)',
    },
    [theme.breakpoints.down('lg')]: {
      padding: '0 24px',
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '2.25rem',
    },
  },

  articles: {
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
