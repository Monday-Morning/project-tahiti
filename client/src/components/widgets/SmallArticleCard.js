import React from 'react';

// libraries
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

// components
import { ARTICLECARD } from '../../assets/placeholder/widget';


//images
import cover from '../../assets/images/cover.png';




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    borderRadius: '6px',
    marginTop: '1rem',
    boxShadow: theme.shadows[0],
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
  header: {
    fontWeight: 'bold',
    fontSize: '14px',
    color: ' #000000',
  },
  subtitle: {
    fontSize: '10px',
    color: '#6E6E6E',
    marginTop: '4px',
  },
  readTime: {
    fontSize: '10px',
    color: '#6E6E6E',
    marginTop: '8px',
    '& i': {
      marginRight: '5px',
    }
  },

  cover: {
    minWidth: '89px',
  },
}));

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
          <Typography component='h5' variant='h5' className={classes.header}>
            {props.article.title}
          </Typography>
          <Typography variant='body2' className={classes.subtitle}>
            {props.article.authors}
          </Typography>
          <Typography variant='body2' className={classes.readTime}>
            <i className='far fa-clock'></i>{props.article.readTime}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}

export default SmallArticleCard;
