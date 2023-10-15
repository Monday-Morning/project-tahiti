import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { getGraphClient } from '../../context/ApolloContextProvider';

// Components
import ActivityIndicator from '../../components/shared/ActivityIndicator';
import Category from '../../screens/Category';
import Marginals from '../../components/marginals/Marginals';

// Utils
import ROUTES from '../../utils/getRoutes';

// Graphql
import getArticlesByCategories from '../../graphql/queries/category/getArticlesByCategories';
import Custom500 from '../500';

const CategoryPage = ({
  articleList,
  categoryShortName,
  category,
  isError,
}) => {
  const { isFallback } = useRouter();

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
        <title>{category?.name} | Monday Morning</title>
        <meta name='title' content={`${category?.name} | Monday Morning`} />
        <meta
          name='description'
          content='Monday Morning is the official Student Media Body of National Institute Of Technology Rourkela. Monday Morning covers all the events, issues and activities going on inside the campus. Monday Morning also serves as a link between the administration and the students.'
        />
        <meta
          name='keywords'
          content={`${categoryShortName},monday morning, mondaymorning, monday morning, mm, nit rkl, nit, nit rourkela, nitr, nitrkl, rkl, rourkela`}
        />

        {/* <!-- =============== Open Graph / Facebook =============== --> */}
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content={`https://mondaymorning.nitrkl.ac.in/${categoryShortName}`}
        />
        <meta
          property='og:site_name'
          content='Monday Morning | The Student Media Body of NIT Rourkela, India'
        />
        <meta
          property='og:title'
          content={`${category?.name} | Monday Morning`}
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
          content={`https://mondaymorning.nitrkl.ac.in/${categoryShortName}`}
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
      {isFallback && !articleList ? (
        <ActivityIndicator size={150} />
      ) : (
        <Marginals>
          <Category
            articleList={articleList}
            categoryShortName={categoryShortName}
            category={category}
          />
        </Marginals>
      )}
    </>
  );
};

export async function getStaticProps({
  params: { category: categoryShortName },
  preview,
}) {
  try {
    const graphClient = getGraphClient(true);

    const category = ROUTES.CATEGORIES.filter(
      ({ asyncRoutePath }) => asyncRoutePath === './Category',
    ).filter(({ shortName }) => shortName === categoryShortName)[0];

    const {
      data: { getArticlesByCategories: articleList },
    } = await graphClient.query({
      query: getArticlesByCategories,
      variables: {
        categoryNumbers: [category?.idNumber, ...category?.subCategoryIds],
        limit: 4,
      },
    });

    if (!category || !articleList) {
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
  } catch (err) {
    return {
      props: {
        isError: true,
      },
    };
  }
}

export async function getStaticPaths() {
  try {
    const paths = ROUTES.CATEGORIES.filter(
      ({ asyncRoutePath }) => asyncRoutePath === './Category',
    ).map(({ shortName }) => ({
      params: { category: shortName },
    }));

    return { paths, fallback: false };
  } catch (e) {
    return {
      paths: { params: { subCategory: ['error', 'error'] } },
      fallback: true,
    };
  }
}

export default CategoryPage;
