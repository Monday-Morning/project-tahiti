import React from 'react';

// Libraries
import {
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
} from '@material-ui/core';

// Assets
import user from '../../../assets/images/photo.png';

function Comment({ comment }) {
  const classes = useStyles();

  return (
    <Card className={classes.commentCard}>
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
}

export default Comment;

const useStyles = makeStyles((theme) => ({
  commentCard: {
    marginTop: '1rem',
    boxShadow: theme.shadows[0],
  },
}));
