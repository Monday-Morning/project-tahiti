import React from 'react';

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

// Assets
import { DEFAULT_ARTICLE } from '../../../assets/placeholder/article';

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
        <img
          className={classes.featuredImage}
          src={article.coverMedia.rectangle.storePath.split(' ').join('%20')}
          alt='Featured'
        />
      </NewTabLink>

      <CardContent className={classes.cardContent}>
        <div className={classes.categoriesContainer}>
          {article.categories
            .filter(({ number }) => number > 10)
            .slice(0, 3)
            .map(({ number }, index) => (
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
            {limitString(article.title, 40)}
          </Typography>
        </NewTabLink>

        <div className={classes.detailsContainer}>
          <div className={classes.authorList}>
            {article.authors.map(({ name, id }, index) => (
              <NewTabLink to={`/portfolio/${id}/${name}`} key={name}>
                <Typography
                  variant='body2'
                  key={name}
                  className={classes.author}
                >
                  {`${name}${index === article.authors.length - 1 ? ' ' : ','}`}
                </Typography>
              </NewTabLink>
            ))}
          </div>

          <div className={classes.readTime}>
            <i className={`far fa-clock ${classes.clockIcon}`} />
            <Typography variant='body2'>
              {moment.duration(article.readTime, 'seconds').humanize()}
            </Typography>
          </div>
        </div>

        <Typography variant='body2' className={classes.articleDescription}>
          {article.inshort}
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
    // width: '400px',
    width: ({ carousel }) => (carousel ? '400px' : 'auto'),
    height: '470px',

    marginTop: ({ carousel }) => (carousel ? '10px' : '0px'),
    marginRight: ({ carousel }) => (carousel ? '24px' : '0px'),
    // [theme.breakpoints.between('sm', 'lg')]: {
    //   margin: '25px',
    //   marginBottom: '0px',
    //   marginLeft: '0px',
    // },

    [theme.breakpoints.between('xs', 'sm')]: {
      margin: '0px',
      width: ({ carousel }) => (carousel ? '350px' : 'auto'),
      height: ({ carousel }) => (carousel ? '470px' : '470px'),
      // minHeight: '470px',
    },
  },

  coverContainer: {
    width: '100%',
    height: '100%',
  },
  featuredImage: {
    width: '100%',
    height: 'auto',
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
    [theme.breakpoints.up('sm')]: {
      padding: '0.75rem',
    },
  },

  title: {
    marginTop: '0.25rem',
    fontSize: '1.5rem',
    lineHeight: '2rem',
    textAlign: 'left',

    [theme.breakpoints.down('sm')]: {
      lineHeight: '1.75rem',
      fontSize: '1.25rem',
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
