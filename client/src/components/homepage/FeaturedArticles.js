import React from 'react';

// libraries
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid, Typography } from '@material-ui/core';

// image
import black from '../../assets/images/black.jpg';

// Utils
import limitString from '../../utils/limitString';

function FeaturedArticle({ article }) {
  const {
    title,
    readTime,
    authors,
    coverMedia: {
      rectangle: { storePath },
    },
  } = article;

  const classes = useStyles();
  return (
    <div
      className={classes.articleWrapper}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.2),  rgba(0,0,0,0.9)), url(${storePath}) `,
      }}
    >
      <div className={classes.container}>
        <Typography className={classes.title}>
          {limitString(title, 48)}
        </Typography>
        <div className={classes.wrapper}>
          <div className={classes.authorList}>
            {authors.map(({ name }) => (
              <Typography variant='body2' key={name} className={classes.author}>
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
  );
}

function FeaturedArticles({ articles }) {
  const classes = useStyles();

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

const useStyles = makeStyles((theme) => ({
  FeaturedarticleCard: {
    borderRadius: '8px',
    marginTop: 25,
  },
  FeaturedGrid: {},
  articleWrapper: {
    display: 'flex',
    alignItems: 'flex-end',
    minWidth: '300px',
    minHeight: '300px',
    height: '100%',
    width: '100%',
    backgroundImage: (cover) => `url(${cover}), url(${black})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: theme.palette.common.white,
  },
  container: {
    width: '100%',
    padding: '10px',
    paddingBottom: '20px',
  },
  tag: {
    // backgroundColor: 'unset',
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '16px',
    color: theme.palette.secondary.neutral60,
    textDecoration: 'underline',
    marginRight: '10px',
  },
  title: {
    marginTop: '4px',
    fontSize: '18px',
    lineHeight: '24px',
    fontWeight: '600',
  },
  wrapper: {
    display: 'flex',
    marginTop: '4px',
    justifyContent: 'space-between',
  },
  readTime: {},
  author: {
    display: 'inline',
    color: theme.palette.secondary.neutral60,
    fontWeight: '400',
    marginRight: '10px',
  },
}));
