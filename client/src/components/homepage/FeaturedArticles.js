import React from 'react';

// Libraries
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid, Typography } from '@material-ui/core';

// Components
import NewTabLink from '../shared/links/NewTabLink';

// Utils
import limitString from '../../utils/limitString';

function FeaturedArticle({ article }) {
  const {
    id,
    title,
    readTime,
    authors,
    coverMedia: {
      rectangle: { storePath },
    },
  } = article;

  const classes = useStylesChild({ storePath });

  return (
    <NewTabLink to={`/article/${id}/${title}`} className={classes.link}>
      <div className={classes.articleWrapper}>
        <div className={classes.detailsContainer}>
          <Typography className={classes.title}>
            {limitString(title, 48)}
          </Typography>
          <div className={classes.wrapper}>
            <div className={classes.authorList}>
              {authors.map(({ name }) => (
                <Typography
                  variant='body2'
                  key={name}
                  className={classes.author}
                >
                  {name}
                </Typography>
              ))}
            </div>
            <div className={classes.readTime}>
              <Typography variant='body2'>{readTime}</Typography>
            </div>
          </div>
        </div>
      </div>
    </NewTabLink>
  );
}

function FeaturedArticles({ articles }) {
  const classes = useStylesParent();

  return (
    <Card className={classes.FeaturedarticleCard}>
      <Grid container spacing={0}>
        <Grid item sm={6}>
          <FeaturedArticle article={articles[0]} />
        </Grid>
        <Grid item sm={6}>
          <Grid container>
            {[0, 1, 2, 3].map((number) => (
              <Grid key={number} item sm={6}>
                <FeaturedArticle article={articles[number + 1]} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}

export default FeaturedArticles;

const useStylesParent = makeStyles(() => ({
  FeaturedarticleCard: {
    borderRadius: '8px',
    marginTop: 25,
  },
}));

const useStylesChild = makeStyles((theme) => ({
  link: {
    display: 'inline-block',
    width: '100%',
    height: '100%',
    backgroundImage:
      'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.2),  rgba(0,0,0,0.9))',
  },
  articleWrapper: {
    display: 'flex',
    alignItems: 'flex-end',

    minWidth: '300px',
    minHeight: '300px',
    height: '100%',
    width: '100%',

    color: theme.palette.common.white,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: ({ storePath }) =>
      `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.2),  rgba(0,0,0,0.9)), url(${storePath
        .split(' ')
        .join('%20')}) `,

    '&:hover': {
      cursor: 'pointer',
    },
  },
  detailsContainer: {
    width: '100%',
    padding: '10px',
    paddingBottom: '20px',
  },
  title: {
    marginTop: '4px',
    fontSize: '18px',
    lineHeight: '24px',
    fontWeight: '600',
    fontFamily: 'IBM Plex Sans',
  },
  wrapper: {
    display: 'flex',
    marginTop: '4px',
    justifyContent: 'space-between',
  },
  authorList: {},
  author: {
    display: 'inline',
    color: theme.palette.secondary.neutral60,
    fontWeight: '400',
    marginRight: '10px',
  },
  readTime: {},
}));
