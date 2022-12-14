import { Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';
import Image from 'next/image';
import theme from '../../config/themes/light';
import STORES from '../../utils/getStores';

function SmallCard({ article }) {
  const classes = useStyles(theme);
  const {
    title,
    authors,
    coverMedia: {
      rectangle: { store, storePath },
    },
  } = article;
  return (
    <div>
      <Image
        width={276}
        height={155}
        src={
          STORES[article.coverMedia.rectangle.store] +
          encodeURI(article.coverMedia.rectangle.storePath)
        }
        className={classes.smallCard}
      />
      <Typography variant='h2' className={classes.title}>
        {title}
      </Typography>
      <div className={classes.authorList}>
        {authors.map(({ name, details }) => (
          <Typography variant='body2' key={details} className={classes.author}>
            {name.split(' ')[0]}
          </Typography>
        ))}
      </div>
    </div>
  );
}

export default SmallCard;

const useStyles = makeStyles((theme) => ({
  root: {
    height: '239px',
  },
  smallCard: {
    width: '100%',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  title: {
    cursor: 'pointer',
  },
  authorList: {
    display: 'flex',
    margin: '4px 0px',
    justifyContent: 'flex-start',
  },
  author: {
    display: 'inline',
    color: theme.palette.secondary.neutral60,
    fontWeight: '400',
    marginRight: '10px',
    cursor: 'pointer',
  },
}));
