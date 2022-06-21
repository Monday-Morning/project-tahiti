import React from 'react';
import Head from 'next/head';
import Browse from '../../screens/admin/Browse';

//Components

const BrowsePage = () => {
  return (
    <>
      <Head>
        {/* <!-- =============== Primary Meta Tags =============== --> */}
        <title>Browse | Monday Morning</title>
        <meta name='title' content='Browse | Monday Morning' />
        <meta
          name='description'
          content='Monday Morning is the official Student Media Body of National Institute Of Technology Rourkela. Monday Morning covers all the events, issues and activities going on inside the campus. Monday Morning also serves as a link between the administration and the students.'
        />
      </Head>
      <Browse />
    </>
  );
};

export default BrowsePage;