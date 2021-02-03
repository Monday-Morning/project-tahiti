import { Box, Grid, makeStyles, useMediaQuery } from '@material-ui/core';
import React from 'react';
import theme from '../../config/themes/light';
import ArticleCard from '../widgets/ArticleCard';
import BigArticleCard from '../widgets/BigArticleCard';
import Pulse from '../widgets/Pulse';
import SmallArticleCard from '../widgets/SmallArticleCard';
import Forum from '../widgets/Forum';
import PnIData from '../widgets/PnIData';

const ArticlesCard = ({ heading, smallCards, bigCards, forum, pulse, pniData }) => {
  const matches = useMediaQuery('(min-width:600px)');
  const classes = useStyles(theme);
  if (forum) {
    heading = false;
  }
  console.log(pniData);
  return (
    <div className={classes.root}>
      {forum && <Forum />}
      {heading && (
        <div className={classes.wrapper}>
          <div className={classes.categorHeadings}>{heading}</div>
          <div className={classes.line}></div>
          <div className={classes.seeAll}>See All</div>
        </div>
      )}
      {pulse && <Pulse />}
      {bigCards && (matches ? <BigArticleCard /> : <ArticleCard />)}
      <Box mt={4}>
        <Grid>
          <div className={classes.smallCards}>
            {smallCards &&
              [0, 1, 2].map((key) =>
                matches ? (
                  <div key={key} item sm={4}>
                    <ArticleCard />
                  </div>
                ) : (
                  <div key={key}>
                    <SmallArticleCard />
                  </div>
                ),
              )}
          </div>
        </Grid>
      </Box>
      {pniData && <PnIData />}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '2rem',
    [theme.breakpoints.up('sm')]: {
      marginTop: '3rem',
    },
  },

  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '2.7rem 0 2rem 0',
    lineHeight: '2rem',
  },

  categorHeadings: {
    fontSize: '2rem',
    whiteSpace: 'nowrap',
    fontWeight: '600',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
    },
  },

  line: {
    [theme.breakpoints.up('sm')]: {
      borderBottom: '1px solid ',
      borderColor: theme.palette.common.black,
      width: '-webkit-fill-available',
      marginInline: '1rem',
    },
  },

  seeAll: {
    whiteSpace: 'nowrap',
    fontSize: '1.25rem',
    fontWeight: '400',
    color: theme.palette.secondary.main,
    textDecoration: 'underline',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
    },
  },

  smallCards: {
    [theme.breakpoints.up('sm')]: {
      // minWidth: '100%',
      // marginTop: '33px',
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
}));

export default ArticlesCard;
