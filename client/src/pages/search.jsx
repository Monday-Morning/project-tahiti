import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

// Libraries
import { makeStyles, Container, Typography } from '@material-ui/core';
import Head from 'next/head';

import { GraphClient } from '../config/ApolloClient';

import searchArticles from '../graphql/queries/article/searchArticles';
import ArticleCard from '../components/widgets/article/RegularArticleCard';
import ArticleCardStack from '../components/widgets/article/ArticleCardStack';

const articleList = [
  {
    __typename: 'Article',
    id: '617af9fc86153cff9ba8178e',
    articleType: 'STANDARD',
    title: 'From One B To Another: The Transition From B.Tech To B-School',
    inshort:
      'Getting into a prestigious B-School for pursuing Management, has been one of the most sought after careers chosen by many graduates. Read the article to get insights about the CAT 2019 achievers.',
    authors: [
      { __typename: 'UserDetail', name: 'Chaitanya Kumar' },
      { __typename: 'UserDetail', name: 'Utkarsh Singh' },
      { __typename: 'UserDetail', name: 'Siddharth Kumar' },
    ],
    categories: [
      { __typename: 'ArticleCategory', number: 1, isSubcategory: false },
      { __typename: 'ArticleCategory', number: 2, isSubcategory: false },
      { __typename: 'ArticleCategory', number: 21, isSubcategory: true },
      { __typename: 'ArticleCategory', number: 17, isSubcategory: true },
    ],
    coverMedia: {
      __typename: 'CoverMedia',
      rectangle: {
        __typename: 'Media',
        store: 'ADAMANTIUM_ARCHIVE_A',
        storePath: '/adamantium/coverMedia/617af9e186153cff9ba81773.jpeg',
        mediaType: 'IMAGE',
        blurhash: 'U:Kdx#xav{jvTht6jDWYN{oIt8bIrrslX9oL',
      },
      square: {
        __typename: 'Media',
        store: 'ADAMANTIUM_ARCHIVE_A',
        storePath: '/adamantium/coverMedia/617af9dc86153cff9ba81770.jpeg',
        mediaType: 'IMAGE',
        blurhash: 'U~JIL;t6w[ofThs-ocoJI;jYogoIv}bFbHod',
      },
    },
    readTime: 300,
  },
  {
    __typename: 'Article',
    id: '617af9fc86153cff9ba8178e',
    articleType: 'STANDARD',
    title: 'From One B To Another: The Transition From B.Tech To B-School',
    inshort:
      'Getting into a prestigious B-School for pursuing Management, has been one of the most sought after careers chosen by many graduates. Read the article to get insights about the CAT 2019 achievers.',
    authors: [
      { __typename: 'UserDetail', name: 'Chaitanya Kumar' },
      { __typename: 'UserDetail', name: 'Utkarsh Singh' },
      { __typename: 'UserDetail', name: 'Siddharth Kumar' },
    ],
    categories: [
      { __typename: 'ArticleCategory', number: 1, isSubcategory: false },
      { __typename: 'ArticleCategory', number: 2, isSubcategory: false },
      { __typename: 'ArticleCategory', number: 21, isSubcategory: true },
      { __typename: 'ArticleCategory', number: 17, isSubcategory: true },
    ],
    coverMedia: {
      __typename: 'CoverMedia',
      rectangle: {
        __typename: 'Media',
        store: 'ADAMANTIUM_ARCHIVE_A',
        storePath: '/adamantium/coverMedia/617af9e186153cff9ba81773.jpeg',
        mediaType: 'IMAGE',
        blurhash: 'U:Kdx#xav{jvTht6jDWYN{oIt8bIrrslX9oL',
      },
      square: {
        __typename: 'Media',
        store: 'ADAMANTIUM_ARCHIVE_A',
        storePath: '/adamantium/coverMedia/617af9dc86153cff9ba81770.jpeg',
        mediaType: 'IMAGE',
        blurhash: 'U~JIL;t6w[ofThs-ocoJI;jYogoIv}bFbHod',
      },
    },
    readTime: 300,
  },
  {
    __typename: 'Article',
    id: '617af9fc86153cff9ba8178e',
    articleType: 'STANDARD',
    title: 'From One B To Another: The Transition From B.Tech To B-School',
    inshort:
      'Getting into a prestigious B-School for pursuing Management, has been one of the most sought after careers chosen by many graduates. Read the article to get insights about the CAT 2019 achievers.',
    authors: [
      { __typename: 'UserDetail', name: 'Chaitanya Kumar' },
      { __typename: 'UserDetail', name: 'Utkarsh Singh' },
      { __typename: 'UserDetail', name: 'Siddharth Kumar' },
    ],
    categories: [
      { __typename: 'ArticleCategory', number: 1, isSubcategory: false },
      { __typename: 'ArticleCategory', number: 2, isSubcategory: false },
      { __typename: 'ArticleCategory', number: 21, isSubcategory: true },
      { __typename: 'ArticleCategory', number: 17, isSubcategory: true },
    ],
    coverMedia: {
      __typename: 'CoverMedia',
      rectangle: {
        __typename: 'Media',
        store: 'ADAMANTIUM_ARCHIVE_A',
        storePath: '/adamantium/coverMedia/617af9e186153cff9ba81773.jpeg',
        mediaType: 'IMAGE',
        blurhash: 'U:Kdx#xav{jvTht6jDWYN{oIt8bIrrslX9oL',
      },
      square: {
        __typename: 'Media',
        store: 'ADAMANTIUM_ARCHIVE_A',
        storePath: '/adamantium/coverMedia/617af9dc86153cff9ba81770.jpeg',
        mediaType: 'IMAGE',
        blurhash: 'U~JIL;t6w[ofThs-ocoJI;jYogoIv}bFbHod',
      },
    },
    readTime: 300,
  },
  {
    __typename: 'Article',
    id: '617af9fc86153cff9ba8178e',
    articleType: 'STANDARD',
    title: 'From One B To Another: The Transition From B.Tech To B-School',
    inshort:
      'Getting into a prestigious B-School for pursuing Management, has been one of the most sought after careers chosen by many graduates. Read the article to get insights about the CAT 2019 achievers.',
    authors: [
      { __typename: 'UserDetail', name: 'Chaitanya Kumar' },
      { __typename: 'UserDetail', name: 'Utkarsh Singh' },
      { __typename: 'UserDetail', name: 'Siddharth Kumar' },
    ],
    categories: [
      { __typename: 'ArticleCategory', number: 1, isSubcategory: false },
      { __typename: 'ArticleCategory', number: 2, isSubcategory: false },
      { __typename: 'ArticleCategory', number: 21, isSubcategory: true },
      { __typename: 'ArticleCategory', number: 17, isSubcategory: true },
    ],
    coverMedia: {
      __typename: 'CoverMedia',
      rectangle: {
        __typename: 'Media',
        store: 'ADAMANTIUM_ARCHIVE_A',
        storePath: '/adamantium/coverMedia/617af9e186153cff9ba81773.jpeg',
        mediaType: 'IMAGE',
        blurhash: 'U:Kdx#xav{jvTht6jDWYN{oIt8bIrrslX9oL',
      },
      square: {
        __typename: 'Media',
        store: 'ADAMANTIUM_ARCHIVE_A',
        storePath: '/adamantium/coverMedia/617af9dc86153cff9ba81770.jpeg',
        mediaType: 'IMAGE',
        blurhash: 'U~JIL;t6w[ofThs-ocoJI;jYogoIv}bFbHod',
      },
    },
    readTime: 300,
  },
  {
    __typename: 'Article',
    id: '617af9fc86153cff9ba8178e',
    articleType: 'STANDARD',
    title: 'From One B To Another: The Transition From B.Tech To B-School',
    inshort:
      'Getting into a prestigious B-School for pursuing Management, has been one of the most sought after careers chosen by many graduates. Read the article to get insights about the CAT 2019 achievers.',
    authors: [
      { __typename: 'UserDetail', name: 'Chaitanya Kumar' },
      { __typename: 'UserDetail', name: 'Utkarsh Singh' },
      { __typename: 'UserDetail', name: 'Siddharth Kumar' },
    ],
    categories: [
      { __typename: 'ArticleCategory', number: 1, isSubcategory: false },
      { __typename: 'ArticleCategory', number: 2, isSubcategory: false },
      { __typename: 'ArticleCategory', number: 21, isSubcategory: true },
      { __typename: 'ArticleCategory', number: 17, isSubcategory: true },
    ],
    coverMedia: {
      __typename: 'CoverMedia',
      rectangle: {
        __typename: 'Media',
        store: 'ADAMANTIUM_ARCHIVE_A',
        storePath: '/adamantium/coverMedia/617af9e186153cff9ba81773.jpeg',
        mediaType: 'IMAGE',
        blurhash: 'U:Kdx#xav{jvTht6jDWYN{oIt8bIrrslX9oL',
      },
      square: {
        __typename: 'Media',
        store: 'ADAMANTIUM_ARCHIVE_A',
        storePath: '/adamantium/coverMedia/617af9dc86153cff9ba81770.jpeg',
        mediaType: 'IMAGE',
        blurhash: 'U~JIL;t6w[ofThs-ocoJI;jYogoIv}bFbHod',
      },
    },
    readTime: 300,
  },
];

const search = () => {
  const classes = useStyles();
  const router = useRouter();
  const [articles, setarticles] = useState(articleList);
  console.log(router.query.keyword);

  // useEffect(() => {
  //   const {
  //     data: { searchArticles: articleList },
  //   } = await GraphClient.query({
  //     query: searchArticles,
  //     variables: {
  //       keywords: 'Emergence',
  //       limit: 7,
  //     },
  //   });
  //   setarticles(articleList);
  // }, [router.query.keyword, articles]);

  // console.log(articles);

  return (
    <>
      <Head>
        {/* <!-- =============== Primary Meta Tags =============== --> */}
        <title>Search "{router.query.keyword}" | Monday Morning</title>
        <meta
          name='title'
          content={`Search "${router.query.keyword}" | Monday Morning`}
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

      <Container>
        <Typography variant='h3' component='h3' className={classes.text}>
          Search results for - "{router.query.keyword}"
          <ArticleCardStack articleList={articles} />
        </Typography>
      </Container>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  text: {
    marginTop: '40px',
  },
}));

export default search;
