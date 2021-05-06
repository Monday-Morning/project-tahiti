import React from 'react';

// libraries
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Container, TextField } from '@material-ui/core';

// Assets
import theme from '../../config/themes/light';
import logo from '../../assets/images/logo.png';

const DeskTopHeader = ({ nav }) => {
  const classes = useStyles();
  return (
    <Container className={classes.wrapper}>
      <Grid container className={classes.header}>
        <Grid item sm={6}>
          <NavLink to='/'>
            <img src={logo} alt='Monday Morning' />
          </NavLink>
        </Grid>
        <Grid item sm={6}>
          <div className={classes.searchWrapper}>
            <TextField label='Search for articles' />
            <Button
              variant='outlined'
              color='primary'
              className={classes.signInButton}
            >
              Sign In
            </Button>
          </div>
        </Grid>
      </Grid>
      <hr />
      <div className={classes.navbar}>
        <div className={classes.navList}>
          {nav.map(({ to, name }) => (
            <div key={name} className={classes.navItem}>
              <NavLink
                to={to}
                className={classes.navLink}
                exact
                activeClassName={classes.activeHeaderLink}
              >
                {name}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default DeskTopHeader;

const useStyles = makeStyles(() => ({
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
  activeHeaderLink: {
    color: theme.palette.primary.blue50,
  },
}));
