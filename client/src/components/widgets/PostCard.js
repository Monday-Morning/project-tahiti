import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import cover from '../../assets/images/cover.png';

const PostCard = () => {
  const props = {
    post: {
      tags: ['Department', 'Campus', 'BM-BT'],
      title: 'Chaos, Curiosity and COVID-19: A Biotechnologist’s Perspective',
      authors: ['Debabrata Malik', 'Rama Krushna Behera'],
      readTime: '12 min',
      summary:
        'A webinar on COVID-19 was conducted by the BM/BT Department. Read on to know more. A webinar on COVID-19 was conducted by the BM/BT Department. Read on to know more.',
    },
  };
  const classes = useStyles();
  return (
    <Card className={classes.postCard}>
      <img className={classes.featuredImage} src={cover} alt='Featured' />
      <CardContent>
        <Grid container spacing={1}>
          {props.post.tags.map((tag) => (
            <Grid item key={tag}>
              <span className={classes.tag}>{tag}</span>
            </Grid>
          ))}
        </Grid>
        <Typography className={classes.title} variant='h2'>
          {props.post.title}
        </Typography>
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
        <Typography variant='body2' className={classes.postDescription}>
          {props.post.summary}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;
const useStyles = makeStyles((theme) => ({
  postCard: {
    boxShadow: theme.shadows[0],
  },
  featuredImage: {
    width: '100%',
  },
  tag: {
    // backgroundColor: 'unset',
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '16px',
    color: theme.palette.secondary.neutral60,
    textDecoration: 'underline',
  },
  title: {
    marginTop: '4px',
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
  postDescription: {
    marginTop: '12px',
    fontWeight: '400',
    color: theme.palette.common.black,
  },
}));
