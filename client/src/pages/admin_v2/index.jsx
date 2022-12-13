import React from 'react';
import Paperbase from '../../components/admin_v2/Marginals/Marginals';

import getAccess from '../../utils/getAccess';

const Admin = () => {
  return <Paperbase />;
};

export default Admin;

export async function getServerSideProps(ctx) {
  const requiredPermissions = ['article.write.new'];
  const userPermissions = await getAccess({ ctx });

  const acsessPermitted = requiredPermissions.every((permission) => {
    return userPermissions.data.includes(permission);
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
}
