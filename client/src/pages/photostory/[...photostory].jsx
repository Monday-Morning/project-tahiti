import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

// Libraries
import { getGraphClient } from '../../context/ApolloContextProvider';
import STORES from '../../utils/getStores';

// Components
import Marginals from '../../components/marginals/Marginals';
import Photostory from '../../screens/Photostory';
import ActivityIndicator from '../../components/shared/ActivityIndicator';

// Queries
import getArticleByID from '../../graphql/queries/article/getArticleByID';
import getArticleLink, { getArticleSlug } from '../../utils/getArticleLink';
import Custom500 from '../500';

function PhotostoryPage({ photostory, isError }) {
  const { isFallback } = useRouter();

  if (isError) {
    return (
      <>
        <Head>
          {/* <!-- =============== Primary Meta Tags =============== --> */}
          <title>Photostory | Monday Morning</title>
          <meta name='title' content='Photostory | Monday Morning' />
          <meta
            name='description'
            content='Monday Morning is the official Student Media Body of National Institute Of Technology Rourkela. Monday Morning covers all the events, issues and activities going on inside the campus. Monday Morning also serves as a link between the administration and the students.'
          />
          <meta
            name='keywords'
            content='photostory, monday morning, mondaymorning, monday morning, mm, nit rkl, nit, nit rourkela, nitr, nitrkl, rkl, rourkela'
          />

          {/* <!-- =============== Open Graph / Facebook =============== --> */}
          <meta property='og:type' content='website' />
          <meta
            property='og:url'
            content='https://mondaymorning.nitrkl.ac.in/photostory'
          />
          <meta
            property='og:site_name'
            content='Monday Morning | The Student Media Body of NIT Rourkela, India'
          />
          <meta property='og:title' content='Photostory | Monday Morning' />
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
            content='https://mondaymorning.nitrkl.ac.in/photostory'
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
        <Custom500 />;
      </>
    );
  }

  return (
    <>
      <Head>
        {/* <!-- =============== Primary Meta Tags =============== --> */}
        <title>Photostory | Monday Morning</title>
        <meta name='title' content='Photostory | Monday Morning' />
        <meta
          name='description'
          content='Monday Morning is the official Student Media Body of National Institute Of Technology Rourkela. Monday Morning covers all the events, issues and activities going on inside the campus. Monday Morning also serves as a link between the administration and the students.'
        />
        <meta
          name='keywords'
          content='photostory, monday morning, mondaymorning, monday morning, mm, nit rkl, nit, nit rourkela, nitr, nitrkl, rkl, rourkela'
        />

        {/* <!-- =============== Open Graph / Facebook =============== --> */}
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://mondaymorning.nitrkl.ac.in/photostory'
        />
        <meta
          property='og:site_name'
          content='Monday Morning | The Student Media Body of NIT Rourkela, India'
        />
        <meta property='og:title' content={photostory.title} />
        <meta property='og:description' content={photostory.inshort} />
        <meta
          property='og:image'
          itemProp='image'
          content={
            STORES[photostory.coverMedia.rectangle.store] +
            encodeURI(photostory.coverMedia.rectangle.storePath)
          }
        />
        <meta
          property='og:image:url'
          content={
            STORES[photostory.coverMedia.rectangle.store] +
            encodeURI(photostory.coverMedia.rectangle.storePath)
          }
        />
        <meta
          property='og:image:secure_url'
          content={
            STORES[photostory.coverMedia.rectangle.store] +
            encodeURI(photostory.coverMedia.rectangle.storePath)
          }
        />
        <meta property='og:image:type' content='image/png' />

        {/* <!-- =============== Twitter =============== --> */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content={`https://mondaymorning.nitrkl.ac.in${getArticleLink(
            photostory.id,
            photostory.title,
            {
              isPhotostory: true,
            },
          )}`}
        />
        <meta property='twitter:title' content='Monday Morning' />
        <meta
          property='twitter:image'
          content={
            STORES[photostory.coverMedia.rectangle.store] +
            encodeURI(photostory.coverMedia.rectangle.storePath)
          }
        />
        <meta property='twitter:description' content={photostory.inshort} />
      </Head>
      {isFallback || !photostory ? (
        <ActivityIndicator size={150} />
      ) : (
        <Marginals>
          <Photostory photostory={photostory} />
        </Marginals>
      )}
    </>
  );
}

export async function getStaticProps({
  params: {
    photostory: [photostoryId, photostorySlug],
  },
  preview,
}) {
  try {
    const graphClient = getGraphClient(true);

    const {
      data: { getArticleByID: photostory },
    } = await graphClient.query({
      query: getArticleByID,
      variables: { id: photostoryId },
    });

    if (!photostory) {
      return {
        notFound: true,
      };
    }

    if (photostorySlug !== getArticleSlug(photostory.title)) {
      return {
        redirect: {
          destination: getArticleLink(photostoryId, photostory.title),
          permanent: false,
        },
      };
    }

    return {
      props: {
        key: photostoryId,
        photostory,
      },
      revalidate:
        preview || photostory.publishStatus === 'PUBLISHED'
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

export default PhotostoryPage;
