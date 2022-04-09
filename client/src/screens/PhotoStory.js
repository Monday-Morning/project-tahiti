import React from 'react';


// libraries
import { Container } from '@material-ui/core';

// Components
import Header from '../components/photostory/Header';
import Body from '../components/photostory/Body';
import Comments from '../components/article/comments';
import RecommendedArticles from '../components/article/RecommendedArticles';

// Placeholder
import { PHOTOSTORY } from '../assets/placeholder/photostory';


const articleList = [
  {
    __typename: 'Article',
    id: '617af9fc86153cff9ba8178e',
    articleType: 'STANDARD',
    title: 'From One B To Another: The Transition From B.Tech To B-School',
    inshort: 'Getting into a prestigious B-School for pursuing Management, has been one of the most sought after careers chosen by many graduates. Read the article to get insights about the CAT 2019 achievers.',
    authors: [
      { __typename: 'UserDetail', name: 'Chaitanya Kumar' },
      { __typename: 'UserDetail', name: 'Utkarsh Singh' },
      { __typename: 'UserDetail', name: 'Siddharth Kumar' }
    ],
    categories: [
      { __typename: 'ArticleCategory', number: 1, isSubcategory: false },
      { __typename: 'ArticleCategory', number: 2, isSubcategory: false },
      { __typename: 'ArticleCategory', number: 21, isSubcategory: true },
      { __typename: 'ArticleCategory', number: 17, isSubcategory: true }
    ],
    coverMedia: {
      __typename: 'CoverMedia',
      rectangle: {
        __typename: 'Media',
        store: 'ADAMANTIUM_ARCHIVE_A',
        storePath: '/adamantium/coverMedia/617af9e186153cff9ba81773.jpeg',
        mediaType: 'IMAGE',
        blurhash: 'U:Kdx#xav{jvTht6jDWYN{oIt8bIrrslX9oL'
      },
      square: {
        __typename: 'Media',
        store: 'ADAMANTIUM_ARCHIVE_A',
        storePath: '/adamantium/coverMedia/617af9dc86153cff9ba81770.jpeg',
        mediaType: 'IMAGE',
        blurhash: 'U~JIL;t6w[ofThs-ocoJI;jYogoIv}bFbHod'
      }
    },
    readTime: 300
  },
  {
    __typename: 'Article',
    id: '617af9fc86153cff9ba8178e',
    articleType: 'STANDARD',
    title: 'From One B To Another: The Transition From B.Tech To B-School',
    inshort: 'Getting into a prestigious B-School for pursuing Management, has been one of the most sought after careers chosen by many graduates. Read the article to get insights about the CAT 2019 achievers.',
    authors: [
      { __typename: 'UserDetail', name: 'Chaitanya Kumar' },
      { __typename: 'UserDetail', name: 'Utkarsh Singh' },
      { __typename: 'UserDetail', name: 'Siddharth Kumar' }
    ],
    categories: [
      { __typename: 'ArticleCategory', number: 1, isSubcategory: false },
      { __typename: 'ArticleCategory', number: 2, isSubcategory: false },
      { __typename: 'ArticleCategory', number: 21, isSubcategory: true },
      { __typename: 'ArticleCategory', number: 17, isSubcategory: true }
    ],
    coverMedia: {
      __typename: 'CoverMedia',
      rectangle: {
        __typename: 'Media',
        store: 'ADAMANTIUM_ARCHIVE_A',
        storePath: '/adamantium/coverMedia/617af9e186153cff9ba81773.jpeg',
        mediaType: 'IMAGE',
        blurhash: 'U:Kdx#xav{jvTht6jDWYN{oIt8bIrrslX9oL'
      },
      square: {
        __typename: 'Media',
        store: 'ADAMANTIUM_ARCHIVE_A',
        storePath: '/adamantium/coverMedia/617af9dc86153cff9ba81770.jpeg',
        mediaType: 'IMAGE',
        blurhash: 'U~JIL;t6w[ofThs-ocoJI;jYogoIv}bFbHod'
      }
    },
    readTime: 300
  },
  {
    __typename: 'Article',
    id: '617af9fc86153cff9ba8178e',
    articleType: 'STANDARD',
    title: 'From One B To Another: The Transition From B.Tech To B-School',
    inshort: 'Getting into a prestigious B-School for pursuing Management, has been one of the most sought after careers chosen by many graduates. Read the article to get insights about the CAT 2019 achievers.',
    authors: [
      { __typename: 'UserDetail', name: 'Chaitanya Kumar' },
      { __typename: 'UserDetail', name: 'Utkarsh Singh' },
      { __typename: 'UserDetail', name: 'Siddharth Kumar' }
    ],
    categories: [
      { __typename: 'ArticleCategory', number: 1, isSubcategory: false },
      { __typename: 'ArticleCategory', number: 2, isSubcategory: false },
      { __typename: 'ArticleCategory', number: 21, isSubcategory: true },
      { __typename: 'ArticleCategory', number: 17, isSubcategory: true }
    ],
    coverMedia: {
      __typename: 'CoverMedia',
      rectangle: {
        __typename: 'Media',
        store: 'ADAMANTIUM_ARCHIVE_A',
        storePath: '/adamantium/coverMedia/617af9e186153cff9ba81773.jpeg',
        mediaType: 'IMAGE',
        blurhash: 'U:Kdx#xav{jvTht6jDWYN{oIt8bIrrslX9oL'
      },
      square: {
        __typename: 'Media',
        store: 'ADAMANTIUM_ARCHIVE_A',
        storePath: '/adamantium/coverMedia/617af9dc86153cff9ba81770.jpeg',
        mediaType: 'IMAGE',
        blurhash: 'U~JIL;t6w[ofThs-ocoJI;jYogoIv}bFbHod'
      }
    },
    readTime: 300
  }
]

function PhotoStory() {
  return (
    <div>
      <Header DATA={PHOTOSTORY} />
      <Body />
      <hr />
      <Container>
        <Comments />
      </Container>

      <RecommendedArticles title='More from Photostories' articleList={articleList} />
    </div>
  );
}

export default PhotoStory;
