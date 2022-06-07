import React from 'react';
import Image from 'next/image';

// libraries
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';
import moment from 'moment';

// Components
import NewTabLink from '../../shared/links/NewTabLink';

// Utils
import getCategory from '../../../utils/determineCategory';
import getArticleLink from '../../../utils/getArticleLink';
import limitString from '../../../utils/limitString';
// import limitAuthor from '../../../utils/limitAuthor';
import STORES from '../../../utils/getStores';

// Assets
import { DEFAULT_ARTICLE } from '../../../assets/placeholder/article';
import limitAuthor from '../../../utils/limitAuthor';

const ArticleCard = ({
  className,
  carousel,
  isWitsdom,
  isGallery,
  isPhotostory,
  article: articleProp,
}) => {
  const classes = useStyles({ carousel });

  const isDefaultArticle = !articleProp?.title;
  const article = isDefaultArticle ? DEFAULT_ARTICLE : articleProp;
  return (
    <Card className={`${classes.root} ${className}`}>
      <NewTabLink
        to={getArticleLink(article.id, article.title, {
          isWitsdom,
          isPhotostory,
          isGallery,
        })}
        className={classes.coverContainer}
        style={{
          backgroundImage: `url(${DEFAULT_ARTICLE.coverMedia.rectangle.storePath})`,
        }}
      >
        <div className={classes.featuredImageContainer}>
          <Image
            className={classes.featuredImage}
            src={
              STORES[article.coverMedia.rectangle.store] +
              encodeURI(article.coverMedia.rectangle.storePath)
            }
            layout='fill'
            alt='Featured'
          />
        </div>
      </NewTabLink>

      <CardContent className={classes.cardContent}>
        <div className={classes.categoriesContainer}>
          {/* filter is done to get the categories where subcategory is true */}
          {/* slice is done to reduce the amount of categories so that frontend looks good */}
          {article.categories
            .filter(({ subcategory }) => subcategory === true)
            .slice(0, 3)
            .map(({ number }, index, catArray) => (
              <Typography
                key={`${number}-bigArticleCard-category`}
                variant='body2'
                className={classes.category}
              >
                {getCategory(number)}
                {index === catArray.length - 1 ? null : (
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
            {limitString(article.title, 60)}
          </Typography>
        </NewTabLink>

        <div className={classes.detailsContainer}>
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
            <i className={`far fa-clock ${classes.clockIcon}`} />
            <Typography variant='body2'>
              {moment
                .utc(
                  moment.duration(article.readTime, 'seconds').asMilliseconds(),
                )
                .format('m [mins]')}
            </Typography>
          </div>
        </div>

        <Typography variant='body2' className={classes.articleDescription}>
          {limitString(article.inshort, 150)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: theme.shadows[0],
    backgroundColor: theme.palette.common.white,
    overflow: 'hidden',
    width: ({ carousel }) => (carousel ? '400px' : '100%'),
    height: '470px',

    marginTop: ({ carousel }) => (carousel ? '10px' : '0px'),
    marginRight: ({ carousel }) => (carousel ? '24px' : '0px'),
    [theme.breakpoints.up('lg')]: {
      maxWidth: 'auto',
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      margin: '0px',
      width: ({ carousel }) => (carousel ? '300px' : '100%'),
      height: ({ carousel }) => (carousel ? '470px' : '470px'),
    },
  },

  coverContainer: {
    width: '100%',
    height: '100%',
  },
  featuredImageContainer: {
    width: '100%',
    height: '220px',
    '& > span': {
      position: 'unset !important',
    },
    '& > span > span': {
      display: 'none !important',
    },
    overflow: 'hidden',
    position: 'relative',
  },
  featuredImage: {
    position: 'unset !important',
    width: 'auto !important',
    height: 'auto !important',
    objectFit: 'cover',
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

  cardContent: {
    overflow: 'hidden',
    [theme.breakpoints.up('sm')]: {
      padding: '0.75rem',
    },
  },

  title: {
    marginTop: '0.25rem',
    fontSize: '1.25rem',
    lineHeight: '2rem',
    textAlign: 'left',

    [theme.breakpoints.down('sm')]: {
      lineHeight: '1.75rem',
      fontSize: '1rem',
    },
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

    marginRight: '7px',
    marginTop: '5px',
  },

  detailsContainer: {
    display: 'flex',
    marginTop: '4px',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  clockIcon: {
    marginRight: '5px',
  },
  readTime: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontWeight: '400',
    color: theme.palette.secondary.neutral70,
  },
  articleDescription: {
    marginTop: '12px',
    fontWeight: '400',
    color: theme.palette.common.black,
    textAlign: 'left',
    fontFamily: 'Source Sans Pro',
  },
}));
