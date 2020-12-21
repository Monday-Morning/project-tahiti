import React from 'react';

//libraries
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';

//Components
import Witsdom from '../expressions/Witsdom';
import PhotoStory from '../expressions/PhotoStory';

function Banner() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container>
        <Grid container spacing={4}>
          <Grid item sm={6}>
            <Witsdom />
          </Grid>
          <Grid item sm={6}>
            <PhotoStory />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Banner;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: '2rem',
    backgroundColor: theme.palette.primary.blue10,
    paddingTop: '2rem',
    paddingBottom: '2rem',
  },
}));
