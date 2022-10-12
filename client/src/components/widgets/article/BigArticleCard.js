import React from 'react';

import makeStyles from '@mui/styles/makeStyles';
import { Card, CardContent, Typography, useMediaQuery } from '@mui/material';
import moment from 'moment';
// import { Bookmark, Share2 } from 'react-feather';

// Components
import NewTabLink from '../../shared/links/NewTabLink';
import RegularArticleCard from './RegularArticleCard';

// Utils
import getCategory from '../../../utils/determineCategory';
import getArticleLink from '../../../utils/getArticleLink';

// Assets
import { DEFAULT_ARTICLE } from '../../../assets/placeholder/article';
import limitAuthor from '../../../utils/limitAuthor';
import STORES from '../../../utils/getStores';
import Image from 'next/image';

const BigArticleCard = ({
  isWitsdom,
  isGallery,
  isPhotostory,
  article: articleProp,
}) => {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width: 600px)');

  const isDefaultArticle = !articleProp?.title;
  const article = isDefaultArticle ? DEFAULT_ARTICLE : articleProp;

  if (matches)
    return (
      <RegularArticleCard
        {...{ isWitsdom, isGallery, isPhotostory }}
        article={article}
      />
    );

  return (
    <Card className={classes.root}>
      <NewTabLink
        className={classes.coverContainer}
        to={getArticleLink(article.id, article.title, {
          isWitsdom,
          isPhotostory,
          isGallery,
        })}
      >
        <div className={classes.coverContainerBox}>
          <Image
            className={classes.cover}
            src={
              STORES[article.coverMedia.rectangle.store] +
              encodeURI(article.coverMedia.rectangle.storePath)
            }
            layout='fill'
            alt='Cover'
          />
        </div>
      </NewTabLink>

      <CardContent className={classes.cardDetails}>
        <div className={classes.container}>
          <div>
            <div className={classes.categoriesContainer}>
              {article.categories.slice().map(({ number }, index) => (
                <Typography
                  // eslint-disable-next-line react/no-array-index-key
                  key={`${number}-${index}-bigArticleCard-category`}
                  variant='body2'
                  className={classes.category}
                >
                  {getCategory(number)}
                  {index === article.categories.length - 1 ? (
                    ''
                  ) : (
                    <span
                      style={{
                        textDecoration: 'none',
                        paddingLeft: '10px',
                        paddingRight: '10px',
                      }}
                    >
                      |
                    </span>
                  )}
                </Typography>
              ))}
            </div>

            <NewTabLink
              to={getArticleLink(article.id, article.title, {
                isWitsdom,
                isPhotostory,
                isGallery,
              })}
            >
              <Typography className={classes.title} variant='h2'>
                {article.title}
              </Typography>
            </NewTabLink>

            <div className={classes.wrapper}>
              <div className={classes.authorList}>
                {article.authors.map(({ name, details }, index) => {
                  let authorName = limitAuthor(name);
                  if (index < article.authors.length - 1) authorName += ', ';

                  return (
                    <NewTabLink to={`/portfolio/${details}/${name}`} key={name}>
                      <Typography
                        variant='body2'
                        key={name}
                        className={classes.author}
                      >
                        {authorName}
                      </Typography>
                    </NewTabLink>
                  );
                })}
              </div>

              <div className={classes.readTime}>
                <i className='far fa-clock' />
                <Typography variant='body2' style={{ width: 'auto' }}>
                  {moment
                    .utc(
                      moment
                        .duration(article.readTime, 'seconds')
                        .asMilliseconds(),
                    )
                    .format('m [mins]')}
                </Typography>
              </div>
            </div>
            <Typography variant='body1' className={classes.articleDescription}>
              {article.inshort}
            </Typography>
          </div>

          <div className={classes.footer}>
            <div className={classes.line} />
            {/* <Share2 size={18} className={classes.icons} />
            <Bookmark size={18} className={classes.icons} /> */}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'space-between',

    width: '100%',
    height: '445px',

    borderRadius: '10px',
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    boxShadow:
      '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 3px rgba(0, 0, 0, 0.12)',
  },

  coverContainer: {
    width: '65%',
    height: '100%',
  },
  coverContainerBox: {
    width: '100%',
    height: 'auto',
    '& > span': {
      position: 'unset !important',
    },
    '& > span > span': {
      display: 'none !important',
    },
    overflow: 'hidden',
    position: 'relative',
    cursor: 'pointer',
  },
  cover: {
    position: 'unset !important',
    width: 'auto !important',
    height: 'auto !important',
    objectFit: 'cover',
  },

  cardDetails: {
    width: '35%',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    paddingTop: '4rem',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },

  categoriesContainer: {
    width: '100%',
    height: 'auto',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',

    marginBottom: '10px',
  },
  category: {
    width: 'auto',
    fontFamily: 'Source Sans Pro',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '20px',
    color: theme.palette.secondary.neutral70,
  },

  title: {
    fontFamily: 'IBM Plex Sans',
    fontWeight: '600',
    fontSize: '1.5rem',
    lineHeight: '2rem',
    color: theme.palette.common.black,
    cursor: 'pointer',
  },

  wrapper: {
    paddingTop: '0.75rem',
    color: theme.palette.secondary.neutral70,

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  authorList: {
    width: 'auto',
    maxWidth: '75%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  author: {
    color: theme.palette.secondary.neutral70,
    fontFamily: 'Source Sans Pro',
    fontSize: '14px',
    lineHeight: '16px',
    fontWeight: '400',
    cursor: 'pointer',
    marginRight: '7px',
    marginTop: '5px',
  },

  readTime: {
    width: 'auto',
    display: 'flex',
    alignItems: 'center',
    '& i': {
      marginRight: '5px',
    },
  },

  articleDescription: {
    paddingTop: '1.5rem',
    fontFamily: 'Source Sans Pro',
    fontWeight: '400',
    lineHeight: '24px',
    fontSize: '16px',
    color: theme.palette.secondary.neutral90,
  },

  footer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '0rem',
  },
  line: {
    borderBottom: '1px solid ',
    borderColor: theme.palette.common.black,
    width: '-webkit-fill-available',
  },
}));

export default BigArticleCard;
