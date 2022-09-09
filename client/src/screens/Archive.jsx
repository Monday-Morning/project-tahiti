import { React } from 'react';

// libraries
import { Container, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

// Components
import BackButton from '../components/shared/button/BackButton';
import ArticleCardStack from '../components/widgets/article/ArticleCardStack';
import Calendar from '../components/guide/calendar';

const articles = [
  {
    __typename: 'Article',
    id: '62d98aacce4cc1042322a826',
    articleType: 'STANDARD',
    title: 'Retracing the Steps to a Visionary leader: Prof. Somnath Mishra',
    inshort:
      'The Institute mourns the sudden demise of Prof Somnath Mishra, Principal REC (1974-1996). Tap to know more about the tales of the Visionary leader.',
    authors: [
      {
        __typename: 'UserDetail',
        name: 'Team MM',
        details: '629d1e8ab2c668f4d88fab25',
      },
    ],
    categories: [
      { __typename: 'ArticleCategory', number: 1, isSubcategory: null },
      { __typename: 'ArticleCategory', number: 12, isSubcategory: null },
    ],
    coverMedia: {
      __typename: 'CoverMedia',
      rectangle: {
        __typename: 'Media',
        store: 'ADAMANTIUM_ARCHIVE_A',
        storePath: '/article/cover/62d98ab0ce4cc1042322a82d.jpeg',
        mediaType: 'IMAGE',
        blurhash: null,
      },
      square: {
        __typename: 'Media',
        store: 'ADAMANTIUM_ARCHIVE_A',
        storePath: '/article/cover/62d98aacce4cc1042322a82a.jpeg',
        mediaType: 'IMAGE',
        blurhash: null,
      },
    },
    readTime: 177,
  },
  {
    __typename: 'Article',
    id: '62d98aacce4cc1042322a826',
    articleType: 'STANDARD',
    title: 'Retracing the Steps to a Visionary leader: Prof. Somnath Mishra',
    inshort:
      'The Institute mourns the sudden demise of Prof Somnath Mishra, Principal REC (1974-1996). Tap to know more about the tales of the Visionary leader.',
    authors: [
      {
        __typename: 'UserDetail',
        name: 'Team MM',
        details: '629d1e8ab2c668f4d88fab25',
      },
    ],
    categories: [
      { __typename: 'ArticleCategory', number: 1, isSubcategory: null },
      { __typename: 'ArticleCategory', number: 12, isSubcategory: null },
    ],
    coverMedia: {
      __typename: 'CoverMedia',
      rectangle: {
        __typename: 'Media',
        store: 'ADAMANTIUM_ARCHIVE_A',
        storePath: '/article/cover/62d98ab0ce4cc1042322a82d.jpeg',
        mediaType: 'IMAGE',
        blurhash: null,
      },
      square: {
        __typename: 'Media',
        store: 'ADAMANTIUM_ARCHIVE_A',
        storePath: '/article/cover/62d98aacce4cc1042322a82a.jpeg',
        mediaType: 'IMAGE',
        blurhash: null,
      },
    },
    readTime: 177,
  },
  {
    __typename: 'Article',
    id: '62d98aacce4cc1042322a826',
    articleType: 'STANDARD',
    title: 'Retracing the Steps to a Visionary leader: Prof. Somnath Mishra',
    inshort:
      'The Institute mourns the sudden demise of Prof Somnath Mishra, Principal REC (1974-1996). Tap to know more about the tales of the Visionary leader.',
    authors: [
      {
        __typename: 'UserDetail',
        name: 'Team MM',
        details: '629d1e8ab2c668f4d88fab25',
      },
    ],
    categories: [
      { __typename: 'ArticleCategory', number: 1, isSubcategory: null },
      { __typename: 'ArticleCategory', number: 12, isSubcategory: null },
    ],
    coverMedia: {
      __typename: 'CoverMedia',
      rectangle: {
        __typename: 'Media',
        store: 'ADAMANTIUM_ARCHIVE_A',
        storePath: '/article/cover/62d98ab0ce4cc1042322a82d.jpeg',
        mediaType: 'IMAGE',
        blurhash: null,
      },
      square: {
        __typename: 'Media',
        store: 'ADAMANTIUM_ARCHIVE_A',
        storePath: '/article/cover/62d98aacce4cc1042322a82a.jpeg',
        mediaType: 'IMAGE',
        blurhash: null,
      },
    },
    readTime: 177,
  },
  {
    __typename: 'Article',
    id: '62d98aacce4cc1042322a826',
    articleType: 'STANDARD',
    title: 'Retracing the Steps to a Visionary leader: Prof. Somnath Mishra',
    inshort:
      'The Institute mourns the sudden demise of Prof Somnath Mishra, Principal REC (1974-1996). Tap to know more about the tales of the Visionary leader.',
    authors: [
      {
        __typename: 'UserDetail',
        name: 'Team MM',
        details: '629d1e8ab2c668f4d88fab25',
      },
    ],
    categories: [
      { __typename: 'ArticleCategory', number: 1, isSubcategory: null },
      { __typename: 'ArticleCategory', number: 12, isSubcategory: null },
    ],
    coverMedia: {
      __typename: 'CoverMedia',
      rectangle: {
        __typename: 'Media',
        store: 'ADAMANTIUM_ARCHIVE_A',
        storePath: '/article/cover/62d98ab0ce4cc1042322a82d.jpeg',
        mediaType: 'IMAGE',
        blurhash: null,
      },
      square: {
        __typename: 'Media',
        store: 'ADAMANTIUM_ARCHIVE_A',
        storePath: '/article/cover/62d98aacce4cc1042322a82a.jpeg',
        mediaType: 'IMAGE',
        blurhash: null,
      },
    },
    readTime: 177,
  },
  {
    __typename: 'Article',
    id: '62d98aacce4cc1042322a826',
    articleType: 'STANDARD',
    title: 'Retracing the Steps to a Visionary leader: Prof. Somnath Mishra',
    inshort:
      'The Institute mourns the sudden demise of Prof Somnath Mishra, Principal REC (1974-1996). Tap to know more about the tales of the Visionary leader.',
    authors: [
      {
        __typename: 'UserDetail',
        name: 'Team MM',
        details: '629d1e8ab2c668f4d88fab25',
      },
    ],
    categories: [
      { __typename: 'ArticleCategory', number: 1, isSubcategory: null },
      { __typename: 'ArticleCategory', number: 12, isSubcategory: null },
    ],
    coverMedia: {
      __typename: 'CoverMedia',
      rectangle: {
        __typename: 'Media',
        store: 'ADAMANTIUM_ARCHIVE_A',
        storePath: '/article/cover/62d98ab0ce4cc1042322a82d.jpeg',
        mediaType: 'IMAGE',
        blurhash: null,
      },
      square: {
        __typename: 'Media',
        store: 'ADAMANTIUM_ARCHIVE_A',
        storePath: '/article/cover/62d98aacce4cc1042322a82a.jpeg',
        mediaType: 'IMAGE',
        blurhash: null,
      },
    },
    readTime: 177,
  },
  {
    __typename: 'Article',
    id: '62d98aacce4cc1042322a826',
    articleType: 'STANDARD',
    title: 'Retracing the Steps to a Visionary leader: Prof. Somnath Mishra',
    inshort:
      'The Institute mourns the sudden demise of Prof Somnath Mishra, Principal REC (1974-1996). Tap to know more about the tales of the Visionary leader.',
    authors: [
      {
        __typename: 'UserDetail',
        name: 'Team MM',
        details: '629d1e8ab2c668f4d88fab25',
      },
    ],
    categories: [
      { __typename: 'ArticleCategory', number: 1, isSubcategory: null },
      { __typename: 'ArticleCategory', number: 12, isSubcategory: null },
    ],
    coverMedia: {
      __typename: 'CoverMedia',
      rectangle: {
        __typename: 'Media',
        store: 'ADAMANTIUM_ARCHIVE_A',
        storePath: '/article/cover/62d98ab0ce4cc1042322a82d.jpeg',
        mediaType: 'IMAGE',
        blurhash: null,
      },
      square: {
        __typename: 'Media',
        store: 'ADAMANTIUM_ARCHIVE_A',
        storePath: '/article/cover/62d98aacce4cc1042322a82a.jpeg',
        mediaType: 'IMAGE',
        blurhash: null,
      },
    },
    readTime: 177,
  },
  {
    __typename: 'Article',
    id: '62d98aacce4cc1042322a826',
    articleType: 'STANDARD',
    title: 'Retracing the Steps to a Visionary leader: Prof. Somnath Mishra',
    inshort:
      'The Institute mourns the sudden demise of Prof Somnath Mishra, Principal REC (1974-1996). Tap to know more about the tales of the Visionary leader.',
    authors: [
      {
        __typename: 'UserDetail',
        name: 'Team MM',
        details: '629d1e8ab2c668f4d88fab25',
      },
    ],
    categories: [
      { __typename: 'ArticleCategory', number: 1, isSubcategory: null },
      { __typename: 'ArticleCategory', number: 12, isSubcategory: null },
    ],
    coverMedia: {
      __typename: 'CoverMedia',
      rectangle: {
        __typename: 'Media',
        store: 'ADAMANTIUM_ARCHIVE_A',
        storePath: '/article/cover/62d98ab0ce4cc1042322a82d.jpeg',
        mediaType: 'IMAGE',
        blurhash: null,
      },
      square: {
        __typename: 'Media',
        store: 'ADAMANTIUM_ARCHIVE_A',
        storePath: '/article/cover/62d98aacce4cc1042322a82a.jpeg',
        mediaType: 'IMAGE',
        blurhash: null,
      },
    },
    readTime: 177,
  },
  {
    __typename: 'Article',
    id: '62d98aacce4cc1042322a826',
    articleType: 'STANDARD',
    title: 'Retracing the Steps to a Visionary leader: Prof. Somnath Mishra',
    inshort:
      'The Institute mourns the sudden demise of Prof Somnath Mishra, Principal REC (1974-1996). Tap to know more about the tales of the Visionary leader.',
    authors: [
      {
        __typename: 'UserDetail',
        name: 'Team MM',
        details: '629d1e8ab2c668f4d88fab25',
      },
    ],
    categories: [
      { __typename: 'ArticleCategory', number: 1, isSubcategory: null },
      { __typename: 'ArticleCategory', number: 12, isSubcategory: null },
    ],
    coverMedia: {
      __typename: 'CoverMedia',
      rectangle: {
        __typename: 'Media',
        store: 'ADAMANTIUM_ARCHIVE_A',
        storePath: '/article/cover/62d98ab0ce4cc1042322a82d.jpeg',
        mediaType: 'IMAGE',
        blurhash: null,
      },
      square: {
        __typename: 'Media',
        store: 'ADAMANTIUM_ARCHIVE_A',
        storePath: '/article/cover/62d98aacce4cc1042322a82a.jpeg',
        mediaType: 'IMAGE',
        blurhash: null,
      },
    },
    readTime: 177,
  },
  {
    __typename: 'Article',
    id: '62d98aacce4cc1042322a826',
    articleType: 'STANDARD',
    title: 'Retracing the Steps to a Visionary leader: Prof. Somnath Mishra',
    inshort:
      'The Institute mourns the sudden demise of Prof Somnath Mishra, Principal REC (1974-1996). Tap to know more about the tales of the Visionary leader.',
    authors: [
      {
        __typename: 'UserDetail',
        name: 'Team MM',
        details: '629d1e8ab2c668f4d88fab25',
      },
    ],
    categories: [
      { __typename: 'ArticleCategory', number: 1, isSubcategory: null },
      { __typename: 'ArticleCategory', number: 12, isSubcategory: null },
    ],
    coverMedia: {
      __typename: 'CoverMedia',
      rectangle: {
        __typename: 'Media',
        store: 'ADAMANTIUM_ARCHIVE_A',
        storePath: '/article/cover/62d98ab0ce4cc1042322a82d.jpeg',
        mediaType: 'IMAGE',
        blurhash: null,
      },
      square: {
        __typename: 'Media',
        store: 'ADAMANTIUM_ARCHIVE_A',
        storePath: '/article/cover/62d98aacce4cc1042322a82a.jpeg',
        mediaType: 'IMAGE',
        blurhash: null,
      },
    },
    readTime: 177,
  },
];

function Archive() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <BackButton path='/' goTo='Home' />
        <Typography variant='h1' className={classes.head}>
          Archive
        </Typography>
      </Container>
      <Calendar />
      <Container>
        <ArticleCardStack articleList={articles.slice(0, 3)} />
        {articles.length > 3 && (
          <ArticleCardStack articleList={articles.slice(3, 6)} />
        )}
        {articles.length > 6 && (
          <ArticleCardStack articleList={articles.slice(6, 9)} />
        )}
      </Container>
    </div>
  );
}

export default Archive;

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '2rem',
    marginBottom: '2rem',
  },
  head: {
    color: theme.palette.primary.blue60,
    lineHeight: '2rem',
    margin: '2.7rem 0 2rem 0',
  },
}));
