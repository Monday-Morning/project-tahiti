import React from 'react';

// Libraries
import { Card, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

// Assets
import { ARTICLECARD } from '../../../assets/placeholder/widget';
import cover from '../../../assets/images/cover.png';

const SmallArticleCard = ({ isWitsdom, isGallery, isPhotostory }) => {
  const classes = useStyles();

  const getArticleLink = () => {
    if (isWitsdom)
      return '/article/609673938c0ee55b2c03e814/Adapting%20To%20The%20Unprecedented:%20NITR%20Rewind%202020-21';
    if (isGallery) return '/gallery/id/title';
    if (isPhotostory) return '/photostory/id/title';
    return '/article/609673938c0ee55b2c03e814/Adapting%20To%20The%20Unprecedented:%20NITR%20Rewind%202020-21';
  };

  return (
    <Link
      className={classes.link}
      to={getArticleLink()}
      target='_blank'
      rel='noopener noreferrer'
    >
      <Card className={classes.root}>
        <div className={classes.imgContainer}>
          <img src={cover} alt='Cover' className={classes.img} />
        </div>

        <div className={classes.contentContainer}>
          <Typography variant='h3' className={classes.title}>
            {ARTICLECARD.title}
          </Typography>

          <Typography varinat='body1' className={classes.authors}>
            {ARTICLECARD.authors}
          </Typography>

          <Typography variant='body1' className={classes.readTime}>
            {ARTICLECARD.readTime}
          </Typography>
        </div>
      </Card>
    </Link>
  );
};

export default SmallArticleCard;

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
  },
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
    // fontFamily: 'IMB Plex Sans',
  },
  authors: {
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '16px',
    fontFamily: 'Source Sans Pro',
    color: theme.palette.secondary.neutral70,
    marginTop: '5px',
  },
  readTime: {
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '16px',
    fontFamily: 'Source Sans Pro',
    color: theme.palette.secondary.neutral70,
  },
}));
