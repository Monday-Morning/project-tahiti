import React from 'react';
import Squiggle from '../../../screens/admin_v2/Squiggle';
import Custom500 from '../../500.jsx';
import getAccess from '../../../utils/getAccess';
import { parseCookies } from 'nookies';
import { getGraphClient } from '../../../context/ApolloContextProvider';
import listSquiggles from '../../../graphql/queries/squiggles/listSquiggles'
const SquigglePage = ({ isError, squiggles }) => {
  if (isError) {
    return <Custom500 />;
  }

  return <Squiggle squiggles={squiggles} />;
};

export default SquigglePage;


export async function getServerSideProps(ctx) {
  try {
    const requiredPermissions = ['squiggle.read.all'];
    const userPermissions = await getAccess({ ctx });

     if (!userPermissions.data) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }
    const acsessPermitted = requiredPermissions.every((permission) => {
      return userPermissions?.data?.includes(permission);
    });

    if (!acsessPermitted) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }
    const cookies = parseCookies(ctx);
    const graphClient = getGraphClient(false, cookies.firebaseToken);

    const {
      data: { listSquiggles: squiggles },
    } = await graphClient.query({
      query: listSquiggles,
      variables: {
        limit: 10,
        offset: 0,
      },
    });
    return {
      props: { squiggles, userPermissions },
    };
  } catch {
    return {
      props: {
        isError: true,
      },
    };
  }
}
