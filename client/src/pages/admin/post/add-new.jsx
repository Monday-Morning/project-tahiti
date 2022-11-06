import React from 'react';
import Head from 'next/head';
import { parseCookies } from 'nookies';

// components
import AddNew from '../../../screens/admin/AddNew';
import Admin from '../../../screens/admin/Admin';

import getAccess from '../../../utils/getAccess';
import { getApolloLink, GraphClient } from '../../../config/ApolloClient';
import listAllUser from '../../../graphql/queries/user/listAllUser';

const AddNewPage = ({ userPermissions, allUsers }) => {
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
        <AddNew userPermissions={userPermissions} allUsers={allUsers} />
      </Admin>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const userPermissions = await getAccess(ctx);

  const requiredPermissions = ['article.write.new'];

  const permissionCheckPass = userPermissions.some((permission) =>
    requiredPermissions.includes(permission),
  );

  if (!permissionCheckPass) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const cookies = parseCookies(ctx);
  GraphClient.setLink(getApolloLink(cookies.firebaseToken));
  const {
    data: { listAllUsers: allUsers },
  } = await GraphClient.query({
    query: listAllUser,
    variables: { accountType: 2, limit: 10000 },
  });

  return {
    props: { userPermissions, allUsers }, // will be passed to the page component as props
  };
}

export default AddNewPage;
