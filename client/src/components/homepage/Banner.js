import React from 'react';

import makeStyles from '@mui/styles/makeStyles';
import { Grid, Container } from '@mui/material';

// Components
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
