import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Image from 'next/image';
import witsdom from '../../assets/images/witsdom.png';
import theme from '../../config/themes/light';

function SmallCard() {
  const props = {
    article: {
      title: 'The Never-Ending Cycle of Online Class',
      authors: ['Debabrata Malik', 'Rama Krushna Behera'],
    },
  };
  const classes = useStyles(theme);
  return (
    <div>
      <Image src={witsdom} className={classes.smallCard} />
      <Typography variant='h2'>{props.article.title}</Typography>
      <div className={classes.authorList}>
        {props.article.authors.map((author) => (
          <Typography variant='body2' key={author} className={classes.author}>
            {author}
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
  },
  authorList: {
    display: 'flex',
    marginTop: '4px',
    justifyContent: 'flex-start',
  },
  author: {
    display: 'inline',
    color: theme.palette.secondary.neutral60,
    fontWeight: '400',
    marginRight: '10px',
  },
}));
