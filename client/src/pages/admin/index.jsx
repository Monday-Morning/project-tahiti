import React from 'react';
import Head from 'next/head';
import Admin from '../../screens/admin/Admin';

//Components
import getAccess from '../../utils/getAccess';

const AdminPage = () => {
  return (
    <>
      <Head>
        {/* <!-- =============== Primary Meta Tags =============== --> */}
        <title>Admin | Monday Morning</title>
        <meta name='title' content='Live| Monday Morning' />
        <meta
          name='description'
          content='Monday Morning is the official Student Media Body of National Institute Of Technology Rourkela. Monday Morning covers all the events, issues and activities going on inside the campus. Monday Morning also serves as a link between the administration and the students.'
        />
      </Head>
      <Admin />
    </>
  );
};

export async function getServerSideProps(ctx) {
  const userPermissions = await getAccess(ctx);

  const requiredPermissions = ['article.write.self'];

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

  return {
    props: { userPermissions },
  };
}

export default AdminPage;
