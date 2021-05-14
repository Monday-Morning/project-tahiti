import React from 'react';

// Libraries
import { Container } from '@material-ui/core';
import { useLocation } from 'react-router-dom';

// Components
import BackLink from '../components/podcast/BackLink';
import Title from '../components/shared/PageTitle';
import Pagination from '../components/shared/Pagination';
import ArticleCardStack from '../components/widgets/article/ArticleCardStack';
import BigArticleCard from '../components/widgets/article/BigArticleCard';

// Utils
import ROUTES from '../utils/getRoutes';

function Witsdom() {
  // 1. Determine category from the url.
  // 2. Get the title for the category from the ROUTES object.
  const location = useLocation();
  const category = location.pathname.split('/')[1];
  const subCategory = location.pathname.split('/')[2];
  const categoryName = ROUTES.CATEGORIES.filter(
    ({ shortName }) => shortName === category,
  )[0].name;
  const subCategoryName = ROUTES.SUB_CATEGORIES.OBJECT[
    category.toUpperCase()
  ].filter(({ shortName }) => shortName === subCategory)[0].name;

  return (
    <div>
      <Container>
        <BackLink backTo={categoryName} />
        <Title title={subCategoryName} />
        <BigArticleCard />
        <ArticleCardStack />
        <ArticleCardStack />
        <Pagination />
      </Container>
    </div>
  );
}

export default Witsdom;
