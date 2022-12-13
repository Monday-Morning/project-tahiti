import { useRouter } from 'next/router';

import ActivityIndicator from '../../components/shared/ActivityIndicator';
import BrowseArticle from '../../screens/admin_v2/Browse';
import Custom500 from '../500';

import { parseCookies } from 'nookies';
import { getApolloLink, GraphClient } from '../../config/ApolloClient';
import listAllArticle from '../../graphql/queries/article/listAllArticles';
import countTotalArticles from '../../graphql/queries/article/countTotalArticles';
import Head from 'next/head';

const browseArticlePage = ({ articles, totalArticles, isError, error }) => {
  const { isFallback } = useRouter();
  console.log(articles, totalArticles);
  if (isError) return <Custom500 error={error} />;
  console.log(isFallback);
  console.log(!isFallback && articles && totalArticles);

  return (
    <>
      <Head>
        <title>Browse</title>
        <meta name='title' content='Browse | Monday Morning ' />
      </Head>
      {!isFallback && articles && totalArticles ? (
        <BrowseArticle articles={articles} totalArticles={totalArticles} />
      ) : (
        <ActivityIndicator size={150} />
      )}
    </>
  );
};

export default browseArticlePage;

export async function getServerSideProps(context) {
  try {
    const cookies = parseCookies(context);
    GraphClient.setLink(getApolloLink(cookies.firebaseToken));

    const {
      data: { countTotalArticles: totalArticles },
    } = await GraphClient.query({
      query: countTotalArticles,
    });

    const {
      data: { listAllArticles: articles },
    } = await GraphClient.query({
      query: listAllArticle,
      variables: { limit: 25, offset: 0, onlyPublished: false },
    });

    return {
      props: { articles, totalArticles },
    };
  } catch (error) {
    return {
      props: { isError: true, error: error.message },
    };
  }
}
