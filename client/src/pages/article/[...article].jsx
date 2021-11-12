import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

// Libraries
import { useMediaQuery } from '@material-ui/core';
import { useDrag } from 'react-use-gesture';
import { GraphClient } from '../../config/ApolloClient';
import STORES from '../../utils/getStores';

// Components
import Marginals from '../../components/marginals/Marginals';
import Article from '../../screens/Article';
import ActivityIndicator from '../../components/shared/ActivityIndicator';

// Assets
import theme from '../../config/themes/light';

// Queries
import getArticleByID from '../../graphql/queries/article/getArticleByID';
import getArticleLink, { getArticleSlug } from '../../utils/getArticleLink';

function ArticlePage({ article }) {
  const { isFallback } = useRouter();
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

  const bind = useDrag(({ down, movement: [mx, my] }) => {
    if (isMatch) {
      if (down && mx < -10) {
        setToggleSidebar(true);
      } else if (
        (down && mx > 10 && toggleSidebar) ||
        (down && my !== 0 && toggleSidebar)
      ) {
        setToggleSidebar(false);
      }
    }
  });

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
          content={`https://mondaymorning.nitrkl.ac.in${getArticleSlug(
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
      <Marginals>
        {isFallback || !article ? (
          <ActivityIndicator size={150} />
        ) : (
          <Article
            article={article}
            bind={bind}
            toggleSidebar={toggleSidebar}
          />
        )}
      </Marginals>
    </>
  );
}

export async function getStaticProps({
  params: {
    article: [articleId, articleSlug],
  },
  preview,
}) {
  const {
    data: { getArticleByID: article },
  } = await GraphClient.query({
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
      article,
    },
    revalidate:
      preview || article.publishStatus === 'PUBLISHED' ? 10 : 60 * 60 * 24 * 30, // 30 Days
  };
}

export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' };
}

export default ArticlePage;
