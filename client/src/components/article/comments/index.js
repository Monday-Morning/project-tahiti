import React, { useState } from 'react';

// libraries
import { Container, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Element } from 'react-scroll';

// Components
import Comment from './Comment';
import Input from './Input';

// Hooks
import useInput from '../../../hooks/useInput';
import useToggle from '../../../hooks/useToggle';

// Assets
import { COMMENTS } from '../../../assets/placeholder/comments';

const Comments = () => {
  const classes = useStyles();

  const [comments, setComments] = useState(COMMENTS);
  const [comment, setComment, resetComment] = useInput('');
  const [showComments, toggleShowComments] = useToggle(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const commentData = { user: 'John Doe', comment };

    setComments(comments.concat(commentData));
    resetComment();
  };

  return (
    <Container className={classes.container}>
      <Element name='commentBox'>
        <Typography variant='h2'>Comment</Typography>

        <Input
          comment={comment}
          setComment={setComment}
          handleSubmit={handleSubmit}
        />

        {showComments ? (
          <>
            <Typography
              onClick={toggleShowComments}
              className={classes.commentToggle}
            >
              Hide all comments ({comments.length})
            </Typography>
            <div className={classes.userCommentsWrapper}>
              {comments.map((_comment, index) => (
                <Comment comment={_comment} key={index} />
              ))}
            </div>
          </>
        ) : (
          <Typography
            onClick={toggleShowComments}
            className={classes.commentToggle}
          >
            See all comments ({comments.length})
          </Typography>
        )}
      </Element>
    </Container>
  );
};

export default Comments;

const useStyles = makeStyles(() => ({
  container: {
    marginTop: '2rem',
  },
  commentToggle: {
    cursor: 'pointer',
    marginTop: '1rem',
  },
}));
