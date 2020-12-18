import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid, GridList, GridListTile, Typography } from '@material-ui/core';
import cover from '../../assets/images/featured.png';
import black from '../../assets/images/black.jpg';

function FeaturedPost() {
  const props = {
    post: {
      tags: ['Department', 'Campus', 'BM-BT'],
      title: 'Chaos, Curiosity and COVID-19: A Biotechnologist’s Perspective',
      authors: ['Debabrata Malik', 'Rama Krushna Behera'],
      readTime: '12 min',
    },
  };
  const classes = useStyles();
  return (
    <div className={classes.postWrapper}>
      <div className={classes.container}>
        <Grid container>
          {props.post.tags.map((tag) => (
            <Grid item key={tag}>
              <span className={classes.tag}>{tag}</span>
            </Grid>
          ))}
        </Grid>
        <Typography className={classes.title}>{props.post.title}</Typography>
        <div className={classes.wrapper}>
          <div className={classes.authorList}>
            {props.post.authors.map((author) => (
              <Typography variant='body2' key={author} className={classes.author}>
                {author}
              </Typography>
            ))}
          </div>
          <div className={classes.readTime}>
            <Typography variant='body2'>{props.post.readTime}</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturedPosts() {
  const classes = useStyles();
  return (
    <Card className={classes.FeaturedPostCard}>
      <Grid container spacing={0}>
        <Grid item sm={6}>
          <FeaturedPost />
        </Grid>
        <Grid item sm={6}>
          <Grid container>
            <Grid item sm={6}>
              <FeaturedPost />
            </Grid>
            <Grid item sm={6}>
              <FeaturedPost />
            </Grid>
            <Grid item sm={6}>
              <FeaturedPost />
            </Grid>
            <Grid item sm={6}>
              <FeaturedPost />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}

export default FeaturedPosts;

const useStyles = makeStyles((theme) => ({
  FeaturedPostCard: {
    borderRadius: '8px',
  },
  FeaturedGrid: {},
  postWrapper: {
    display: 'flex',
    alignItems: 'flex-end',
    minWidth: '300px',
    minHeight: '300px',
    height: '100%',
    width: '100%',
    backgroundImage: `url(${cover}), url(${black})`,
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
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
