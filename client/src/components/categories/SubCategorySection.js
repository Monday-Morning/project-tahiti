import React from 'react';

// libraries
import { Grid, makeStyles } from '@material-ui/core';

// Components
import Forum from '../widgets/Forum';
import Title from './SectionTitle';
import Pulse from '../widgets/Pulse';
import PnIData from '../widgets/PnIData';
import ArticleCardStack from '../widgets/article/ArticleCardStack';
import BigArticleCard from '../widgets/article/BigArticleCard';

const SubCategorySection = ({
  heading,
  smallCards,
  bigCards,
  forum,
  pulse,
  pniData,
  path,
  articleList,
}) => {
  const classes = useStyles();

  if (forum) {
    // eslint-disable-next-line no-param-reassign
    heading = null;
  }
  return (
    <div className={classes.root}>
      {forum && <Forum />}
      {heading && <Title path={path} heading={heading} />}
      {pulse && <Pulse />}
      {pniData && <PnIData />}

      {bigCards && <BigArticleCard article={articleList[0]} />}

      <Grid>
        {smallCards && (
          <ArticleCardStack articleList={articleList.slice(1, 4)} />
        )}
      </Grid>
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

export default SubCategorySection;
