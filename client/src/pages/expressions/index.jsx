import React from 'react';
import Head from 'next/head';

// Components
import Marginals from '../../components/marginals/Marginals';
import Expressions from '../../screens/Expressions';
import { getGraphClient } from '../../context/ApolloContextProvider';
import getArticlesByCategories from '../../graphql/queries/category/getArticlesByCategories';
import Custom500 from '../500';

import getSpotifyAccessToken from '../../utils/getSpotifyAccessToken';

const ExpressionsPage = ({
  witsdom,
  editorial,
  spotify,
  photostory,
  miscellaneous,
  isError,
}) => {
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
        <title>Expressions | Monday Morning</title>
        <meta name='title' content='Expressions | Monday Morning' />
        <meta
          name='description'
          content='Monday Morning is the official Student Media Body of National Institute Of Technology Rourkela. Monday Morning covers all the events, issues and activities going on inside the campus. Monday Morning also serves as a link between the administration and the students.'
        />
        <meta
          name='keywords'
          content='expressions,monday morning, mondaymorning, monday morning, mm, nit rkl, nit, nit rourkela, nitr, nitrkl, rkl, rourkela'
        />

        {/* <!-- =============== Open Graph / Facebook =============== --> */}
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://mondaymorning.nitrkl.ac.in/expressions'
        />
        <meta
          property='og:site_name'
          content='Monday Morning | The Student Media Body of NIT Rourkela, India'
        />
        <meta property='og:title' content='Expressions | Monday Morning' />
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
          content='https://mondaymorning.nitrkl.ac.in/expressions'
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
        <Expressions
          witsdom={witsdom}
          photostory={photostory}
          spotify={spotify}
          editorial={editorial}
          miscellaneous={miscellaneous}
        />
      </Marginals>
    </>
  );
};

// export async function getServerSideProps() {
//   return {
//     redirect: {
//       destination: '/comingSoon',
//       permanent: false,
//     },
//   };
// }

export async function getStaticProps() {
  try {
    const graphClient = getGraphClient(true);

    const {
      data: { getArticlesByCategories: witsdom },
    } = await graphClient.query({
      query: getArticlesByCategories,
      variables: { categoryNumbers: 61, limit: 3 },
    });

    const {
      data: { getArticlesByCategories: photostory },
    } = await graphClient.query({
      query: getArticlesByCategories,
      variables: { categoryNumbers: 62, limit: 5 },
    });

    const {
      data: {
        getArticlesByCategories: [editorial],
      },
    } = await graphClient.query({
      query: getArticlesByCategories,
      variables: { categoryNumbers: 66, limit: 3 },
    });

    const {
      data: {
        getArticlesByCategories: [miscellaneous],
      },
    } = await graphClient.query({
      query: getArticlesByCategories,
      variables: { categoryNumbers: 67, limit: 3 },
    });

    const accessToken = await getSpotifyAccessToken();
    const podcastId = '7ljgcbXzt4VQRJ1SLIECNf';
    const offset = 0;
    const limit = 5;
    const showUrl = `https://api.spotify.com/v1/shows/${podcastId}/episodes?offset=${offset}&limit=${limit}&market=ES`;

    const { items: spotify } = await fetch(showUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((res) => {
      return res.json();
    });

    return {
      props: { witsdom, photostory, editorial, spotify, miscellaneous },
    };
  } catch (err) {
    return {
      props: {
        isError: true,
      },
    };
  }
}
export default ExpressionsPage;
