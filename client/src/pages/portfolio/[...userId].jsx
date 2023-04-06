import { useRouter } from 'next/router';

//Component
import Portfolio from '../../screens/Portfolio';
import Marginals from '../../components/marginals/Marginals';

//Graphql
import { getGraphClient } from '../../context/ApolloContextProvider';
import getUserByOldUserName from '../../graphql/queries/user/getUserByOldUserName';
import getUserById from '../../graphql/queries/user/getUserById';
import getListOfArticles from '../../graphql/queries/article/getListOfArticles';
import { getUserSlug } from '../../utils/getUserSlug';

//Store
import getStores from '../../utils/getStores';
import Custom500 from '../500';
import Head from 'next/head';

const PortfolioPage = ({
  userId,
  firstName,
  lastName,
  email,
  profileImageLink,
  articleList,
  noOfArticle,
  year,
  isError,
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

  if (isError) {
    return (
      <>
        <Head>
          {/* <!-- =============== Primary Meta Tags =============== --> */}
          <title> Monday Morning </title>
          <meta name='title' content={`Monday Morning`} />
          <meta
            name='description'
            content='Monday Morning is the official Student Media Body of National Institute Of Technology Rourkela. Monday Morning covers all the events, issues and activities going on inside the campus. Monday Morning also serves as a link between the administration and the students.'
          />
          <meta
            name='keywords'
            content={`monday morning, mondaymorning, monday morning, mm, nit rkl, nit, nit rourkela, nitr, nitrkl, rkl, rourkela`}
          />

          {/* <!-- =============== Open Graph / Facebook =============== --> */}
          <meta property='og:type' content='website' />
          <meta
            property='og:url'
            content={`https://mondaymorning.nitrkl.ac.in/`}
          />
          <meta
            property='og:site_name'
            content='Monday Morning | The Student Media Body of NIT Rourkela, India'
          />
          <meta property='og:title' content={`Monday Morning`} />
          <meta
            property='og:description'
            content='Monday Morning is the Media Body of National Institute Of Technology Rourkela. Monday Morning covers all the events, issues and activities going on inside the campus. Monday morning also serves as a link between the administration and the students.'
          />
          <meta
            property='og:image'
            itemProp='image'
            content='/icon-256x256.png'
          />
          <meta
            property='og:image:url'
            content='https://mondaymorning.nitrkl.ac.in/icon-256x256.png'
          />
          <meta
            property='og:image:secure_url'
            content='https://mondaymorning.nitrkl.ac.in/icon-256x256.png'
          />
          <meta property='og:image:type' content='image/png' />

          {/* <!-- =============== Twitter =============== --> */}
          <meta property='twitter:card' content='summary_large_image' />
          <meta
            property='twitter:url'
            content={`https://mondaymorning.nitrkl.ac.in`}
          />
          <meta property='twitter:title' content='Monday Morning' />
          <meta
            property='twitter:image'
            content='https://mondaymorning.nitrkl.ac.in/icon-256x256.png'
          />
          <meta
            property='twitter:description'
            content='Monday Morning is the Media Body of National Institute Of Technology Rourkela. Monday Morning covers all the events, issues and activities going on inside the campus. Monday morning also serves as a link between the administration and the students.'
          />
        </Head>
        <Custom500 />
      </>
    );
  }

  return (
    <>
      <Head>
        {/* <!-- =============== Primary Meta Tags =============== --> */}
        <title>
          {!lastName ? firstName : firstName + ' ' + lastName} | Monday Morning
        </title>
        <meta
          name='title'
          content={`${
            !lastName ? firstName : firstName + ' ' + lastName
          } | Monday Morning`}
        />
        <meta
          name='description'
          content='Monday Morning is the official Student Media Body of National Institute Of Technology Rourkela. Monday Morning covers all the events, issues and activities going on inside the campus. Monday Morning also serves as a link between the administration and the students.'
        />
        <meta
          name='keywords'
          content={`${firstName},${lastName},monday morning, mondaymorning, monday morning, mm, nit rkl, nit, nit rourkela, nitr, nitrkl, rkl, rourkela`}
        />

        {/* <!-- =============== Open Graph / Facebook =============== --> */}
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content={`https://mondaymorning.nitrkl.ac.in/portfolio/${userId}/${firstName}_${lastName}`}
        />
        <meta
          property='og:site_name'
          content='Monday Morning | The Student Media Body of NIT Rourkela, India'
        />
        <meta
          property='og:title'
          content={`${
            !lastName ? firstName : firstName + ' ' + lastName
          } | Monday Morning`}
        />
        <meta
          property='og:description'
          content='Monday Morning is the Media Body of National Institute Of Technology Rourkela. Monday Morning covers all the events, issues and activities going on inside the campus. Monday morning also serves as a link between the administration and the students.'
        />
        <meta
          property='og:image'
          itemProp='image'
          content='/icon-256x256.png'
        />
        <meta property='og:image:url' content={profileImageLink} />
        <meta property='og:image:secure_url' content={profileImageLink} />
        <meta property='og:image:type' content='image/png' />

        {/* <!-- =============== Twitter =============== --> */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content={`https://mondaymorning.nitrkl.ac.in/portfolio/${userId}/${firstName}_${lastName}`}
        />
        <meta property='twitter:title' content='Monday Morning' />
        <meta
          property='twitter:image'
          content='https://mondaymorning.nitrkl.ac.in/icon-256x256.png'
        />
        <meta
          property='twitter:description'
          content='Monday Morning is the Media Body of National Institute Of Technology Rourkela. Monday Morning covers all the events, issues and activities going on inside the campus. Monday morning also serves as a link between the administration and the students.'
        />
      </Head>
      <Marginals>{!isFallback && <Portfolio user={user} />}</Marginals>
    </>
  );
};

export default PortfolioPage;

export async function getStaticProps({
  params: {
    userId: [portfolioId, userSlug],
  },
}) {
  /**** to bring the portfolio URL in correct format - start ****/

  try {
    const graphClient = getGraphClient(true);

    if (!userSlug && !portfolioId.match(/^[0-9a-f]{24}$/g)) {
      try {
        const {
          data: {
            getUserByOldUserName: { id, fullName },
          },
        } = await graphClient.query({
          query: getUserByOldUserName,
          variables: {
            oldUserName: portfolioId,
          },
        });

        return {
          redirect: {
            destination: `/portfolio/${id}/${getUserSlug(
              `${user.firstName}${user.lastName ? ' ' + user.lastName : ''}`,
            )}`,
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
    } = await graphClient.query({
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

    if (
      userSlug !==
      getUserSlug(
        `${user.firstName}${user.lastName ? ' ' + user.lastName : ''}`,
      )
    ) {
      return {
        redirect: {
          destination: `/portfolio/${user.id}/${getUserSlug(
            `${user.firstName}${user.lastName ? ' ' + user.lastName : ''}`,
          )}`,
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

    let _articleList = [];

    if (articleIdList.length > 0) {
      const {
        data: { getListOfArticles: articleList },
      } = await graphClient.query({
        query: getListOfArticles,
        variables: {
          ids: articleIdList,
          limit: 40,
        },
      });
      _articleList = articleList.filter((article) => article);
    }

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
  } catch (err) {
    return {
      props: {
        isError: true,
      },
    };
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
