import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Grid, Typography, Button } from '@material-ui/core';
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
          <Grid item sm={8}>
            <p className={classes.pulseQuestion}>{polls.question}</p>
            {polls.votes.map((value) => (
              <div key={value}>
                <input className={classes.voteOption} type='radio' name='votes' value={value} />
                {value}
              </div>
            ))}
            <Button variant='contained' color='primary' className={classes.voteButton}>
              Vote
            </Button>
          </Grid>
          <Grid item sm={4}>
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
}));
