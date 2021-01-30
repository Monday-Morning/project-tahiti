import React from 'react';

// Libraries
import { Grid } from '@material-ui/core';

// Components
import ArticleCard from './ArticleCard';

function ArticleCardStack() {
  return (
    <Grid container spacing={4} style={{ marginTop: 25 }}>
      {[0, 1, 2].map((val) => (
        <Grid key={val} item sm={4}>
          <ArticleCard />
        </Grid>
      ))}
    </Grid>
  );
}

export default ArticleCardStack;
