import React from 'react';
import Link from 'next/link';

// Libraries
import { Box, Grid, useMediaQuery } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

// Components
import FeatureArticle from './FeatureArticle';
import SmallCard from './SmallCard';
import SmallArticleCard from '../widgets/SmallArticleCard';

function Section({ heading }) {
  const matches = useMediaQuery('(min-width:600px');
  const classes = useStyles();

  const link =
    heading === 'Photostory'
      ? '/photostory/id/title'
      : 'article/609673938c0ee55b2c03e814/Adapting%20To%20The%20Unprecedented:%20NITR%20Rewind%202020-21';

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item sm={9}>
          <Link
            href={link}
            passHref
            target='_blank'
            rel='nonoopener noreferrer'
            className={classes.link}
          >
            <FeatureArticle className={classes.feature} />
          </Link>
        </Grid>
        <Grid item sm={3} className={classes.smallCards}>
          <Box>
            <Link
              passHref
              href={link}
              target='_blank'
              rel='nonoopener noreferrer'
              className={classes.link}
            >
              {matches ? <SmallCard /> : <SmallArticleCard />}
            </Link>
          </Box>
          <Box mt={3}>
            <Link
              passHref
              href={link}
              target='_blank'
              rel='nonoopener noreferrer'
              className={classes.link}
            >
              {matches ? <SmallCard /> : <SmallArticleCard />}
            </Link>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Section;

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    marginTop: '2rem',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
  smallCards: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}));
