import React from 'react';

//libraries
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Grid, Typography, Button } from '@material-ui/core';

//Images
import pulseImg from '../../assets/images/pulseImg.png';

const Pulse = () => {
  const polls = {
    question: 'What is your opinion about the right time for return of students to the campus?',
    votes: [
      'I am desperately waiting to return back to campus with rigid safety protocols.',
      'I am eager to return but I am a bit apprehensive about safety protocols.',
      "I don't want to return in the near future because of the risk of transmission and would rather wait for normalcy.",
    ],
  };
  const classes = useStyles();
  return (
    <Card className={classes.pulseCard}>
      <CardContent>
        <Typography variant='h1'>Student Pulse</Typography>
        <Grid container alignItems='center'>
          <Grid item md={8} className={classes.pulseDataContainer}>
            <p className={classes.pulseQuestion}>{polls.question}</p>
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
            <Button variant='contained' color='primary' className={classes.voteButton}>
              Vote
            </Button>
          </Grid>
          <Grid item md={4} className={classes.pulseImageContainer}>
            <Grid container justify='center'>
              <img src={pulseImg} alt='Pulse Image' />
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
  },
  pulseQuestion: {
    fontSize: '1rem',
    fontWeight: '700',
    lineHeight: '1.5rem',
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
    marginTop: '50px',
  },
  pulseDataContainer: {
    order: '1',
    [theme.breakpoints.down('sm')]: {
      order: '2',
    },
  },
  pulseImageContainer: {
    width: '100%',
    paddingTop: '1rem ',
    paddingBottom: '1rem ',
    order: '2',
    [theme.breakpoints.down('sm')]: {
      order: '1',
    },
  },
}));
