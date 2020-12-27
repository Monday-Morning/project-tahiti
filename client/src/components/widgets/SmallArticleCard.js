import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import cover from '../../assets/images/cover.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    borderRadius : '6px',
    height: '100.5px',
    // width: '312px',
    marginTop:'1rem',

  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    fontFamily:'Source Sans Pro',
    lineHeight:' 16px'

  },
  header:{
      fontWeight:'bold',
      fontSize: '14px',
      color:' #000000',
  },
  subtitle: {
      fontSize: '10px',
      color:'#6E6E6E',
  },

  cover: {
    // textTransform:'unset',
    width: '89px',
    height: '100.5px',
  },

}));

const SmallArticleCard = () => {
  const classes = useStyles();
  const props = {
    article: {
      title: 'Chaos, Curiosity and COVID-19: A Biotechnologist’s Perspective',
      authors: ['Debabrata Malik', 'Rama Krushna Behera'],
      readTime: '12 min',
    },
  };

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.cover} image={cover} title='Article Alt' />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component='h5' variant='h5' className = {classes.header}>
            {props.article.title}
          </Typography>
          <Typography variant='subtitle1' className = {classes.subtitle}>
            {props.article.authors}
          </Typography>
          <Typography variant='subtitle1' className = {classes.subtitle}>
            {props.article.readTime}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}

export default SmallArticleCard;