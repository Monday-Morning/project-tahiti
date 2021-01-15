import { makeStyles } from '@material-ui/core';
import React from 'react';
import theme from '../../config/themes/light';
import ArticleCard from './ArticleCard';

const Carousel = () => {
  const classes = useStyles(theme);

  return (
    <div className={classes.wrapper}>
      <div className={classes.black}></div>
      <div className={classes.carousel}>
        <div className={classes.articleRow}>
          <div className={classes.articles}>
            {[0, 1, 2, 3, 4, 5].map((val) => (
              <ArticleCard key={val} carousel={true} className={classes.article} />
            ))}
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
