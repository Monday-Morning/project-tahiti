import React from 'react';

// libraries
import { Container, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

// Components
import BackButton from '../components/shared/button/BackButton';
import Info from '../components/healthInfo/Info';

function Contact() {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <BackButton path='/' goTo='Home' />
        <Typography variant='h1' className={classes.head}>
          Health and Emergency Info
        </Typography>
        <Info />
      </Container>
    </div>
  );
}

export default Contact;

const useStyles = makeStyles((theme) => ({
  head: {
    color: theme.palette.primary.blue60,
    lineHeight: '2rem',
    margin: '2.7rem 0 2rem 0.7rem',
  },
}));
