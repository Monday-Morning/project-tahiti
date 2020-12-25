import React from 'react';

// libraries
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import theme from '../../config/themes/light';

// images
import cover from '../../assets/images/articleCover.png';
import user from '../../assets/images/photo.png';

const ArticleHeader = (props) => {
  const Desktop = useMediaQuery(theme.breakpoints.up('sm'));
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <img src={cover} alt='Cover Photo' className={classes.coverImg} />
      <Grid container className={classes.container}>
        <Grid item md={9}>
          <Grid container>
            {props.article.tags.map((tag, key) => (
              <Grid item key={key}>
                <span className={classes.tag}>{tag}</span>
              </Grid>
            ))}
          </Grid>
          <Typography className={classes.title} variant={Desktop ? 'h1' : 'h2'}>
            {props.article.title}
          </Typography>
          <Typography className={classes.publishDate}>{props.article.publishDate}</Typography>
          <div className={classes.wrapper}>
            <div className={classes.authorList}>
              {props.article.authors.map((author, key) => (
                <div key={key} className={classes.authorWrapper}>
                  <img src={user} alt={author.alt} className={classes.authorImg} />
                  <Typography variant='body2' className={classes.author}>
                    {author.name}
                  </Typography>
                </div>
              ))}
            </div>
            <div className={classes.utilityList}>
              <span className={classes.utilityIcon}>
                <i className='fa fa-volume-up'></i>
              </span>
              <span className={classes.utilityIcon}>
                <i className='fa fa-share-alt'></i>
              </span>
              <span className={classes.utilityIcon}>
                <i className='fa fa-bookmark'></i>
              </span>
            </div>
          </div>
          <hr />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ArticleHeader;

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '2rem',
  },
  coverImg: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: theme.shape.borderRadius,
  },
  tag: {
    // backgroundColor: 'unset',
    fontSize: '1.25rem',
    fontWeight: '400',
    lineHeight: '1.75rem',
    color: theme.palette.secondary.neutral60,
    textDecoration: 'underline',
    marginRight: '10px',
    textTransform: 'uppercase',
    '@media (max-width:600px)': {
      fontSize: '0.75rem',
      lineHeight: '1.5rem',
    },
  },
  title: {
    marginTop: '1rem',
  },
  publishDate: {
    marginTop: '0.5rem',
    fontWeight: '400',
    fontSize: '1rem',
    lineHeight: '1.5rem',
    color: theme.palette.secondary.neutral60,
    '@media (max-width:600px)': {
      fontSize: '0.75rem',
      lineHeight: '1rem',
    },
  },
  wrapper: {
    display: 'flex',
    marginTop: '1rem',
    marginBottom: ' 0.5rem',
    justifyContent: 'space-between',
  },
  authorList: {
    display: 'flex',
    alignItems: 'center',
  },
  authorWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  authorImg: {
    height: '1rem',
    width: '1rem',
    objectFit: 'cover',
    marginRight: '10px',
  },
  author: {
    display: 'inline',
    color: theme.palette.secondary.neutral60,
    fontWeight: '400',
    marginRight: '10px',
  },
  utilityIcon: {
    marginLeft: '30px',
    fontSize: '18px',
    '@media (max-width:600px)': {
      fontSize: '12px',
      marginLeft: '5px',
    },
  },
}));
