import { Container } from '@material-ui/core';
import React from 'react';
import BackLink from '../components/podcast/BackLink';
import Title from '../components/shared/PageTitle';
import Pagination from '../components/shared/Pagination';
import ArticleCardStack from '../components/widgets/ArticleCardStack';
import BigArticleCard from '../components/widgets/BigArticleCard';

function Witsdom() {
  return (
    <div>
      <Container>
        <BackLink />
        <Title title='Witsdom' />
        <BigArticleCard />
        <ArticleCardStack />
        <ArticleCardStack />
        <Pagination />
      </Container>
    </div>
  );
}

export default Witsdom;
