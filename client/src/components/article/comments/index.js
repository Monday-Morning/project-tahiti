import React, { useState } from 'react';

// libraries
import { Container, makeStyles, Typography, Button } from '@material-ui/core';
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
    const commentData = { user: 'John Doe', comment: comment };

    setComments(comments.concat(commentData));
    resetComment();
  };

  return (
    <div className={classes.container}>
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
              {comments.map((comment, index) => {
                return <Comment comment={comment} key={index} />;
              })}
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
    </div>
  );
};

export default Comments;

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '2rem',
  },
}));
