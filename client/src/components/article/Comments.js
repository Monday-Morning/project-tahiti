import React, { useState } from 'react';

// libraries
import { Container, makeStyles, Typography, Button } from '@material-ui/core';
import { Element } from 'react-scroll';

// Components
import { COMMENTS } from '../../assets/placeholder/comments';
import ShowComments from './ShowComments';

// images
import user from '../../assets/images/photo.png';

const Comments = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(COMMENTS);

  const handleSubmit = (e) => {
    e.preventDefault();
    const commentData = { user: 'John Doe', comment: comment };
    setComments(comments.concat(commentData));
    setComment('');
  };
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Element name='commentBox'>
        <Typography variant='h2'>Comment</Typography>
        <form onSubmit={handleSubmit}>
          <div className={classes.commentWrapper}>
            <div className={classes.inputWrapper}>
              <img src={user} alt='User Photo' />
              <input
                className={classes.commentInput}
                name='comment'
                type='text'
                placeholder='Leave a comment'
                value={comment}
                onChange={(event) => setComment(event.target.value)}
              />
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
        <ShowComments comments={comments} />
      </Element>
    </Container>
  );
};

export default Comments;

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
}));
