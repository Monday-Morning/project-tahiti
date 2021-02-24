import React from 'react';

// libraries
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// images
import cover from '../../assets/images/witsdom.png';

function FeatureArticle() {
  const props = {
    article: {
      title: 'Chaos, Curiosity and COVID-19: A Biotechnologist’s Perspective',
      authors: ['Debabrata Malik', 'Rama Krushna Behera'],
    },
  };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.coverText}>
        <Typography variant='h1' className={classes.title}>
          {props.article.title}
        </Typography>
        <div className={classes.authorList}>
          {props.article.authors.map((author) => (
            <Typography variant='body2' key={author} className={classes.author}>
              {author}
            </Typography>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeatureArticle;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    minWidth: '300px',
    minHeight: '300px',
    height: '100%',
    width: '100%',
    backgroundImage: `url(${cover})`,
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    color: theme.palette.common.white,
    padding: '3%',
    paddingBottom: '20px',
    borderRadius: '8px',
  },
  title: {
    marginTop: '4px',
  },
  authorList: {
    display: 'flex',
    marginTop: '4px',
    justifyContent: 'flex-start',
  },
  author: {
    display: 'inline',
    color: theme.palette.secondary.neutral60,
    marginRight: '10px',
  },
}));
