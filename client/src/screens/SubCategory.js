/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

// Libraries
import { Container } from '@mui/material';

// Components
import BackLink from '../components/podcast/BackLink';
import Title from '../components/shared/PageTitle';
import Pagination from '../components/shared/Pagination';
import ArticleCardStack from '../components/widgets/article/ArticleCardStack';
import BigArticleCard from '../components/widgets/article/BigArticleCard';

function SubCategory({ categoryName, subCategoryDetails, articleList }) {
  return (
    <Container>
      <BackLink backTo={categoryName} />
      <Title title={subCategoryDetails.name} />
      <BigArticleCard article={articleList[0][0]} />
      <ArticleCardStack articleList={articleList[0].slice(1, 3)} />
      <ArticleCardStack articleList={articleList[0].slice(4, 7)} />
      <Pagination />
    </Container>
  );
}

export default SubCategory;
