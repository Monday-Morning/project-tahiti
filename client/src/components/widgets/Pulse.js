import React, {useState} from 'react';

import makeStyles from '@mui/styles/makeStyles';
import { Card, CardContent, Grid, Typography, Button } from '@mui/material';

//Images
import pulseImg from '../../assets/images/pulseImg.png';
import { POLLS as polls } from '../../assets/placeholder/widget';
import Image from 'next/image';
import PieChart from "../homepage/PieChart";

const Pulse = () => {

  // const polls = POLLS
  const classes = useStyles();
  const[buttonClick, setButtonClick]=useState(false)
  const handleButtonClick=()=>{
    setButtonClick(!buttonClick)
  }
  return (
    <Card className={classes.pulseCard}>
      <CardContent>
        <Typography variant='h1'>Student Pulse</Typography>

        <Grid container alignItems='center'>
          <Grid item sm={8} className={classes.content}>
            <p className={classes.pulseQuestion}>{polls.question}</p>
            {console.log()}
            {polls.votes.map((option, key) => (
              <div key={key} className={classes.optionWrapper}>
                <input
                  className={classes.voteOption}
                  type='radio'
                  name='votes'
                  value={option.value}
                />
                <label htmlFor={option.value}>{option.option}</label>
              </div>
            ))}
            <Grid className={classes.voteButton}>
              <Button variant='contained' color='primary' onClick={handleButtonClick}>
                {buttonClick?<p>Hide Results</p>:<p>Vote</p>}
              </Button>
            </Grid>
          </Grid>
          <Grid item sm={4} className={classes.imageContainer}>
            <Grid container justifyContent='center'>
              {buttonClick?<PieChart/>:<Image src={pulseImg} alt='Pulse Image' className={classes.image}/>}
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Pulse;

const useStyles = makeStyles((theme) => ({
  pulseCard: {
    boxShadow: theme.shadows[0],
    backgroundColor: theme.palette.common.white,
    height: '100%',
  },
  pulseQuestion: {
    fontSize: '1rem',
    fontWeight: '700',
    lineHeight: '1.5rem',
    marginBlock: '2rem',
  },
  optionWrapper: {
    marginTop: '1rem',
  },
  votes: {
    marginTop: '12px',
    fontSize: '1 rem',
    lineHeight: '1.5rem',
  },
  voteOption: {
    marginBottom: '12px',
    marginRight: '10px',
  },
  voteButton: {
    marginTop: '55px',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  content: {
    [theme.breakpoints.down('md')]: {
      order: 2,
    },
  },
  image: {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  imageContainer: {
    [theme.breakpoints.down('md')]: {
      order: 1,
    },
  },
}));
