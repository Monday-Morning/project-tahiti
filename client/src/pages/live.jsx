import React, { useState, useEffect } from 'react';
import Head from 'next/head';

//Components
import Marginals from '../components/marginals/Marginals';
import Live from '../screens/Live';
import BlockScreen from '../screens/BlockScreen';
import ActivityIndicator from '../components/shared/ActivityIndicator';

//firebase remote config
import { isLivePageVisible, initRemoteConfig } from '../config/remoteConfig';

const LivePage = () => {
  const [isPageVisible, setIsPageVisible] = useState(isLivePageVisible);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    (async () => {
      await initRemoteConfig();
      setIsPageVisible(isLivePageVisible);
      setLoading(false);
    })();
  }, []);

  return (
    <>
      <Head>
        {/* <!-- =============== Primary Meta Tags =============== --> */}
        <title>Live | Monday Morning</title>
        <meta name='title' content='Live| Monday Morning' />
        <meta
          name='description'
          content='Monday Morning is the official Student Media Body of National Institute Of Technology Rourkela. Monday Morning covers all the events, issues and activities going on inside the campus. Monday Morning also serves as a link between the administration and the students.'
        />
        <meta
          name='keywords'
          content='live,monday morning, mondaymorning, monday morning, mm, nit rkl, nit, nit rourkela, nitr, nitrkl, rkl, rourkela'
        />

        {/* <!-- =============== Open Graph / Facebook =============== --> */}
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://mondaymorning.nitrkl.ac.in/live'
        />
        <meta
          property='og:site_name'
          content='Monday Morning | The Student Media Body of NIT Rourkela, India'
        />
        <meta property='og:title' content='Live| Monday Morning' />
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
          content='https://mondaymorning.nitrkl.ac.in/live'
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
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Marginals>{isPageVisible ? <Live /> : <BlockScreen />}</Marginals>
      )}
    </>
  );
};

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/comingSoon',
      permanent: false,
    },
  };
}

// export async function getServerSideProps() {
/**
 * For lan restriction, if ever required
 * if (req.headers['x-forwarded-for']) {
 *  ip = req.headers['x-forwarded-for'].split(',')[0];
 * } else if (req.headers['x-real-ip']) {
 *  ip = req.connection.remoteAddress;
 * } else {
 *  ip = req.connection.remoteAddress;
 * }
 */
// }

export default LivePage;
