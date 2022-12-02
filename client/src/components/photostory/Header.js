import React, { useState } from 'react';
import Image from 'next/image';

// libraries
import { Container, Grid, Typography, useMediaQuery } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Bookmark, Volume2 } from 'react-feather';

// Config + Utilities
import Share from '../widgets/Share';
import theme from '../../config/themes/light';
import { useRouter } from 'next/router';

const Header = ({ DATA }) => {
  const { pathname } = useRouter();
  const Desktop = useMediaQuery(theme.breakpoints.up('sm'));
  const classes = useStyles();
  const [pageHref, setPageHref] = useState(pathname);

  return (
    <Container className={classes.container}>
      <Grid item xs={12}>
        <Typography className={classes.title} variant={Desktop ? 'h1' : 'h2'}>
          {DATA.title}
        </Typography>
        <Typography className={classes.publishDate}>
          {DATA.publishDate}
        </Typography>
        <div className={classes.wrapper}>
          <div className={classes.authorList}>
            {DATA.authors.map((author, key) => (
              <div key={key} className={classes.authorWrapper}>
                {!Desktop ? (
                  <Image
                    src={author.img}
                    alt={author.alt}
                    className={classes.authorImg}
                    height={20}
                    width={20}
                  />
                ) : (
                  <Typography variant='body2' className={classes.author}>
                    {author.name?.replace(/ null( |$)/g, '')}
                  </Typography>
                )}
              </div>
            ))}
          </div>
          <div className={classes.utilityList}>
            <span className={classes.utilityIcon}>
              <Volume2 size={Desktop ? 18 : 10} />
            </span>
            <span className={classes.utilityIcon}>
              <Share title={DATA.title} url={pageHref} />
            </span>
            <span className={classes.utilityIcon}>
              <Bookmark size={Desktop ? 18 : 10} />
            </span>
          </div>
        </div>
      </Grid>
    </Container>
  );
};

export default Header;

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '2rem',
    marginBottom: '1.3rem',
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
    [theme.breakpoints.down('md')]: {
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
    cursor: 'pointer',
    alignItems: 'center',
    marginRight: '10px',
  },
  authorImg: {
    height: '1rem',
    width: '1rem',
    borderRadius: '50%',
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
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      fontSize: '12px',
      marginLeft: '5px',
    },
  },
}));
