import React from 'react';

// libraries
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

// Components
import { ARTICLECARD } from '../../assets/placeholder/widget';

// images
import cover from '../../assets/images/cover.png';

const ArticleCard = () => {
  const props = {
    article: ARTICLECARD,
  };
  const classes = useStyles();
  return (
    <Card className={classes.articleCard}>
      <img className={classes.featuredImage} src={cover} alt='Featured' />
      <CardContent>
        <Grid container spacing={1}>
          {props.article.tags.map((tag) => (
            <Grid item key={tag}>
              <span className={classes.tag}>{tag}</span>
            </Grid>
          ))}
        </Grid>
        <Typography className={classes.title} variant='h2'>
          <Link to='/article' className={classes.link}>
            {props.article.title}
          </Link>
        </Typography>
        <div className={classes.wrapper}>
          <div className={classes.authorList}>
            {props.article.authors.map((author, key) => {
              return (
                <Typography variant='body2' key={key} className={classes.author}>
                  {author}
                </Typography>
              );
            })}
          </div>
          <div className={classes.readTime}>
            <Typography variant='body2'>
              <i className='far fa-clock'></i>
              {props.article.readTime}
            </Typography>
          </div>
        </div>
        <Typography variant='body2' className={classes.articleDescription}>
          {props.article.summary}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
const useStyles = makeStyles((theme) => ({
  articleCard: {
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
    [theme.breakpoints.down('sm')]: {
      lineHeight: '28px',
      fontSize: '20px',
    },
  },
  wrapper: {
    display: 'flex',
    marginTop: '4px',
    justifyContent: 'space-between',
  },
  readTime: {
    '& i': {
      marginRight: '0.5rem',
    color: '#6E6E6E',
    color: theme.palette.secondary.neutral60,
    [theme.breakpoints.down('sm')]: {
      color: theme.palette.secondary.neutral70,
    },
  },
},
  author: {
    display: 'inline',
    color: theme.palette.secondary.neutral70,
    fontWeight: '400',
    marginRight: '10px',
    [theme.breakpoints.down('sm')]: {
      color: theme.palette.secondary.neutral70,
    },
  },
  articleDescription: {
    marginTop: '12px',
    fontWeight: '400',
    color: theme.palette.common.black,
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.common.black,
  },
}));
