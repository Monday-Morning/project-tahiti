import React from 'react';

// libraries
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

// components
import { ARTICLECARD } from '../../assets/placeholder/widget';

//images
import cover from '../../assets/images/cover.png';

const SmallArticleCard = () => {
  const classes = useStyles();
  const props = {
    article: ARTICLECARD,
  };

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.cover} image={cover} title='Article Alt' />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component='h5' variant='h5' className={classes.title}>
            {props.article.title}
          </Typography>

          <div className={classes.wrapper}>
            <div className={classes.authorList}>
              {props.article.authors.map((author, index) => (
                <Typography variant='body2' key={index} className={classes.author}>
                  {(index ? ',' : '') + `  ${author}`}
                </Typography>
              ))}
            </div>
            <div className={classes.readTime}>
              <i className='far fa-clock'></i>
              <Typography variant='body2'>{props.article.readTime}</Typography>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default SmallArticleCard;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    borderRadius: '6px',
    marginTop: '1rem',
    boxShadow: theme.shadows[0],
    height: '100px',
  },
  cover: {
    minWidth: '89px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    fontFamily: 'Source Sans Pro',
    lineHeight: ' 16px',
    padding: '0.6rem',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '0.875rem',
    color: theme.palette.common.black,
    textAlign: 'justify',
  },
  wrapper: {
    fontFamily: 'Source Sans Pro',
    fontWeight: '400',
    color: theme.palette.secondary.neutral80,
  },
  authorList: {
    display: ' flex',
    fontSize: '1.125rem',
  },
  author: {
    fontWeight: '400',
    marginTop: '4px',
    display: 'flex',
  },
  readTime: {
    fontSize: '1.125rem',
    fontWeight: '400',
    display: 'flex',
    marginTop: '8px',
    '& i': {
      [theme.breakpoints.up('sm')]: {
        marginTop: '0.25rem',
      },
      marginRight: '5px',
    },
  },
}));
