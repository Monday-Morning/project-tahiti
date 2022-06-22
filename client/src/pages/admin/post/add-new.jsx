import React from 'react';
import Head from 'next/head';

// components
import AddNew from '../../../screens/admin/AddNew';
import Admin from '../../../screens/admin/Admin';

const AddNewPage = () => {
  return (
    <>
      <Head>
        {/* <!-- =============== Primary Meta Tags =============== --> */}
        <title>Add New | Monday Morning</title>
        <meta name='title' content='Add New | Monday Morning' />
        <meta
          name='description'
          content='Monday Morning is the official Student Media Body of National Institute Of Technology Rourkela. Monday Morning covers all the events, issues and activities going on inside the campus. Monday Morning also serves as a link between the administration and the students.'
        />
      </Head>
      <Admin>
        <AddNew />
      </Admin>
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

export default AddNewPage;
