import React, { useState } from 'react';

//Libraries
import {
  Container,
  makeStyles,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
} from '@material-ui/core';

//Components

//images
import user from '../../assets/images/photo.png';

const ShowComments = (props) => {
  const comments = [
    {
      user: 'Vishal Rana',
      comment:
        'A webinar on COVID-19 was conducted by the BM/BT Department. Read on to know more. A webinar on COVID-19 was conducted by the BM/BT Department. Read on to know more.',
    },
    {
      user: 'Vishal Chauhan',
      comment:
        'A webinar on COVID-19 was conducted by the BM/BT Department. Read on to know more. A webinar on COVID-19 was conducted by the BM/BT Department. Read on to know more.',
    },
    {
      user: 'Vishal Rajput',
      comment:
        'A webinar on COVID-19 was conducted by the BM/BT Department. Read on to know more. A webinar on COVID-19 was conducted by the BM/BT Department. Read on to know more.',
    },
  ];
  const classes = useStyles();
  if (props.toggleState) {
    return (
      <div>
        <Typography
          onClick={() => props.setToggleState(!props.toggleState)}
          className={classes.commentToggle}
        >
          Hide all comments (2)
        </Typography>
        <div className={classes.userCommentsWrapper}>
          {comments.map((comment, index) => {
            return (
              <Card>
                <CardContent>
                  <Grid container>
                    <Grid item sm={1}>
                      <img src={user} alt='User Photo' />
                    </Grid>
                    <Grid item sm={11}>
                      <Typography variant='body1'>{comment.user}</Typography>
                      <Typography variant='body2'>{comment.comment}</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <Typography
        onClick={() => props.setToggleState(!props.toggleState)}
        className={classes.commentToggle}
      >
        See all comments (2)
      </Typography>
    );
  }
};

const CommentComponent = () => {
  const [toggleState, setToggleState] = useState(false);
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography variant='h2'>Comment</Typography>
      <form>
        <div className={classes.commentWrapper}>
          <div className={classes.inputWrapper}>
            <img src={user} alt='User Photo' />
            <input className={classes.commentInput} type='text' placeholder='Leave a comment' />
          </div>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            className={classes.submitButton}
          >
            Submit
          </Button>
        </div>
      </form>
      <ShowComments toggleState={toggleState} setToggleState={setToggleState} />
    </Container>
  );
};

export default CommentComponent;

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '2rem',
  },
  commentWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '1rem',
  },
  inputWrapper: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.neutral30,
    borderRadius: '20px',
    width: '100%',
    padding: '5px 16px 5px 5px',
    height: 'auto',
  },
  commentInput: {
    marginLeft: '16px',
    width: '100%',
    backgroundColor: 'unset',
    border: '0',
    padding: '5px 10px',
    '&:focus': {
      border: '0px',
    },
  },
  submitButton: {
    marginLeft: '10px',
    borderRadius: '8px',
  },
  commentToggle: {
    margin: '1rem auto',
    cursor: 'pointer',
  },
}));
