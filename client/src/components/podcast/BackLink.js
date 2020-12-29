import React from 'react';

// Libraries
import { Container, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const BackLink = () => {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.wrapper}>
        <Link to='/expressions' className={classes.link}>
          <Typography variant='body1'>
            <i className='fas fa-chevron-left'></i>
            <span className={classes.text}>Back to Expressions</span>
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
