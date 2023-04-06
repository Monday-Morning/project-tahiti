import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

//liberaries
import { getGraphClient } from '../../context/ApolloContextProvider';

//components
import Archive from '../../screens/Archive';
import ActivityIndicator from '../../components/shared/ActivityIndicator';
import Marginals from '../../components/marginals/Marginals';

//gql
import listArticlesByYearAndMonth from '../../graphql/queries/article/listArticleByYearAndMonth';

//routes
import { ARCHIVES } from '../../assets/placeholder/guide';
import Custom500 from '../500';

function ArchivePage({ archiveArticles, year, month, isError }) {
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
        <title>Archive | Monday Morning</title>
        <meta name='title' content='Archive | Monday Morning' />
        <meta
          name='description'
          content='Monday Morning is the official Student Media Body of National Institute Of Technology Rourkela. Monday Morning covers all the events, issues and activities going on inside the campus. Monday Morning also serves as a link between the administration and the students.'
        />
        <meta
          name='keywords'
          content='archive, monday morning, mondaymorning, monday morning, mm, nit rkl, nit, nit rourkela, nitr, nitrkl, rkl, rourkela'
        />

        {/* <!-- =============== Open Graph / Facebook =============== --> */}
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://mondaymorning.nitrkl.ac.in/archive'
        />
        <meta
          property='og:site_name'
          content='Monday Morning | The Student Media Body of NIT Rourkela, India'
        />
        <meta property='og:title' content='Archive | Monday Morning' />
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
          content='https://mondaymorning.nitrkl.ac.in/archive'
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
      <Marginals>
        {isFallback ? (
          <ActivityIndicator size={150} />
        ) : (
          <Archive
            archiveArticles={archiveArticles}
            year={parseInt(year)}
            month={month}
          />
        )}
      </Marginals>
    </>
  );
}

export default ArchivePage;

export async function getStaticProps({
  params: {
    yearAndMonth: [year, month],
  },
}) {
  try {
    const graphClient = getGraphClient(true);

    const {
      data: { listArticlesByYearAndMonth: archiveArticles },
    } = await graphClient.query({
      query: listArticlesByYearAndMonth,
      variables: {
        onlyPublished: true,
        year: parseInt(year),
        month: ARCHIVES.months.indexOf(month),
        limit: 9,
      },
    });
    return {
      props: { archiveArticles, year, month },
      revalidate: 7 * 24 * 60 * 60,
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
  const { years, months } = ARCHIVES;

  try {
    const paths = years
      .map((year) =>
        months.map((month) => {
          return {
            params: {
              yearAndMonth: [`${year}`, month],
            },
          };
        }),
      )
      .flat();

    return {
      paths,
      fallback: true,
    };
  } catch (e) {
    return {
      paths: { params: { subCategory: ['error', 'error'] } },
      fallback: true,
    };
  }
}
