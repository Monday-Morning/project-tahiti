import React from 'react';

// libraries
import { Container, Typography,makeStyles,Button } from '@material-ui/core';



// Components
import BigCarousel from '../components/widgets/BigCarousel';



// Placeholder
import { PHOTOSTORY } from '../assets/placeholder/photostory';


//
import ArticleCardStack from '../components/widgets/article/ArticleCardStack';





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





function Allphotostory() {
  const classes = useStyles();
  return (
<div className={classes.root}>
      <Container>
        <div className={classes.header}>
          <Typography variant='h1' className={classes.head}>
            Photostory
          </Typography>
        </div>
        </Container>
       <div className={classes.carouselWrapper}>
     
          <BigCarousel
        head='XVII Convocation'
        navigator=''
        IMAGE={PHOTOSTORY.image}
      />
        
        <div className={classes.Button}>
        <Button
                  type='submit'
                  variant='contained'
                  color='primary'
                  className={classes.submitButton}
                >
                  <span className={classes.buttonText}>Checkout the Gallery</span>
                </Button>
                </div>
      </div>
      <Container>
      <ArticleCardStack
          articleList={articleList}
        />
        <ArticleCardStack
          articleList={articleList}
        />
        </Container>
    </div>
  );
}

export default Allphotostory;



const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '2rem',
    marginBottom: '2rem',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '2.7rem 0 2rem 0',
  },
  head: {
    color: theme.palette.primary.blue60,
    lineHeight: '2rem',
  },

  carouselWrapper: {
    backgroundColor: theme.palette.secondary.main,
    padding: '0px 0px 24px 0px',
    [theme.breakpoints.down('xs')]: {
      padding: '12px 0px',
    },
  },
  submitButton:{
    display: 'flex',
    justifyContent: 'space-between',
  },
  Button:{
    display: 'flex',
    direction: 'row',
    justifyContent: 'center',
  }
}))