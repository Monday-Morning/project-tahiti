import React from 'react';
import Image from 'next/image';

// Libraries
import { Card, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import moment from 'moment';

// Components
import NewTabLink from '../../shared/links/NewTabLink';

// Assets
import { DEFAULT_ARTICLE } from '../../../assets/placeholder/article';

// Utils
import getArticleLink from '../../../utils/getArticleLink';
import limitAuthor from '../../../utils/limitAuthor';
import STORES from '../../../utils/getStores';

const SmallArticleCard = ({
  isWitsdom,
  isGallery,
  isPhotostory,
  article: articleProp,
  className,
}) => {
  const classes = useStyles();

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
        className={classes.imgContainer}
      >
        <div className={classes.imgItemContainer}>
          <Image
            src={
              STORES[article.coverMedia.rectangle.store] +
              encodeURI(article.coverMedia.rectangle.storePath)
            }
            alt='Cover'
            layout='fill'
            className={classes.img}
          />
        </div>
      </NewTabLink>

      <div className={classes.contentContainer}>
        <NewTabLink
          to={getArticleLink(article.id, article.title, {
            isWitsdom,
            isPhotostory,
            isGallery,
          })}
        >
          <Typography variant='h3' className={classes.title}>
            {article.title}
          </Typography>
        </NewTabLink>

        {/* <Typography variant='body1' className={classes.authors}>
          {ARTICLECARD.authors}
        </Typography> */}

        <div className={classes.authorList}>
          {article.authors.map(({ name, id }, index) => {
            let authorName = limitAuthor(name);
            if (index < article.authors.length - 1) authorName += ', ';

            return (
              <NewTabLink to={`/portfolio/${id}/${name}`} key={name}>
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

        <Typography variant='body1' className={classes.readTime}>
          {moment
            .utc(moment.duration(article.readTime, 'seconds').asMilliseconds())
            .format('m [mins]')}
        </Typography>
      </div>
    </Card>
  );
};

export default SmallArticleCard;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100px',
    minHeight: '100px',
    boxShadow: theme.shadows[0],
    backgroundColor: theme.palette.common.white,
    overflow: 'hidden',
    padding: '0px',
    marginTop: '10px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imgContainer: {
    width: '130px',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5px',
    borderTopRightRadius: '0px',
    borderBottomRightRadius: '0px',
  },
  imgItemContainer: {
    width: '100%',
    height: '100%',
    '& > span': {
      position: 'unset !important',
    },
    '& > span > span': {
      display: 'none !important',
    },
    overflow: 'hidden',
    position: 'relative',
  },
  img: {
    borderRadius: '5px',
    borderTopRightRadius: '0px',
    borderBottomRightRadius: '0px',
    objectFit: 'cover',
    position: 'unset !important',
    width: 'auto !important',
    height: 'auto !important',
  },
  contentContainer: {
    flex: 1,
    padding: '10px',
  },
  title: {
    fontSize: '0.75rem',
    fontWeight: '700',
    lineHeight: '16px',
    fontFamily: 'IBM Plex Sans',
  },
  authorList: {
    width: 'auto',
    maxWidth: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  author: {
    color: theme.palette.secondary.neutral70,
    fontFamily: 'Source Sans Pro',
    fontSize: '0.65rem',
    lineHeight: '16px',
    fontWeight: '400',
    marginRight: '2px',
  },
  readTime: {
    fontSize: '0.65rem',
    fontWeight: '400',
    lineHeight: '16px',
    fontFamily: 'Source Sans Pro',
    color: theme.palette.secondary.neutral70,
  },
}));
