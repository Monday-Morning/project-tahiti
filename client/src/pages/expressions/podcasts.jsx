import React from 'react';
import Head from 'next/head';

import Podcast from '../../screens/Podcast';
import Marginals from '../../components/marginals/Marginals';
import getSpotifyAccessToken from '../../utils/getSpotifyAccessToken';

const PodcastPage = ({ spotify }) => (
  <>
    <Head>
      {/* <!-- =============== Primary Meta Tags =============== --> */}
      <title>Podcast | Monday Morning</title>
      <meta name='title' content='Podcast | Monday Morning' />
      <meta
        name='description'
        content='Monday Morning is the official Student Media Body of National Institute Of Technology Rourkela. Monday Morning covers all the events, issues and activities going on inside the campus. Monday Morning also serves as a link between the administration and the students.'
      />
      <meta
        name='keywords'
        content='podcast,monday morning, mondaymorning, monday morning, mm, nit rkl, nit, nit rourkela, nitr, nitrkl, rkl, rourkela'
      />

      {/* <!-- =============== Open Graph / Facebook =============== --> */}
      <meta property='og:type' content='website' />
      <meta
        property='og:url'
        content='https://mondaymorning.nitrkl.ac.in/podcast'
      />
      <meta
        property='og:site_name'
        content='Monday Morning | The Student Media Body of NIT Rourkela, India'
      />
      <meta property='og:title' content='Podcast | Monday Morning' />
      <meta
        property='og:description'
        content='Monday Morning is the Media Body of National Institute Of Technology Rourkela. Monday Morning covers all the events, issues and activities going on inside the campus. Monday morning also serves as a link between the administration and the students.'
      />
      <meta property='og:image' itemProp='image' content='/icon-256x256.png' />
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
        content='https://mondaymorning.nitrkl.ac.in/podcast'
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
      <Podcast spotify={spotify} />
    </Marginals>
  </>
);

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
      props: { spotify },
    };
  } catch (err) {
    return {
      props: {
        isError: true,
      },
    };
  }
}

export default PodcastPage;
