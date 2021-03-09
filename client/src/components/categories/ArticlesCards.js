import React from 'react';

// libraries
import { Box, Grid, makeStyles, useMediaQuery } from '@material-ui/core';

// Components
import Forum from '../widgets/Forum';
import Title from '../widgets/Title';
import Pulse from '../widgets/Pulse';
import BigArticleCard from '../widgets/BigArticleCard';
import SmallArticleCard from '../widgets/SmallArticleCard';
import ArticleCard from '../widgets/ArticleCard';
import PnIData from '../widgets/PnIData';

// Theme
import theme from '../../config/themes/light';

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
    heading = null;
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
                  <div key={key} sm={4}>
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
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
}));

export default ArticlesCard;
