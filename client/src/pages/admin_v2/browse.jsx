import Head from 'next/head';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';

import ActivityIndicator from '../../components/shared/ActivityIndicator';
import { getGraphClient } from '../../context/ApolloContextProvider';
import countTotalArticles from '../../graphql/queries/article/countTotalArticles';
import listAllArticle from '../../graphql/queries/article/listAllArticles';
import BrowseArticle from '../../screens/admin_v2/Browse';
import Custom500 from '../500';

const BrowseArticlePage = ({ articles, totalArticles, isError, error }) => {
  const { isFallback } = useRouter();
  if (isError) return <Custom500 error={error} />;

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

export default BrowseArticlePage;

export async function getServerSideProps(context) {
  try {
    const cookies = parseCookies(context);
    const graphClient = getGraphClient(false, cookies.firebaseToken);

    const {
      data: { countTotalArticles: totalArticles },
    } = await graphClient.query({
      query: countTotalArticles,
    });

    const {
      data: { listAllArticles: articles },
    } = await graphClient.query({
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
