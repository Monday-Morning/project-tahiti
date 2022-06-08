import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import forum from '../../assets/images/forum.png';
import theme from '../../config/themes/light';
import { Button, Grid } from '@mui/material';
import Image from 'next/image';

const Forum = () => {
  const classes = useStyles(theme);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='h1'>Forum</Typography>
        <Grid container alignItems='center'>
          <Grid item sm={8} className={classes.forumContent}>
            <p>
              Have an insti-related question?
              <br /> Need to sell your old books?
            </p>

            <p>
              On the MM Forum, you can start a thread about anything and seek
              others’ opinion. You can also check out previous discussions.
            </p>
            <CardActions>
              <Button
                variant='contained'
                color='primary'
                className={classes.button}
              >
                <div className={classes.label}>Go To Forum</div>
              </Button>
            </CardActions>
          </Grid>

          <Grid item sm={4} className={classes.image}>
            <Grid container justifyContent='center'>
              <Image src={forum} alt='Forum Image' />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Forum;

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: theme.shadows[0],
    marginTop: '2rem',
  },

  image: {
    [theme.breakpoints.down('md')]: {
      order: 1,
    },
  },

  forumHeader: {
    fontWeight: 'bold',
    fontSize: '20px',
    color: theme.palette.secondary.main,
    padding: '1rem 1rem ',
  },

  forumImage: {
    backgroundSize: 'unset',
    height: '203px',
    margin: '1rem 1rem',
  },

  forumContent: {
    fontSize: '14px',
    color: '#333333',

    [theme.breakpoints.down('md')]: {
      order: 2,
    },
  },

  cardActions: {
    display: 'flex',
    justifyContent: 'center',
  },

  button: {
    marginTop: '50px',
  },

  label: {
    textTransform: 'capitalize',
  },
}));
