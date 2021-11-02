/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

// Libraries
import { Container } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// Components
import BackLink from '../components/podcast/BackLink';
import Title from '../components/shared/PageTitle';
import Pagination from '../components/shared/Pagination';
import ArticleCardStack from '../components/widgets/article/ArticleCardStack';
import BigArticleCard from '../components/widgets/article/BigArticleCard';
import ActivityIndicator from '../components/shared/ActivityIndicator';

// Utils
import ROUTES from '../utils/getRoutes';

// Graphql
import getArticlesByCategories from '../graphql/queries/category/getArticlesByCategories';

function Witsdom() {
  // 1. Determine category from the url.
  // 2. Get the title for the category from the ROUTES object.
  const { pathname } = useLocation();
  const category = pathname.split('/')[1];
  const subCategory = pathname.split('/')[2];
  const categoryName = ROUTES.CATEGORIES.filter(
    ({ shortName }) => shortName === category,
  )[0].name;
  const subCategoryDetails = ROUTES.SUB_CATEGORIES.OBJECT[
    category.toUpperCase()
  ].filter(({ shortName }) => shortName === subCategory)[0];

  const isWitsdom = subCategory === 'witsdom';
  const isPhotostory = subCategory === 'photostory';
  const isGallery = subCategory === 'gallery';
  const commonArticleProps = { isWitsdom, isPhotostory, isGallery };

  const { loading, error, data } = useQuery(getArticlesByCategories, {
    variables: {
      categoryNumbers: [subCategoryDetails.idNumber],
      limit: 7,
    },
  });

  if (loading && !data) return <ActivityIndicator size={150} />;
  if (error) return <div>{JSON.stringify(error)}</div>;
  if (!data.getArticlesByCategories) return <div>Internal Server Error</div>;

  const { getArticlesByCategories: articleList } = data;

  return (
    <Container>
      <BackLink backTo={categoryName} />
      <Title title={subCategoryDetails.name} />
      <BigArticleCard {...commonArticleProps} article={articleList[0][0]} />
      <ArticleCardStack
        {...commonArticleProps}
        articleList={articleList[0].slice(1, 3)}
      />
      <ArticleCardStack
        {...commonArticleProps}
        articleList={articleList[0].slice(4, 7)}
      />
      <Pagination />
    </Container>
  );
}

export default Witsdom;
