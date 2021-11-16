import React from 'react';
import { useRouter } from 'next/router';


import { GraphClient } from '../config/ApolloClient';

// Components
import ActivityIndicator from '../components/shared/ActivityIndicator';
import Category from '../screens/Category';
import Marginals from '../components/marginals/Marginals';

// Utils
import ROUTES from '../utils/getRoutes';

// Graphql
import getArticlesByCategories from '../graphql/queries/category/getArticlesByCategories';

const CategoryPage = ({ articleList, categoryShortName, category }) => {
  const { isFallback } = useRouter();
  return (
    <>
      <Marginals>
        {isFallback && !articleList ? (
          <ActivityIndicator size={150} />
        ) : (
          <Category
            articleList={articleList}
            categoryShortName={categoryShortName}
            category={category}
          />
        )}
      </Marginals>
    </>
  );
};

export async function getStaticProps({
  params: { category: categoryShortName },
  preview,
}) {
  const category = ROUTES.CATEGORIES.filter(
    ({ shortName }) => shortName === categoryShortName,
  )[0];
  const {
    data: { getArticlesByCategories: articleList },
  } = await GraphClient.query({
    query: getArticlesByCategories,
    variables: {
      categoryNumbers: [category.idNumber, ...category.subCategoryIds],
      limit: 4,
    },
  });

  if (!articleList) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      articleList,
      categoryShortName,
      category,
    },
    revalidate:
      preview || new Date(Date.now()).getDay() < 3
        ? 60 * 60 * 1
        : 60 * 60 * 24 * 2, // 1 Hour or 2 Days
  };
}

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export default CategoryPage;
