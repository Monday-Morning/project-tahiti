import React, { useContext, useEffect, useState } from 'react';

// Libraries
import { Container } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';

// Components
import ActivityIndicator from '../components/shared/ActivityIndicator';
import SearchPage from '../screens/SearchPage';
import Marginals from '../components/marginals/Marginals';

// Queries
import searchArticles from '../graphql/queries/article/searchArticles';
import { apolloContext } from '../context/ApolloContextProvider';

const Search = () => {
  const router = useRouter();
  const graphClient = useContext(apolloContext);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const {
        data: { searchArticles: articleList },
      } = await graphClient.query({
        query: searchArticles,
        variables: {
          keywords: router.query.keyword,
        },
      });
      setArticles(articleList);
      setLoading(false);
    })();
  }, [router.query.keyword]);

  return (
    <>
      <Head>
        {/* <!-- =============== Primary Meta Tags =============== --> */}
        <title>{`Search ${router.query.keyword} | Monday Morning`}</title>
        <meta
          name='title'
          content={`Search ${router.query.keyword} | Monday Morning`}
        />
        <meta
          name='description'
          content='Monday Morning is the official Student Media Body of National Institute Of Technology Rourkela. Monday Morning covers all the events, issues and activities going on inside the campus. Monday Morning also serves as a link between the administration and the students.'
        />
        <meta
          name='keywords'
          content={`${router.query.keyword},monday morning, mondaymorning, monday morning, mm, nit rkl, nit, nit rourkela, nitr, nitrkl, rkl, rourkela`}
        />

        {/* <!-- =============== Open Graph / Facebook =============== --> */}
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content={`https://mondaymorning.nitrkl.ac.in/search?keyword=${router.query.keyword}`}
        />
        <meta
          property='og:site_name'
          content='Monday Morning | The Student Media Body of NIT Rourkela, India'
        />
        <meta
          property='og:title'
          content={`Search "${router.query.keyword}" | Monday Morning`}
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
          content={`https://mondaymorning.nitrkl.ac.in/search?keyword=${router.query.keyword}`}
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

      {loading ? (
        <ActivityIndicator size={150} />
      ) : (
        <Marginals>
          <SearchPage articles={articles} keyword={router.query.keyword} />
        </Marginals>
      )}
    </>
  );
};

export default Search;
