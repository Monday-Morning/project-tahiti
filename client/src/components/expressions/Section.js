import React from 'react';
import Link from 'next/link';

// Libraries
import { Box, Grid, useMediaQuery } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

// Components
import FeatureArticle from './FeatureArticle';
import SmallCard from './SmallCard';
import SmallArticleCard from '../widgets/article/SmallArticleCard';

//Utils
import NewTabLink from '../shared/links/NewTabLink';
import getArticleLink from '../../utils/getArticleLink';

function Section({ heading, article }) {
  const matches = useMediaQuery('(min-width:600px');
  const classes = useStyles();

  const featuredArticle = article[0][0];
  const { id, title } = featuredArticle;

  article = article[0].slice(1, 3);

  const link =
    heading === 'Photostory'
      ? '/photostory/id/title'
      : 'article/609673938c0ee55b2c03e814/Adapting%20To%20The%20Unprecedented:%20NITR%20Rewind%202020-21';

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item sm={9}>
          <NewTabLink to={getArticleLink(id, title)} className={classes.link}>
            <FeatureArticle
              className={classes.feature}
              article={featuredArticle}
            />
          </NewTabLink>
        </Grid>
        <Grid item sm={3} className={classes.smallCards}>
          {article.map((item) => (
            <Box mt={3}>
              <NewTabLink
                to={getArticleLink(item.id, item.title)}
                className={classes.link}
              >
                {matches ? (
                  <SmallCard article={item} />
                ) : (
                  <SmallArticleCard isWitsdom={true} article={item} />
                )}
              </NewTabLink>
            </Box>
          ))}
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
