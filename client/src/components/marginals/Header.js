import React from 'react';

//libraries
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Container, TextField } from '@material-ui/core';

//images
import logo from '../../assets/images/logo.png';

const Header = () => {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.wrapper}>
        <Grid container className={classes.header}>
          <Grid item sm={6}>
            <img src={logo} alt='Monday Morning' />
          </Grid>
          <Grid item sm={6}>
            <div className={classes.searchWrapper}>
              <TextField label='Search for articles' />
              <Button variant='outlined' color='primary' className={classes.signInButton}>
                Sign In
              </Button>
            </div>
          </Grid>
        </Grid>
        <hr />
        <div className={classes.navbar}>
          <div className={classes.navList}>
            <div className={classes.navItem}>
              <Link to='#' className={classes.navLink}>
                Home
              </Link>
            </div>
            <div className={classes.navItem}>
              <Link to='#' className={classes.navLink}>
                Campus
              </Link>
            </div>
            <div className={classes.navItem}>
              <Link to='#' className={classes.navLink}>
                Connect
              </Link>
            </div>
            <div className={classes.navItem}>
              <Link to='#' className={classes.navLink}>
                DD {'&'} CWC
              </Link>
            </div>
            <div className={classes.navItem}>
              <Link to='#' className={classes.navLink}>
                Career
              </Link>
            </div>
            <div className={classes.navItem}>
              <Link to='#' className={classes.navLink}>
                Alumni
              </Link>
            </div>
            <div className={classes.navItem}>
              <Link to='#' className={classes.navLink}>
                Expressions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Header;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: '15px',
  },
  header: {
    paddingTop: '24px ',
    paddingBottom: '24px',
  },
  searchWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  signInButton: {
    alignItems: 'center',
    margin: 'auto 0 0 70px',
  },
  navbar: {
    position: 'relative',
    width: '100%',
  },
  navList: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  navItem: {
    width: 'auto',
  },
  navLink: {
    textDecoration: 'none',
    color: '#999999',
    fontWeight: '600',
    fontSize: '24px',
    lineHeight: '32px',
  },
}));
