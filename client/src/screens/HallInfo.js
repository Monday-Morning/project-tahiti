import React from 'react';

// libraries
import { Container, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

// Components
import BackButton from '../components/shared/button/BackButton';

import Info from '../components/hallInfo/Info';

function HallInfo() {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <BackButton path='/guide' goTo='Guide' />
        <Typography variant='h1' className={classes.head}>
          Hall Info
        </Typography>
        <Info />
      </Container>
    </div>
  );
}

export default HallInfo;

const useStyles = makeStyles((theme) => ({
  head: {
    color: theme.palette.primary.blue60,
    lineHeight: '2rem',
    margin: '2.7rem 0 2rem 0.7rem',
  },
}));
