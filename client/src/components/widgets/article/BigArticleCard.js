/* eslint-disable react/no-array-index-key */
import React from 'react';

// Libraries
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  useMediaQuery,
} from '@material-ui/core';
import { Bookmark, Share2 } from 'react-feather';

// Components
import RegularArticleCard from './RegularArticleCard';

// Assets
import { ARTICLECARD } from '../../../assets/placeholder/widget';
import cover from '../../../assets/images/BACover.jpg';

const BigArticleCard = () => {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width: 600px)');
  const props = {
    article: ARTICLECARD,
  };

  return matches ? (
    <RegularArticleCard />
  ) : (
    <Card className={classes.root}>
      <img className={classes.cover} src={cover} alt='Cover' />

      <CardContent className={classes.details}>
        <div className={classes.container}>
          <div>
            <Grid container spacing={1}>
              {props.article.tags.map((tag, index) => (
                <Grid item key={tag}>
                  <Typography
                    variant='body2'
                    key={index}
                    className={classes.tag}
                  >
                    {`${index ? '|' : ''}    ${tag}`}
                  </Typography>
                </Grid>
              ))}
            </Grid>

            <Typography className={classes.title} variant='h2'>
              {props.article.title}
            </Typography>

            <div className={classes.wrapper}>
              <div className={classes.authorList}>
                {props.article.authors.map((author, index) => (
                  <Typography
                    variant='body2'
                    key={index}
                    className={classes.author}
                  >
                    {`${index ? ',' : ''}  ${author}`}
                  </Typography>
                ))}
              </div>
              <div className={classes.readTime}>
                <i className='far fa-clock' />
                <Typography variant='body2'>
                  {props.article.readTime}
                </Typography>
              </div>
            </div>
            <Typography variant='body1' className={classes.articleDescription}>
              {props.article.summary}
            </Typography>
          </div>

          <div className={classes.footer}>
            <div className={classes.line} />
            <Share2 size={18} className={classes.icons} />
            <Bookmark size={18} className={classes.icons} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'space-between',

    borderRadius: '10px',
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    boxShadow:
      '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 3px rgba(0, 0, 0, 0.12)',
  },
  cover: {
    width: '65%',
    height: 'auto',
  },
  details: {
    width: '35%',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    paddingTop: '4rem',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  tag: {
    fontFamily: 'Source Sans Pro',
    fontSize: '12px',
    fontWeight: '400',
    color: theme.palette.secondary.neutral70,
  },
  title: {
    fontFamily: 'IBM Plex Sans',
    fontWeight: '600',
    fontSize: '1.5rem',
    lineHeight: '2rem',
  },
  wrapper: {
    fontFamily: 'Source Sans Pro',
    fontSize: '10px',
    fontWeight: '400',
    display: 'flex',
    paddingTop: '0.75rem',
    color: theme.palette.secondary.neutral70,
    justifyContent: 'space-between',
  },
  authorList: {
    display: 'flex',
  },
  author: {},
  readTime: {
    display: 'flex',
    '& i': {
      marginTop: '0.25rem',
      marginRight: '5px',
    },
  },
  line: {
    borderBottom: '1px solid ',
    borderColor: theme.palette.common.black,
    width: '-webkit-fill-available',
  },
  icons: {},
  articleDescription: {
    paddingTop: '1.5rem',
    fontFamily: 'Source Sans Pro',
    fontWeight: '400',
    lineHeight: '24px',
    fontSize: '16px',
    color: '#222222',
  },
  footer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '0rem',
  },
}));

export default BigArticleCard;
