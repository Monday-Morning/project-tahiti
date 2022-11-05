import { useRouter } from 'next/router';

//Component
import Portfolio from '../../screens/Portfolio';
import Marginals from '../../components/marginals/Marginals';

//Graphql
import { GraphClient } from '../../config/ApolloClient';
import getUserByOldUserName from '../../graphql/queries/user/getUserByOldUserName';
import getUserById from '../../graphql/queries/user/getUserById';
import getListOfArticles from '../../graphql/queries/article/getListOfArticles';
import { getUserSlug } from '../../utils/getUserSlug';

//Store
import getStores from '../../utils/getStores';

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

export async function getStaticProps({
  params: {
    userId: [portfolioId, userSlug],
  },
}) {
  /**** to bring the portfolio URL in correct format - start ****/

  if (!userSlug && !portfolioId.match(/^[0-9a-f]{24}$/g)) {
    try {
      const {
        data: {
          getUserByOldUserName: { id, fullName },
        },
      } = await GraphClient.query({
        query: getUserByOldUserName,
        variables: {
          oldUserName: portfolioId,
        },
      });

      return {
        redirect: {
          destination: `/portfolio/${id}/${getUserSlug(fullName)}`,
          permanent: false,
        },
      };
    } catch {
      return {
        notFound: true,
      };
    }
  }

  const {
    data: { getUserByID: user },
  } = await GraphClient.query({
    query: getUserById,
    variables: {
      getUserById: portfolioId,
    },
  });

  if (!user) {
    return {
      notFound: true,
    };
  }

  if (userSlug !== getUserSlug(user.fullName)) {
    return {
      redirect: {
        destination: `/portfolio/${user.id}/${getUserSlug(user.fullName)}`,
        permanent: false,
      },
    };
  }

  /**** to bring the portfolio URL in correct format - end ****/

  const { firstName, lastName, email, picture, contributions } = user;

  const noProfilePage = ['Guest', 'Team'];

  if (noProfilePage.includes(firstName)) {
    return {
      notFound: true,
    };
  }

  const articleIdList = contributions
    .filter(({ model }) => model === 'Article')
    .reduce((prev, curr) => [...prev, curr.reference], []);

  const {
    data: { getListOfArticles: articleList },
  } = await GraphClient.query({
    query: getListOfArticles,
    variables: {
      ids: articleIdList,
      limit: 40,
    },
  });

  const _articleList = articleList.filter((article) => article);
  const noOfArticle = _articleList.length;

  let { store, storePath } = picture;
  let profileImageLink = getStores[store] + storePath;

  let year = ' ';

  if (noOfArticle) {
    year = _articleList[noOfArticle - 1].createdAt.substring(0, 4);
    year += '-' + (Number(year.substring(2)) + 1).toString();
  }

  return {
    props: {
      userId: portfolioId,
      firstName,
      lastName,
      email,
      profileImageLink,
      articleList: _articleList,
      noOfArticle,
      year,
    },
    revalidate: 60 * 60 * 24 * 7,
  };
}
