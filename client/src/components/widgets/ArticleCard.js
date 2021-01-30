import React from 'react';

// libraries
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

// Components
import { ARTICLECARD } from '../../assets/placeholder/widget';

// images
import cover from '../../assets/images/cover.png';

const ArticleCard = ({ carousel }) => {
  const props = {
    article: ARTICLECARD,
  };
  const classes = useStyles();
  return (
    // <Card className={classes.root}>
    <Card className={carousel ? classes.root2 : classes.root}>
      <img className={classes.featuredImage} src={cover} alt='Featured' />
      <CardContent className={classes.contentRoot}>
        <Grid container>
          {props.article.tags.map((tag, index) => (
            <Grid item key={tag}>
              <span className={classes.seperator}>{(index ? ' |' : '')}</span> <span className={classes.tag}>{`${tag}`}</span>
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
            {props.article.authors.map((author, index) => (
              <Typography variant='body2' key={author} className={classes.author}>
                {(index ? ',' : '') + `  ${author}`}
              </Typography>
            ))}
          </div>
          <div className={classes.readTime}>
            <i className='far fa-clock'></i>
            <Typography variant='body2'>{props.article.readTime}</Typography>
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
  root: {
    boxShadow: theme.shadows[0],
    maxWidth: '379px',

    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
  },
  root2: {
    boxShadow: theme.shadows[0],
    maxWidth: '379px',
    minWidth: '379px',
    marginRight: '1.5rem',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      minWidth: '312px',
    },
  },
  featuredImage: {
    width: '100%',
  },
  contentRoot: {
    [theme.breakpoints.up('sm')]: {
      padding: '0.75rem',
    },
  },
  tag: {
    fontSize: '0.75rem',
    fontWeight: '400',
    lineHeight: '1rem',
    color: theme.palette.secondary.neutral70,
    textDecoration: 'underline',
  },
  seperator: {
    color: theme.palette.secondary.neutral70,
    // marginInline: '0.25rem',
    marginRight: '2px',
    marginLeft: '0.25rem',
  },
  title: {
    marginTop: '0.25rem',
    fontSize: '1.5rem',
    lineHeight: '2rem',
    textAlign: 'justify',

    [theme.breakpoints.down('sm')]: {
      lineHeight: '1.75rem',
      fontSize: '1.25rem',
    },
  },
  wrapper: {
    display: 'flex',
    marginTop: '4px',
    justifyContent: 'space-between',
  },
  readTime: {
    display: 'flex',
    fontWeight: '400',
    color: theme.palette.secondary.neutral60,

    '& i': {
      marginTop: '0.25rem',
      marginRight: '5px',
    },

    [theme.breakpoints.down('sm')]: {
      color: theme.palette.secondary.neutral70,
    },
  },
  author: {
    display: 'inline',
    color: theme.palette.secondary.neutral60,
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
    textAlign: 'justify',
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.common.black,
  },
}));
