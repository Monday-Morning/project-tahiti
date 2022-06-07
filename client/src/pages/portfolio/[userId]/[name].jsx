import { useRouter } from 'next/router';

//Component
import Portfolio from '../../../screens/Portfolio';
import Marginals from '../../../components/marginals/Marginals';

//Graphql
import { GraphClient } from '../../../config/ApolloClient';
import getUserById from '../../../graphql/queries/user/getUserById';
import getListOfArticles from '../../../graphql/queries/article/getListOfArticles';

//Store
import getStores from '../../../utils/getStores';

const PortfolioPage = ({
  userId,
  firstName,
  lastName,
  email,
  profileImageLink,
  articleList,
  noOfArticle,
  year,
}) => {
  const { isFallback } = useRouter();

  const user = {
    userId,
    firstName,
    lastName,
    email,
    profileImageLink,
    articleList,
    noOfArticle,
    year,
  };

  return (
    <>
      <Marginals>{!isFallback && <Portfolio user={user} />}</Marginals>
    </>
  );
};

export default PortfolioPage;

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params: { userId } }) {
  const user = await GraphClient.query({
    query: getUserById,
    variables: {
      getUserById: userId,
    },
  });
  if (!user.data.getUserByID) {
    return {
      notFound: true,
    };
  }
  const {
    data: {
      getUserByID: { firstName, lastName, email, picture, contributions },
    },
  } = user;

  const noProfilePage = ['Guest', 'Team'];

  if (noProfilePage.includes(firstName)) {
    return {
      notFound: true,
    };
  }

  const articleIdList = contributions
    .filter(({ model }) => model === 'Article')
    .reduce((prev, curr) => [...prev, curr.reference], []);

  const noOfArticle = articleIdList.length;

  const {
    data: { getListOfArticles: articleList },
  } = await GraphClient.query({
    query: getListOfArticles,
    variables: {
      ids: articleIdList,
      limit: 40,
    },
  });

  let { store, storePath } = picture;
  let profileImageLink = getStores[store] + storePath;

  let year = ' ';

  if (noOfArticle) {
    year = articleList[noOfArticle - 1].createdAt.substring(0, 4);
    year += '-' + (Number(year.substring(2)) + 1).toString();
  }

  return {
    props: {
      userId,
      firstName,
      lastName,
      email,
      profileImageLink,
      articleList,
      noOfArticle,
      year,
    },
  };
}
