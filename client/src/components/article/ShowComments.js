import React, { useState } from 'react';

// libraries
import { Typography, Card, CardContent, Grid, makeStyles } from '@material-ui/core';

// Components

// images
import user from '../../assets/images/photo.png';

function ShowComments(props) {
  const [toggleState, setToggleState] = useState(false);

  const classes = useStyles();
  if (toggleState) {
    return (
      <div>
        <Typography onClick={() => setToggleState(!toggleState)} className={classes.commentToggle}>
          Hide all comments ({props.comments.length})
        </Typography>
        <div className={classes.userCommentsWrapper}>
          {props.comments.map((comment, index) => {
            return (
              <Card key={index} className={classes.commentCard}>
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
      <Typography onClick={() => setToggleState(!toggleState)} className={classes.commentToggle}>
        See all comments ({props.comments.length})
      </Typography>
    );
  }
}

export default ShowComments;

const useStyles = makeStyles((theme) => ({
  commentToggle: {
    margin: '1rem auto',
    cursor: 'pointer',
    userSelect: 'none',
  },
  userCommentsWrapper: {
    marginTop: '1rem',
  },
  commentCard: {
    marginTop: '1rem',
    boxShadow: theme.shadows[0],
  },
}));
