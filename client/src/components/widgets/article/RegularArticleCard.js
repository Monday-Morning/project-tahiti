import React from 'react';

// libraries
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

// Assets
import { ARTICLECARD } from '../../../assets/placeholder/widget';
import cover from '../../../assets/images/cover.png';

const ArticleCard = () => {
  const props = {
    article: ARTICLECARD,
  };
  const classes = useStyles();

  return (
    <Link
      to='/article/609673938c0ee55b2c03e814/Adapting%20To%20The%20Unprecedented:%20NITR%20Rewind%202020-21'
      className={classes.link}
    >
      <Card className={classes.root}>
        <img className={classes.featuredImage} src={cover} alt='Featured' />

        <CardContent className={classes.cardContent}>
          <Typography variant='body2' className={classes.categories}>
            {props.article.tags.map((category, index) => (
              <span key={category}>{`${index ? ' | ' : ''}${category}`}</span>
            ))}
          </Typography>

          <Typography className={classes.title} variant='h2'>
            {props.article.title}
          </Typography>

          <div className={classes.detailsContainer}>
            <Typography variant='body2' className={classes.author}>
              {props.article.authors.map((author, index) => (
                <span key={author}>{`${index ? ', ' : ''}  ${author}`}</span>
              ))}
            </Typography>

            <div className={classes.readTime}>
              <i className={`far fa-clock ${classes.clockIcon}`} />
              <Typography variant='body2'>{props.article.readTime}</Typography>
            </div>
          </div>

          <Typography variant='body2' className={classes.articleDescription}>
            {props.article.summary}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ArticleCard;
const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: theme.shadows[0],
    backgroundColor: theme.palette.common.white,
    overflow: 'hidden',
    width: '380px',
    height: '420px',
    [theme.breakpoints.between('sm', 'lg')]: {
      margin: '25px',
      marginBottom: '0px',
      marginLeft: '0px',
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      // width: 'auto',
      // height: 'auto',
      minHeight: '420px',
    },
  },
  featuredImage: {
    width: '100%',
    height: 'auto',
  },
  cardContent: {
    [theme.breakpoints.up('sm')]: {
      padding: '0.75rem',
    },
  },
  categories: {
    color: theme.palette.secondary.neutral70,
  },
  title: {
    marginTop: '0.25rem',
    fontSize: '1.5rem',
    lineHeight: '2rem',
    textAlign: 'left',

    [theme.breakpoints.down('sm')]: {
      lineHeight: '1.75rem',
      fontSize: '1.25rem',
    },
  },
  detailsContainer: {
    display: 'flex',
    marginTop: '4px',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  author: {
    color: theme.palette.secondary.neutral70,
  },
  clockIcon: {
    marginRight: '5px',
  },
  readTime: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontWeight: '400',
    color: theme.palette.secondary.neutral70,
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
    marginTop: '25px',
  },
}));
