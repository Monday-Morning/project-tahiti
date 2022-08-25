import { useRouter } from 'next/router';

//Component
import Portfolio from '../../screens/Portfolio';
import Marginals from '../../components/marginals/Marginals';

//Graphql
import { GraphClient } from '../../config/ApolloClient';
import getUserByOldUserName from '../../graphql/queries/user/getUserByOldUserName';
import getUserById from '../../graphql/queries/user/getUserById';
import getListOfArticles from '../../graphql/queries/article/getListOfArticles';

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
    userId: [portfolioId, userName],
  },
}) {
  /**** to bring the portfolio URL in correct format - start ****/

  let user;

  if (!userName && typeof portfolioId === String) {
    user = await GraphClient.query({
      query: getUserByOldUserName,
      variables: {
        oldUserName: portfolioId,
      },
    });

    let {
      data: {
        getUserByOldUserName: { id, firstName, lastName },
      },
    } = user;

    if (!id) {
      if (!user.data.getUserById.id) {
        return {
          notFound: true,
        };
      }

      firstName = user.data.getUserByID.firstName;
      lastName = user.data.getUserByID.lastName;
    }

    return {
      redirect: {
        destination: lastName
          ? `/portfolio/${id}/${firstName.toLowerCase()}_${lastName.toLowerCase()}`
          : `/portfolio/${id}/${firstName.toLowerCase()}}`,
        permanent: false,
      },
    };
  }

  if (portfolioId) {
    user = await GraphClient.query({
      query: getUserById,
      variables: {
        getUserById: portfolioId,
      },
    });

    const _firstName = user.data.getUserByID?.firstName.toLowerCase();
    const _lastName = user.data.getUserByID?.lastName.toLowerCase();
    const _id = user.data.getUserByID?.id;

    if (
      _id &&
      ((_lastName && userName != `${_firstName}_${_lastName}`) ||
        (!_lastName && userName != `${_firstName}`))
    ) {
      return {
        redirect: {
          destination: _lastName
            ? `/portfolio/${_id}/${_firstName}_${_lastName}`
            : `/portfolio/${_id}/${_firstName}`,
          permanent: false,
        },
      };
    } else if (!_id) {
      return {
        notFound: true,
      };
    }
  }

  /**** to bring the portfolio URL in correct format - end ****/

  user = await GraphClient.query({
    query: getUserById,
    variables: {
      getUserById: portfolioId,
    },
  });

  let {
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

  const {
    data: { getListOfArticles: articleList },
  } = await GraphClient.query({
    query: getListOfArticles,
    variables: {
      ids: articleIdList,
      limit: 40,
    },
  });

  const noOfArticle = articleList.length;

  let { store, storePath } = picture;
  let profileImageLink = getStores[store] + storePath;

  let year = ' ';

  if (noOfArticle) {
    year = articleList[noOfArticle - 1].createdAt.substring(0, 4);
    year += '-' + (Number(year.substring(2)) + 1).toString();
  }

  return {
    props: {
      userId: portfolioId,
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
