import React from 'react';
import Image from 'next/image';

// libraries
import { makeStyles, Button } from '@material-ui/core';

// Images
import user from '../../../assets/images/photo.png';

const Comments = ({ handleSubmit, setComment, comment }) => {
  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.commentWrapper}>
        <div className={classes.inputWrapper}>
          <Image src={user} alt='User' />
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
  );
};

export default Comments;

const useStyles = makeStyles((theme) => ({
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
