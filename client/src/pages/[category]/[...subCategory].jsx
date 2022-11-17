import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { GraphClient } from '../../config/ApolloClient';

// Components
import ActivityIndicator from '../../components/shared/ActivityIndicator';
import SubCategory from '../../screens/SubCategory';
import Marginals from '../../components/marginals/Marginals';

// Utils
import ROUTES from '../../utils/getRoutes';

// Graphql
import getArticlesByCategories from '../../graphql/queries/category/getArticlesByCategories';
import countOfArticlesBySubCategory from '../../graphql/queries/subcategory/countOfArticlesBySubCategory';

const CategoryPage = ({
  categoryName,
  subCategoryDetails,
  articleList,
  countOfArticles,
  pageNumber,
}) => {
  const { isFallback, push } = useRouter();

  const [pageNo, setPageNo] = useState(pageNumber);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (isLoading ?? true === true) {
      setLoading((_val) => false);
      return;
    }

    setLoading((_val) => true);

    push(
      `/${categoryName}/${subCategoryDetails?.shortName}/${
        pageNo ?? pageNumber
      }`,
      undefined,
      { shallow: false },
    );
  }, [pageNo, articleList, subCategoryDetails?.idNumber]);

  const handleChange = (event, value) => {
    setPageNo(value);
  };

  return (
    <>
      <Head>
        {/* <!-- =============== Primary Meta Tags =============== --> */}
        <title>{subCategoryDetails?.name} | Monday Morning</title>
        <meta
          name='title'
          content={`${subCategoryDetails?.name} | Monday Morning`}
        />
        <meta
          name='description'
          content='Monday Morning is the official Student Media Body of National Institute Of Technology Rourkela. Monday Morning covers all the events, issues and activities going on inside the campus. Monday Morning also serves as a link between the administration and the students.'
        />
        <meta
          name='keywords'
          content={`${subCategoryDetails?.shortName},monday morning, mondaymorning, monday morning, mm, nit rkl, nit, nit rourkela, nitr, nitrkl, rkl, rourkela`}
        />

        {/* <!-- =============== Open Graph / Facebook =============== --> */}
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content={`https://mondaymorning.nitrkl.ac.in/${subCategoryDetails?.shortName}`}
        />
        <meta
          property='og:site_name'
          content='Monday Morning | The Student Media Body of NIT Rourkela, India'
        />
        <meta
          property='og:title'
          content={`${subCategoryDetails?.name} | Monday Morning`}
        />
        <meta
          property='og:description'
          content='Monday Morning is the Media Body of National Institute Of Technology Rourkela. Monday Morning covers all the events, issues and activities going on inside the campus. Monday morning also serves as a link between the administration and the students.'
        />
        <meta
          property='og:image'
          itemProp='image'
          content='/icon-256x256.png'
        />
        <meta
          property='og:image:url'
          content='https://mondaymorning.nitrkl.ac.in/icon-256x256.png'
        />
        <meta
          property='og:image:secure_url'
          content='https://mondaymorning.nitrkl.ac.in/icon-256x256.png'
        />
        <meta property='og:image:type' content='image/png' />

        {/* <!-- =============== Twitter =============== --> */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content={`https://mondaymorning.nitrkl.ac.in/${subCategoryDetails?.shortName}`}
        />
        <meta property='twitter:title' content='Monday Morning' />
        <meta
          property='twitter:image'
          content='https://mondaymorning.nitrkl.ac.in/icon-256x256.png'
        />
        <meta
          property='twitter:description'
          content='Monday Morning is the Media Body of National Institute Of Technology Rourkela. Monday Morning covers all the events, issues and activities going on inside the campus. Monday morning also serves as a link between the administration and the students.'
        />
      </Head>
      {!isLoading && !isFallback && articleList ? (
        <Marginals>
          <SubCategory
            articleList={articleList}
            categoryName={categoryName}
            subCategoryDetails={subCategoryDetails}
            pageNo={pageNo ?? pageNumber}
            totalPages={Math.ceil(countOfArticles / 7)}
            handleChange={handleChange}
          />
        </Marginals>
      ) : (
        <ActivityIndicator size={150} />
      )}
    </>
  );
};

export async function getStaticProps({
  params: {
    category,
    subCategory: [subCategory, pageNumber],
  },
  preview,
}) {
  const categoryName = ROUTES.CATEGORIES.filter(
    ({ asyncRoutePath }) => asyncRoutePath === './Category',
  ).filter(({ shortName }) => shortName === category)[0]?.shortName;

  const subCategoryDetails = ROUTES.SUB_CATEGORIES.OBJECT[
    categoryName?.toUpperCase()
  ]
    ?.filter(({ asyncRoutePath }) => asyncRoutePath === './SubCategory')
    .filter(({ shortName }) => shortName === subCategory)[0];

  if (!subCategoryDetails) {
    return {
      notFound: true,
    };
  }

  const {
    data: { getArticlesByCategories: articleList },
  } = await GraphClient.query({
    query: getArticlesByCategories,
    variables: {
      categoryNumbers: [subCategoryDetails?.idNumber],
      limit: 7,
      offset: 7 * (parseInt(pageNumber) - 1),
    },
  });

  const {
    data: { countOfArticlesBySubCategory: countOfArticles },
  } = await GraphClient.query({
    query: countOfArticlesBySubCategory,
    variables: {
      categoryNumber: subCategoryDetails?.idNumber,
    },
  });

  return {
    props: {
      categoryName,
      subCategoryDetails,
      articleList,
      countOfArticles,
      pageNumber: parseInt(pageNumber),
    },
    revalidate:
      preview || new Date(Date.now()).getDay() < 3
        ? 60 * 60 * 1
        : 60 * 60 * 24 * 2, // 1 Hour or 2 Days
  };
}

export async function getStaticPaths() {
  let routes = ROUTES.SUB_CATEGORIES.ARRAY;
  routes.pop();
  const paths = routes.flat().map(({ path }) => ({
    params: {
      category: path?.split('/')[1],
      subCategory: [path?.split('/')[2], '1'],
    },
  }));
  return { paths, fallback: true };
}

export default CategoryPage;
