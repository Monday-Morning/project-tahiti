import React from 'react';
import { parseCookies } from 'nookies';
import { getGraphClient } from '../../context/ApolloContextProvider';
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
    const graphClient = getGraphClient(false, cookies.firebaseToken);

    const {
      data: { listAllUsers: allUsers },
    } = await graphClient.query({
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
