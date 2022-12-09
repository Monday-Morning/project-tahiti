import React, { useEffect, useState } from 'react';
import Image from 'next/image';

// libraries
import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Bookmark, Volume2 } from 'react-feather';
import moment from 'moment';

// Config + Utilities
import Share from '../widgets/Share';
import theme from '../../config/themes/light';
import { useRouter } from 'next/router';
import STORES from '../../utils/getStores';
import Link from 'next/link';

const Header = ({ title, authors, readTime, updatedAt }) => {
  const classes = useStyles();
  const { isFallback, pathname } = useRouter();

  const Desktop = useMediaQuery(theme.breakpoints.up('sm'));
  const [pageHref, setPageHref] = useState(pathname);
  useEffect(() => setPageHref(window.location.href), []);

  if (isFallback) return <ActivityIndicator size={150} />;

  return (
    <Container className={classes.container}>
      <Grid item xs={12}>
        <Typography className={classes.title} variant={Desktop ? 'h1' : 'h2'}>
          {title}
        </Typography>

        <Typography className={classes.publishDate}>
          {moment(updatedAt).format('ll')}
          <span style={{ marginRight: 10, marginLeft: 10 }}>|</span>
          {moment.duration(readTime, 'seconds').humanize()}
        </Typography>

        <Box className={classes.wrapper}>
          <Box className={classes.authorList}>
            {authors.map(({ name, details, user }) => (
              <Link
                href={`/portfolio/${details}/${encodeURI(name)}`}
                passHref
                key={details}
                target='_blank'
                rel='noreferrer'
                style={{ textDecoration: 'none', cursor: 'pointer' }}
              >
                <Box key={name} className={classes.authorWrapper}>
                  {!Desktop ? (
                    <Image
                      src={
                        STORES[user.picture.store] +
                        encodeURI(user.picture.storePath)
                      }
                      alt='authorName'
                      className={classes.authorImg}
                      height={20}
                      width={20}
                    />
                  ) : (
                    <Typography variant='body2' className={classes.author}>
                      {name?.replace(/ null( |$)/g, '')}
                    </Typography>
                  )}
                </Box>
              </Link>
            ))}
          </Box>
          <Box className={classes.utilityList}>
            <span className={classes.utilityIcon}>
              <Volume2 size={Desktop ? 18 : 10} />
            </span>
            <span className={classes.utilityIcon}>
              <Share title={title} url={pageHref} />
            </span>
            <span className={classes.utilityIcon}>
              <Bookmark size={Desktop ? 18 : 10} />
            </span>
          </Box>
        </Box>
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
