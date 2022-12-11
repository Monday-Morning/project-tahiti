import React from 'react';
import { useRouter } from 'next/router';

import Custom500 from '../../500';
import ActivityIndicator from '../../../components/shared/ActivityIndicator';

import { parseCookies } from 'nookies';
import { getApolloLink, GraphClient } from '../../../config/ApolloClient';
import getRestrictedArticleData from '../../../graphql/queries/article/getRestrictedArticleData';
import listAllUser from '../../../graphql/queries/user/listAllUser';
import EditArticle from '../../../screens/admin_v2/Edit';

const EditPage = ({ allUsers, article, isError, error }) => {
  const { isFallback } = useRouter();

  if (isError || !article || !allUsers) {
    return <Custom500 error={error} />;
  }

  return (
    <>
      {isFallback && !article && !allUsers ? (
        <ActivityIndicator />
      ) : (
        <EditArticle allUsers={allUsers} article={article} />
      )}
    </>
  );
};

export default EditPage;

export async function getServerSideProps(context) {
  try {
    const id = context.params.id;

    const cookies = parseCookies(context);
    GraphClient.setLink(getApolloLink(cookies.firebaseToken));

    const {
      data: { listAllUsers: allUsers },
    } = await GraphClient.query({
      query: listAllUser,
      variables: { accountType: 2, limit: 10000 },
    });

    const {
      data: { getArticleByID: article },
    } = await GraphClient.query({
      query: getRestrictedArticleData,
      variables: { id },
    });

    return {
      props: { allUsers, article },
    };
  } catch (error) {
    return {
      props: { isError: true, error: error.message },
    };
  }
}
