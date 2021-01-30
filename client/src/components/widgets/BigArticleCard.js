import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import theme from '../../config/themes/light';
import cover from '../../assets/images/BACover.jpg';
import { ARTICLECARD } from '../../assets/placeholder/widget';
import { Grid } from '@material-ui/core';
import { Bookmark, Share2 } from 'react-feather';

const BigArticleCard = () => {
  const classes = useStyles(theme);
  const props = {
    article: ARTICLECARD,
  };
  return (
    <Card className={classes.root}>
      <img className={classes.cover} src={cover} alt='Cover Image' />

      <CardContent className={classes.details}>
        <div className={classes.container}>
          <div>
            <Grid container spacing={1}>
              {props.article.tags.map((tag, index) => (
                <Grid item key={tag}>
                  <span key={index} className={classes.tag}>
                    {(index ? '|' : '') + `    ${tag}`}
                  </span>
                </Grid>
              ))}
            </Grid>

            <Typography className={classes.title} variant='h2'>
              {props.article.title}
            </Typography>

            <div className={classes.wrapper}>
              <div className={classes.authorList}>
                {props.article.authors.map((author, index) => (
                  <span key={index} className={classes.author}>
                    {(index ? ',' : '') + `  ${author}`}
                  </span>
                ))}
              </div>
              <div className={classes.readTime}>
                <i className='far fa-clock'></i>
                <Typography variant='body2'>{props.article.readTime}</Typography>
              </div>
            </div>
            <Typography variant='body2' className={classes.articleDescription}>
              {props.article.summary}
            </Typography>
          </div>
          {/* <div> */}

          <div className={classes.footer}>
            <div className={classes.line}></div>
            {/* <i className='fal fa-share-alt'></i> */}
            {/* <Share2 /> */}
            <Share2 size={18} className={classes.icons} />
            <Bookmark size={18} className={classes.icons} />
          </div>
        </div>
        {/* </div> */}
      </CardContent>
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 3px rgba(0, 0, 0, 0.12)',
  },

  cover: {
    width: '65%',
  },

  details: {
    width: '35%',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '4rem',
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },

  tag: {
    fontFamily: 'Source Sans Pro',
    fontSize: '12px',
    fontWeight: '400',
    color: theme.palette.secondary.neutral70,
  },

  title: {
    fontFamily: 'IBM Plex Sans',
    fontWeight: '600',
    fontSize: '1.5rem',
    lineHeight: '2rem',
  },

  wrapper: {
    fontFamily: 'Source Sans Pro',
    fontSize: '10px',
    fontWeight: '400',
    display: 'flex',
    paddingTop: '0.75rem',
    color: theme.palette.secondary.neutral70,
    justifyContent: 'space-between',
  },

  authorList: {
    display: 'flex',
  },

  readTime: {
    display: 'flex',
    '& i': {
      marginTop: '0.25rem',
      marginRight: '5px',
    },
  },

  line: {
    borderBottom: '1px solid ',
    borderColor: theme.palette.common.black,
    width: '-webkit-fill-available',
  },
  icons: {
    // marginInline: '2px',
  },

  articleDescription: {
    display: 'flex',
    paddingTop: '1.5rem',
  },

  footer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '0rem',
  },
}));

export default BigArticleCard;
