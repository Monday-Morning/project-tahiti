import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

// Libraries
import { getGraphClient } from '../../context/ApolloContextProvider';
import STORES from '../../utils/getStores';

// Components
import Marginals from '../../components/marginals/Marginals';
import Article from '../../screens/Article';
import ActivityIndicator from '../../components/shared/ActivityIndicator';

// Queries
import getArticleByID from '../../graphql/queries/article/getArticleByID';
import getArticleByOldID from '../../graphql/queries/article/getArticleByOldID';
import getArticleLink, { getArticleSlug } from '../../utils/getArticleLink';
import Custom500 from '../500';

function ArticlePage({ article, isError }) {
  const { isFallback } = useRouter();

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
        <title>{article.title} | Monday Morning</title>
        <meta name='title' content={`${article.title} | Monday Morning`} />
        <meta name='description' content={article.inshort} />
        <meta
          name='keywords'
          content={[
            ...article.tags.map((item) => item.name),
            'monday morning',
            'mondaymorning',
            'monday morning',
            'mm',
            'nit rkl',
            'nit',
            'nit rourkela',
            'nitr',
            'nitrkl',
            'rkl',
            'rourkela',
          ].join(', ')}
        />

        {/* <!-- =============== Open Graph / Facebook =============== --> */}
        <meta property='og:type' content='article' />
        <meta
          property='og:url'
          content={`https://mondaymorning.nitrkl.ac.in${getArticleSlug(
            article.title,
          )}`}
        />
        <meta
          property='og:site_name'
          content='Monday Morning | The Student Media Body of NIT Rourkela, India'
        />
        <meta property='og:title' content={article.title} />
        <meta property='og:description' content={article.inshort} />
        <meta
          property='og:image'
          itemProp='image'
          content={
            STORES[article.coverMedia.rectangle.store] +
            encodeURI(article.coverMedia.rectangle.storePath)
          }
        />
        <meta
          property='og:image:url'
          content={
            STORES[article.coverMedia.rectangle.store] +
            encodeURI(article.coverMedia.rectangle.storePath)
          }
        />
        <meta
          property='og:image:secure_url'
          content={
            STORES[article.coverMedia.rectangle.store] +
            encodeURI(article.coverMedia.rectangle.storePath)
          }
        />
        <meta property='og:image:type' content='image/png' />

        {/* <!-- =============== Facebook Instant Article =============== --> */}
        <meta
          property='article:publisher'
          content='https://www.facebook.com/mondaymorningnitr/'
        />
        <meta
          property='article:published_time'
          content={new Date(article.updatedAt).toISOString()}
        />
        <meta property='fb:app_id' content='800979823283025' />
        <meta property='fb:pages' content='146541445376828' />

        {/* <!-- =============== Twitter =============== --> */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content={`https://mondaymorning.nitrkl.ac.in${getArticleLink(
            article.id,
            article.title,
          )}`}
        />
        <meta property='twitter:title' content='Monday Morning' />
        <meta
          property='twitter:image'
          content={
            STORES[article.coverMedia.rectangle.store] +
            encodeURI(article.coverMedia.rectangle.storePath)
          }
        />
        <meta property='twitter:description' content={article.inshort} />
      </Head>
      {isFallback || !article ? (
        <ActivityIndicator size={150} />
      ) : (
        <Marginals>
          <Article article={article} />
        </Marginals>
      )}
    </>
  );
}

export async function getStaticProps({
  params: {
    article: [articleId, articleSlug, _date, oldArticleLink],
  },
  preview,
}) {
  try {
    const graphClient = getGraphClient(true);

    if (oldArticleLink) {
      const {
        data: { getArticleByOldID: article },
      } = await graphClient.query({
        query: getArticleByOldID,
        variables: { id: parseInt(oldArticleLink.split('-')[0]) },
      });

      if (!article) {
        return {
          notFound: true,
        };
      }

      return {
        redirect: {
          destination: getArticleLink(article.id, article.title),
          permanent: false,
        },
      };
    }

    const {
      data: { getArticleByID: article },
    } = await graphClient.query({
      query: getArticleByID,
      variables: { id: articleId },
    });

    if (!article) {
      return {
        notFound: true,
      };
    }

    if (articleSlug !== getArticleSlug(article.title)) {
      return {
        redirect: {
          destination: getArticleLink(articleId, article.title),
          permanent: false,
        },
      };
    }

    return {
      props: {
        key: articleId,
        article,
      },
      revalidate:
        preview || article.publishStatus === 'PUBLISHED'
          ? 10
          : 60 * 60 * 24 * 30, // 30 Days
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

export default ArticlePage;
