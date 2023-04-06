import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { getGraphClient } from '../../context/ApolloContextProvider';

// Components
import ActivityIndicator from '../../components/shared/ActivityIndicator';
import SubCategory from '../../screens/SubCategory';
import Marginals from '../../components/marginals/Marginals';

// Utils
import ROUTES from '../../utils/getRoutes';

// Graphql
import getArticlesByCategories from '../../graphql/queries/category/getArticlesByCategories';
import countOfArticlesBySubCategory from '../../graphql/queries/subcategory/countOfArticlesBySubCategory';
import Custom500 from '../500';

const CategoryPage = ({
  categoryName,
  subCategoryDetails,
  articleList,
  countOfArticles,
  department,
  pageNumber,
  isError,
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
      `/${categoryName}/${subCategoryDetails?.shortName}${
        department ? '/' + department : ''
      }/${pageNo ?? pageNumber}`,
      undefined,
      { shallow: false },
    );
  }, [pageNo, articleList, subCategoryDetails?.idNumber]);

  const handleChange = (event, value) => {
    setPageNo(value);
  };

  if (isError) {
    return (
      <>
        <Head>
          {/* <!-- =============== Primary Meta Tags =============== --> */}
          <title> Monday Morning </title>
          <meta name='title' content={`Monday Morning`} />
          <meta
            name='description'
            content='Monday Morning is the official Student Media Body of National Institute Of Technology Rourkela. Monday Morning covers all the events, issues and activities going on inside the campus. Monday Morning also serves as a link between the administration and the students.'
          />
          <meta
            name='keywords'
            content={`monday morning, mondaymorning, monday morning, mm, nit rkl, nit, nit rourkela, nitr, nitrkl, rkl, rourkela`}
          />

          {/* <!-- =============== Open Graph / Facebook =============== --> */}
          <meta property='og:type' content='website' />
          <meta
            property='og:url'
            content={`https://mondaymorning.nitrkl.ac.in/`}
          />
          <meta
            property='og:site_name'
            content='Monday Morning | The Student Media Body of NIT Rourkela, India'
          />
          <meta property='og:title' content={`Monday Morning`} />
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
            content={`https://mondaymorning.nitrkl.ac.in`}
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
        <Custom500 />
      </>
    );
  }

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
  params: { category, subCategory },
  preview,
}) {
  try {
    const graphClient = getGraphClient(true);

    const department = subCategory.length === 3 ? subCategory[1] : false;
    const pageNumber =
      subCategory.length === 3 ? subCategory[2] : subCategory[1];

    const categoryName = ROUTES.CATEGORIES.filter(
      ({ asyncRoutePath }) => asyncRoutePath === './Category',
    ).filter(({ shortName }) => shortName === category)[0]?.shortName;

    const subCategoryDetails = ROUTES.SUB_CATEGORIES.OBJECT[
      categoryName?.toUpperCase()
    ]
      ?.filter(({ asyncRoutePath }) => asyncRoutePath === './SubCategory')
      .filter(({ shortName }) => shortName === subCategory[0])[0];

    const departmentDetails =
      subCategory[0] === 'academics' && department
        ? ROUTES.DEPARTMENTS.filter(
            ({ shortName }) => shortName === department,
          )[0]
        : false;

    if (!subCategoryDetails) {
      return {
        notFound: true,
      };
    }

    const {
      data: { getArticlesByCategories: articleList },
    } = await graphClient.query({
      query: getArticlesByCategories,
      variables: {
        categoryNumbers: [
          departmentDetails?.idNumber || subCategoryDetails.idNumber,
        ],
        limit: 7,
        offset: 7 * (parseInt(pageNumber) - 1),
      },
    });

    const {
      data: { countOfArticlesBySubCategory: countOfArticles },
    } = await graphClient.query({
      query: countOfArticlesBySubCategory,
      variables: {
        categoryNumber:
          departmentDetails?.idNumber || subCategoryDetails.idNumber,
      },
    });

    return {
      props: {
        categoryName,
        subCategoryDetails,
        articleList,
        countOfArticles,
        department,
        pageNumber: parseInt(pageNumber),
      },
      revalidate:
        preview || new Date(Date.now()).getDay() < 3
          ? 60 * 60 * 1
          : 60 * 60 * 24 * 2, // 1 Hour or 2 Days
    };
  } catch (err) {
    return {
      props: {
        isError: true,
      },
    };
  }
}

export async function getStaticPaths() {
  let routes = ROUTES.SUB_CATEGORIES.ARRAY;
  routes.pop();
  routes.push(ROUTES.DEPARTMENTS);
  const paths = routes.flat().map(({ path }) => ({
    params: {
      category: path?.split('/')[1],
      subCategory: path?.split('/')[3]
        ? [path?.split('/')[2], path?.split('/')[3], '1']
        : [path?.split('/')[2], '1'],
    },
  }));
  return { paths, fallback: true };
}

export default CategoryPage;
