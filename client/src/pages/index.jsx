import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

// libraries
import { GraphClient } from '../config/ApolloClient';

// Components
import Marginals from '../components/marginals/Marginals';
import ActivityIndicator from '../components/shared/ActivityIndicator';
import Home from '../screens/Home';

// Queries
import getLatestIssues from '../graphql/queries/homepage/getLatestIssues';
import getLatestSquiggle from '../graphql/queries/homepage/getLatestSquiggle';
import getArticlesByCategories from '../graphql/queries/category/getArticlesByCategories';

function HomePage({ issues, squiggles, witsdom, photostory }) {
  const { isFallback } = useRouter();

  return (
    <>
      <Head>
        {/* <!-- =============== Primary Meta Tags =============== --> */}
        <title>
          Monday Morning | The Student Media Body of NIT Rourkela, India
        </title>
        <meta
          name='title'
          content='Monday Morning | The Student Media Body of NIT Rourkela, India'
        />
        <meta
          name='description'
          content='Monday Morning is the official Student Media Body of National Institute Of Technology Rourkela. Monday Morning covers all the events, issues and activities going on inside the campus. Monday Morning also serves as a link between the administration and the students.'
        />
        <meta
          name='keywords'
          content='monday morning, mondaymorning, monday morning, mm, nit rkl, nit, nit rourkela, nitr, nitrkl, rkl, rourkela'
        />

        {/* <!-- =============== Open Graph / Facebook =============== --> */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://mondaymorning.nitrkl.ac.in/' />
        <meta
          property='og:site_name'
          content='Monday Morning | The Student Media Body of NIT Rourkela, India'
        />
        <meta property='og:title' content='Monday Morning' />
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
          content='https://mondaymorning.nitrkl.ac.in/'
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
      {isFallback && !issues ? (
        <ActivityIndicator size={150} />
      ) : (
        <Marginals>
          <Home
            issues={issues}
            squiggles={squiggles}
            witsdom={witsdom}
            photostory={photostory}
          />
        </Marginals>
      )}
    </>
  );
}

export async function getStaticProps({ preview }) {
  const {
    data: { getLatestIssues: issues },
  } = await GraphClient.query({
    query: getLatestIssues,
    variables: { limit: 2 },
  });

  if (!issues || issues.length !== 2) {
    return {
      redirect: {
        destination: '/error/internal-server-error',
        permanent: false,
      },
    };
  }

  const {
    data: { getLatestSquiggle: squiggles },
  } = await GraphClient.query({
    query: getLatestSquiggle,
  });

  const {
    data: {
      getArticlesByCategories: [witsdom],
    },
  } = await GraphClient.query({
    query: getArticlesByCategories,
    variables: { categoryNumbers: 61, limit: 1 },
  });

  const {
    data: {
      getArticlesByCategories: [photostory],
    },
  } = await GraphClient.query({
    query: getArticlesByCategories,
    variables: { categoryNumbers: 62, limit: 1 },
  });

  return {
    props: {
      issues,
      squiggles,
      witsdom,
      photostory,
    },
    revalidate:
      preview || new Date(Date.now()).getDay() < 3
        ? 60 * 60 * 1
        : 60 * 60 * 24 * 2, // 1 Hour or 2 Days
  };
}

export default HomePage;
