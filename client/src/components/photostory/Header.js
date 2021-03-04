import React from 'react';

// libraries
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { Bookmark, Share2, Volume2 } from 'react-feather';

// Config
import theme from '../../config/themes/light';

const Header = ({ DATA }) => {
  const Desktop = useMediaQuery(theme.breakpoints.up('sm'));
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <Typography className={classes.title} variant={Desktop ? 'h1' : 'h2'}>
            {DATA.title}
          </Typography>
          <Typography className={classes.publishDate}>{DATA.publishDate}</Typography>
          <div className={classes.wrapper}>
            <div className={classes.authorList}>
              {DATA.authors.map((author, key) => (
                <div key={key} className={classes.authorWrapper}>
                  <img src={author.img} alt={author.alt} className={classes.authorImg} />
                  <Typography variant='body2' className={classes.author}>
                    {author.name}
                  </Typography>
                </div>
              ))}
            </div>
            <div className={classes.utilityList}>
              <span className={classes.utilityIcon}>
                <Volume2 size={Desktop ? 18 : 10} />
              </span>
              <span className={classes.utilityIcon}>
                <Share2 size={Desktop ? 18 : 10} />
              </span>
              <span className={classes.utilityIcon}>
                <Bookmark size={Desktop ? 18 : 10} />
              </span>
            </div>
          </div>
          <hr />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '2rem',
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
    [theme.breakpoints.down('sm')]: {
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
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
      marginLeft: '5px',
    },
  },
}));
