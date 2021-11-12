import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

// libraries
import { Grid, makeStyles, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Bookmark } from 'react-feather';
import moment from 'moment';

// Config + Utilities
import theme from '../../config/themes/light';
import getCategory from '../../utils/determineCategory';
import Share from '../widgets/Share';
import STORES from '../../utils/getStores';
import ActivityIndicator from '../shared/ActivityIndicator';

const ArticleHeader = ({ article }) => {
  const { isFallback, pathname } = useRouter();
  const Desktop = useMediaQuery(theme.breakpoints.up('sm'));
  const classes = useStyles();
  const [pageHref, setPageHref] = useState(pathname);
  useEffect(() => setPageHref(window.location.href), []);

  if (isFallback || !article) return <ActivityIndicator size={150} />;

  const categorySortFunction = (firstObj, secondObj) => {
    if (firstObj.number.toString() < secondObj.number.toString()) return -1;
    if (firstObj.number.toString() > secondObj.number.toString()) return 1;
    return 0;
  };

  const {
    title,
    authors,
    readTime,
    updatedAt,
    categories,
    coverMedia: {
      rectangle: { store, storePath },
    },
  } = article;

  return (
    <div className={classes.container}>
      <div className={classes.coverImgContainer}>
        <Image
          src={STORES[store] + encodeURI(storePath)}
          alt={`Monday Morning Article Cover for: ${title}`}
          layout='fill'
          objectFit='cover'
          className={classes.coverImg}
        />
      </div>

      <Grid container className={classes.container}>
        <Grid item md={9}>
          <Grid container>
            {categories
              .slice()
              .sort(categorySortFunction)
              .map(({ number }, index) => (
                <Grid item key={getCategory(number)}>
                  <Typography variant='body1' className={classes.tag}>
                    {index ? (
                      <span
                        style={{
                          textDecoration: 'none',
                          paddingLeft: '10px',
                          paddingRight: '10px',
                        }}
                      >
                        |
                      </span>
                    ) : (
                      ''
                    )}
                    {getCategory(number)}
                  </Typography>
                </Grid>
              ))}
          </Grid>

          <Typography className={classes.title} variant={Desktop ? 'h1' : 'h2'}>
            {title}
          </Typography>

          <Typography className={classes.publishDate}>
            {moment(updatedAt).format('ll')}
            <span style={{ marginRight: 10, marginLeft: 10 }}>|</span>
            {moment.duration(readTime, 'seconds').humanize()}
          </Typography>

          <div className={classes.wrapper}>
            <div className={classes.authorList}>
              {authors.map(({ name, details }) => (
                <Link
                  href={`/portfolio/${details}/${encodeURI(name)}`}
                  passHref
                  key={details}
                  target='_blank'
                  rel='noreferrer'
                  style={{ textDecoration: 'none', cursor: 'pointer' }}
                >
                  <div key={name} className={classes.authorWrapper}>
                    {/* <img
                    src={user}
                    alt={author.alt}
                    className={classes.authorImg}
                  /> */}

                    <Typography variant='body2' className={classes.author}>
                      {name}
                    </Typography>
                  </div>
                </Link>
              ))}
            </div>

            <div className={classes.utilityList}>
              {/* <span className={classes.utilityIcon}>
                <Volume2 size={Desktop ? 18 : 10} />
              </span> */}
              <span className={classes.utilityIcon}>
                <Share title={title} url={pageHref} />
              </span>
              <span className={classes.utilityIcon}>
                <Bookmark size={Desktop ? 18 : 10} />
              </span>
            </div>
          </div>

          <hr />
        </Grid>
      </Grid>
    </div>
  );
};

export default ArticleHeader;

const useStyles = makeStyles(() => ({
  container: {
    marginTop: '2rem',
  },
  coverImgContainer: {
    width: '100%',
    height: 'auto',
    position: 'relative',
    '& > span': {
      position: 'unset !important',
    },
  },
  coverImg: {
    position: 'unset !important',
    width: 'auto !important',
    height: 'auto !important',
    borderRadius: theme.shape.borderRadius,
  },
  tag: {
    fontSize: '1.25rem',
    fontWeight: '400',
    lineHeight: '1.75rem',
    color: theme.palette.secondary.neutral60,
    textDecoration: 'underline',
    textTransform: 'uppercase',
    [theme.breakpoints.down('sm')]: {
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
    cursor: 'pointer',
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
