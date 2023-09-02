import React from 'react';

import { parseCookies } from 'nookies';
import { getGraphClient } from '../../../context/ApolloContextProvider';
import getLatestIssues from '../../../graphql/queries/issues/getLatestIssues';

import Issues from '../../../screens/admin_v2/Issues.jsx';
import Custom500 from '../../500.jsx';

import getAccess from '../../../utils/getAccess';

const IssuePage = ({ isError, issues }) => {
  if (isError) {
    return <Custom500 />;
  }

  return <Issues issues={issues} />;
};

export default IssuePage;

export async function getServerSideProps(ctx) {
  try {
    const requiredPermissions = ['issue.read.unpublished'];
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
      data: { getLatestIssues: issues },
    } = await graphClient.query({
      query: getLatestIssues,
      variables: {
        onlyPublished: false,
        limit: 10,
        offset: 0,
      },
    });
    return {
      props: { issues, userPermissions },
    };
  } catch {
    return {
      props: {
        isError: true,
      },
    };
  }
}
