import React from 'react';
import Image from 'next/image';

import makeStyles from '@mui/styles/makeStyles';
import { Typography } from '@mui/material';

// assests
import cover from '../../assets/images/witsdom.png';

import STORES from '../../utils/getStores';

function FeatureArticle({ article }) {
  const props = {
    article: {
      title: 'Chaos, Curiosity and COVID-19: A Biotechnologist’s Perspective',
      authors: ['Debabrata Malik', 'Rama Krushna Behera'],
    },
  };

  const {
    title,
    authors,
    coverMedia: {
      rectangle: { store, storePath },
    },
  } = article;
  const classes = useStyles({
    storePath: STORES[store] + encodeURI(storePath),
  });

  return (
    <div className={classes.root}>
      <div className={classes.coverText}>
        <Typography variant='h1' className={classes.title}>
          {title}
        </Typography>
        <div className={classes.authorList}>
          {authors.map(({ name, details }) => (
            <Typography
              variant='body2'
              key={details}
              className={classes.author}
            >
              {name}
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
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    color: theme.palette.common.white,
    padding: '3%',
    paddingBottom: '20px',
    borderRadius: '8px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: ({ storePath }) =>
      `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.2),  rgba(0,0,0,0.9)), url(${storePath})`,
    '&:hover': {
      cursor: 'pointer',
    },
    [theme.breakpoints.down('sm')]: {
      width: '90vw',
    },
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
