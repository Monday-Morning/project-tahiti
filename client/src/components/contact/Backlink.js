import React from 'react';

// Libraries
import { Container, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Link } from 'react-router-dom';

const BackLink = () => {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.wrapper}>
        <Link to='/' className={classes.link}>
          <Typography variant='body1'>
            <i className='fas fa-chevron-left'></i>
            <span className={classes.text}>Back to Home</span>
          </Typography>
        </Link>
      </div>
    </Container>
  );
};
export default BackLink;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: '3rem',
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.secondary.neutral70,
  },
  text: {
    marginLeft: '1rem',
  },
}));
