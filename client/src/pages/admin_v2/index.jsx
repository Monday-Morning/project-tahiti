import React from 'react';

import Paperbase from '../../components/admin_v2/Marginals/Marginals';
import Custom500 from '../500.jsx';

import getAccess from '../../utils/getAccess';

const Admin = ({ isError }) => {
  if (isError) {
    return <Custom500 />;
  }

  return <Paperbase />;
};

export default Admin;

export async function getServerSideProps(ctx) {
  try {
    const requiredPermissions = ['article.write.new'];
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

    return {
      props: { userPermissions }, // will be passed to the page component as props
    };
  } catch {
    return {
      isError: true,
    };
  }
}
