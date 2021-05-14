import React from 'react';

// libraries
import { Grid, makeStyles, useMediaQuery } from '@material-ui/core';

// Components
import Forum from '../widgets/Forum';
import Title from './SectionTitle';
import Pulse from '../widgets/Pulse';
import PnIData from '../widgets/PnIData';
import BigArticleCard from './BigArticleCard';
import ArticleCard from '../widgets/ArticleCard';
import ArticleCardStack from '../widgets/ArticleCardStack';

const ArticlesCard = ({
  heading,
  smallCards,
  bigCards,
  forum,
  pulse,
  pniData,
}) => {
  const matches = useMediaQuery('(min-width:600px)');
  const classes = useStyles();

  if (forum) {
    // eslint-disable-next-line no-param-reassign
    heading = null;
  }
  return (
    <div className={classes.root}>
      {forum && <Forum />}
      {heading && <Title heading={heading} />}
      {pulse && <Pulse />}
      {pniData && <PnIData />}

      {bigCards && (matches ? <BigArticleCard /> : <ArticleCard />)}

      <Grid>{smallCards && <ArticleCardStack />}</Grid>
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
}));

export default ArticlesCard;
