import React from 'react';

// Libraries
import { Box, Grid, makeStyles, useMediaQuery } from '@material-ui/core';

// Components
import FeatureArticle from './FeatureArticle';
import SmallCard from './SmallCard';
import SmallArticleCard from '../widgets/SmallArticleCard';

function Section() {
  const matches = useMediaQuery('(min-width:600px');
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item sm={9}>
          <FeatureArticle className={classes.feature} />
        </Grid>
        <Grid item sm={3} className={classes.smallCards}>
          <Box>{matches ? <SmallCard /> : <SmallArticleCard />}</Box>
          <Box mt={3}>{matches ? <SmallCard /> : <SmallArticleCard />}</Box>
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
  feature: {
    // height: '504px',
  },
  smallCards: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}));
