import React from 'react';
import Poll from '../../screens/admin_v2/Poll';
import getAccess from '../../utils/getAccess';
import { parseCookies } from 'nookies';
import { getGraphClient } from '../../context/ApolloContextProvider';
import Custom500 from '../500.jsx';

const PollPage = ({ isError, PollList }) => {
  if (isError) {
    return <Custom500 />;
  }
  return <Poll PollList={PollList} />;
};
export default PollPage;
export async function getServerSideProps(ctx) {
  try {
    const requiredPermissions = ['poll.write.restricted'];
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
    return {
      props: { userPermissions },
    };
  } catch {
    return {
      props: {
        isError: true,
      },
    };
  }
}
