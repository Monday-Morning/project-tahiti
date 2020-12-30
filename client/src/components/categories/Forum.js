import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import forum from '../../assets/images/forum.png';
import theme from '../../config/themes/light';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Source Sans Pro',
    marginTop: '2rem',
    paddingBottom: '0.7rem',
    
  },
  forumHeader: {
    fontWeight: 'bold',
    fontSize: '20px',
    // lineHeight: '28px',
    color: theme.palette.secondary.main,
    padding: '1rem 1rem ',
  },
  forumImage: {
    backgroundSize: 'unset',
    height: '203px',
    margin: '1rem 1rem',
    // paddingTop: '303px',
    // display: 'flex',
    // height:'203px',
  },
  forumContent: {
    fontSize: '14px',
    color: '#333333',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: theme.palette.primary.blue50,
    color: theme.palette.common.white,
    borderRadius: '4px',
    fontSize: '1rem',
    height: '32px',
  },
}));

function Forum() {
  const classes = useStyles(theme);

  return (
    <Card className={classes.root}>
      <Typography className={classes.forumHeader}>Forum</Typography>
      <CardMedia className={classes.forumImage} image={forum} title='Forum Image' />
      {/* <Image img src = {forum} className ={forumImage} class = 'center' /> */}
      <CardContent>
        <Typography className={classes.forumContent}>
          Have an insti-related question?
          <br /> Need to sell your old books?
        </Typography>
        <br />
        <Typography className={classes.forumContent}>
          On the MM Forum, you can start a thread about anything and seek others’ opinion. You can
          also check out previous discussions.
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button className={classes.button}>Go To Forum</Button>
      </CardActions>
    </Card>
  );
}

export default Forum;
