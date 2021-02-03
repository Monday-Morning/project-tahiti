import { Container, Grid } from '@material-ui/core';
import React from 'react';
import BackLink from '../components/podcast/BackLink.js';
import Title from '../components/shared/PageTitle';
import ArticleCardStack from '../components/widgets/ArticleCardStack';
import BigArticleCard from '../components/widgets/BigArticleCard';

function Witsdom() {
  return (
    <div>
      <Container>
        <BackLink />
        <Title title={'Witsdom'} />
        <BigArticleCard />
        <ArticleCardStack />
        <ArticleCardStack />
      </Container>
    </div>
  );
}

export default Witsdom;
