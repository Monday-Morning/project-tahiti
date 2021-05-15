import React from 'react';

// Libraries
import { Box, Grid, makeStyles, useMediaQuery } from '@material-ui/core';
import { Link } from 'react-router-dom';

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
            to={link}
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
              to={link}
              target='_blank'
              rel='nonoopener noreferrer'
              className={classes.link}
            >
              {matches ? <SmallCard /> : <SmallArticleCard />}
            </Link>
          </Box>
          <Box mt={3}>
            <Link
              to={link}
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
