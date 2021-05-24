import React from 'react';

// Libraries
import { Card, makeStyles, Typography } from '@material-ui/core';
import moment from 'moment';

// Components
import NewTabLink from '../../shared/links/NewTabLink';

// Assets
// import { ARTICLECARD } from '../../../assets/placeholder/widget';
// import cover from '../../../assets/images/cover.png';
import { DEFAULT_ARTICLE } from '../../../assets/placeholder/article';

// Utils
import getArticleLink from '../../../utils/getArticleLink';
// import getCategory from '../../../utils/determineCategory';

const SmallArticleCard = ({
  isWitsdom,
  isGallery,
  isPhotostory,
  article: articleProp,
}) => {
  const classes = useStyles();

  const isDefaultArticle = !articleProp?.title;
  const article = isDefaultArticle ? DEFAULT_ARTICLE : articleProp;

  // const getArticleLink = () => {
  //   if (isWitsdom)
  //     return '/article/609673938c0ee55b2c03e814/Adapting%20To%20The%20Unprecedented:%20NITR%20Rewind%202020-21';
  //   if (isGallery) return '/gallery/id/title';
  //   if (isPhotostory) return '/photostory/id/title';
  //   return '/article/609673938c0ee55b2c03e814/Adapting%20To%20The%20Unprecedented:%20NITR%20Rewind%202020-21';
  // };

  return (
    <Card className={classes.root}>
      <NewTabLink
        to={getArticleLink(article.id, article.title, {
          isWitsdom,
          isPhotostory,
          isGallery,
        })}
        className={classes.imgContainer}
      >
        <img
          src={article.coverMedia.rectangle.storePath}
          alt='Cover'
          className={classes.img}
        />
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
          {article.authors.map(({ name, id }, index) => (
            <NewTabLink to={`/portfolio/${id}/${name}`} key={name}>
              <Typography
                variant='body2'
                key={name}
                className={classes.authors}
              >
                {`${name}${index === article.authors.length - 1 ? ' ' : ','}`}
              </Typography>
            </NewTabLink>
          ))}
        </div>

        <Typography variant='body1' className={classes.readTime}>
          {moment.duration(article.readTime, 'seconds').humanize()}
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
  img: {
    width: '100%',
    height: '100%',
    borderRadius: '5px',
    borderTopRightRadius: '0px',
    borderBottomRightRadius: '0px',
  },
  contentContainer: {
    flex: 1,
    padding: '10px',
  },
  title: {
    fontSize: '14px',
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
  authors: {
    color: theme.palette.secondary.neutral70,
    fontFamily: 'Source Sans Pro',
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: '400',
    marginRight: '2px',
  },
  readTime: {
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '16px',
    fontFamily: 'Source Sans Pro',
    color: theme.palette.secondary.neutral70,
  },
}));
