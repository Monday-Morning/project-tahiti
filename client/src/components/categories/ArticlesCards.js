import { Box, Grid, makeStyles, useMediaQuery } from '@material-ui/core';
import React from 'react';
import theme from '../../config/themes/light';
import ArticleCard from '../widgets/ArticleCard';
import BigArticleCard from '../widgets/BigArticleCard';
import Pulse from '../widgets/Pulse';
import SmallArticleCard from '../widgets/SmallArticleCard';
import Forum from '../widgets/Forum';
import PnIData from '../widgets/PnIData';
import Title from '../widgets/Title';

const ArticlesCard = ({
  heading,
  smallCards,
  bigCards,
  forum,
  pulse,
  pniData,
}) => {
  const matches = useMediaQuery('(min-width:600px)');
  const classes = useStyles(theme);
  if (forum) {
    heading = false;
  }
  return (
    <div className={classes.root}>
      {forum && <Forum />}
      {heading && <Title heading={heading} />}
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
