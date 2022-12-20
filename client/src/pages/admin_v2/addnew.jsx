import React from 'react';
import { parseCookies } from 'nookies';
import { getApolloLink, GraphClient } from '../../config/ApolloClient';
import listAllUser from '../../graphql/queries/user/listAllUser';

import AddNew from '../../screens/admin_v2/AddNew';
import Custom500 from '../500';

const AddNewPage = ({ allUsers, isError, error }) => {
  if (isError) {
    return <Custom500 error={error} />;
  }
  return <AddNew allUsers={allUsers} />;
};

export default AddNewPage;

export async function getServerSideProps(context) {
  try {
    const cookies = parseCookies(context);
    GraphClient.setLink(getApolloLink(cookies.firebaseToken));

    const {
      data: { listAllUsers: allUsers },
    } = await GraphClient.query({
      query: listAllUser,
      variables: { accountType: 2, limit: 10000 },
    });

    return {
      props: { allUsers, token: cookies.firebaseToken, cookies },
    };
  } catch (error) {
    return {
      props: { isError: true, error: error.message },
    };
  }
}
