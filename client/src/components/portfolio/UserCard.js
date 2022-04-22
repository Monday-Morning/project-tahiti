import React from 'react';

// Libraries
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
  Container,
  Grid,
  makeStyles,
  Typography,
  Card,
  CardContent,
} from '@material-ui/core';
import theme from '../../config/themes/light';

// Images
import profile from '../../assets/images/profile.png';
import Image from 'next/image';

const UserCard = () => {
  let Desktop = useMediaQuery(theme.breakpoints.up('sm'));
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.wrapper}>
        <Card className={classes.card}>
          <CardContent>
            <Grid container>
              <Grid item md={4} sm={12} className={classes.gridPadding}>
                <div className={classes.userWrapper}>
                  <div>
                    <Image
                      className={classes.userImage}
                      src={profile}
                      alt='user photo'
                    />
                  </div>
                  <div className={classes.userData}>
                    <div className={classes.columnFlex}>
                      <div>
                        <Typography variant='h2'>Jonna</Typography>
                      </div>
                      <div>
                        <Typography variant='body2'>Email</Typography>
                        <div
                          className={`${classes.PostText} ${classes.subtext}`}
                        >
                          jonna@gmail.com
                        </div>
                      </div>
                      {Desktop ? (
                        <div>
                          <Typography variant='body2'>Year</Typography>
                          <div
                            className={`${classes.PostText} ${classes.subtext}`}
                          >
                            2019-20
                          </div>
                        </div>
                      ) : (
                        <Grid container spacing={2}>
                          <Grid item sm={6}>
                            <Typography variant='body2'>Year</Typography>
                            <div
                              className={`${classes.PostText} ${classes.subtext}`}
                            >
                              2019-20
                            </div>
                          </Grid>
                          <Grid item sm={6}>
                            <Typography variant='body2'>
                              Number Of Posts{' '}
                            </Typography>
                            <span
                              className={`${classes.PostText} ${classes.subtext}`}
                            >
                              8
                            </span>
                          </Grid>
                        </Grid>
                      )}
                    </div>
                  </div>
                </div>
              </Grid>
              {Desktop ? (
                <Grid
                  item
                  md={4}
                  sm={6}
                  className={`${classes.bordered} ${classes.gridPadding}`}
                >
                  <div className={classes.columnFlex}>
                    <div>
                      <Typography variant='h4'>Number Of Posts :</Typography>
                      <span
                        className={`${classes.PostText} ${classes.subtext}`}
                      >
                        8
                      </span>
                    </div>
                    <div>
                      <div className={classes.subtext}>
                        Content : <span className={classes.PostText}>5</span>
                      </div>
                      <div className={classes.subtext}>
                        Design : <span className={classes.PostText}>2</span>
                      </div>
                      <div className={classes.subtext}>
                        Photography :{' '}
                        <span className={classes.PostText}>1</span>
                      </div>
                    </div>
                  </div>
                </Grid>
              ) : (
                ''
              )}

              <Grid
                item
                md={4}
                sm={6}
                className={`${classes.bordered} ${classes.gridPadding}`}
              >
                <div className={classes.columnFlex}>
                  <div>
                    <Typography variant='h4'>Teams</Typography>
                    <div className={`${classes.PostText} ${classes.subtext}`}>
                      Tech • Design • Content • Photography
                    </div>
                  </div>
                  <div>
                    <Typography variant='h4'>Links</Typography>
                    <div className={`${classes.PostText} ${classes.subtext}`}>
                      https://linkedin.com/en/jonna-4578
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
};
export default UserCard;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: '1.5rem',
  },
  card: {
    boxShadow: theme.shadows[0],
  },
  gridPadding: {
    width: '100%',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '2rem',
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '1rem',
      paddingRight: '1rem',
    },
  },
  bordered: {
    width: '100%',
    borderLeft: '1px solid',
    borderColor: theme.palette.secondary.neutral50,
    [theme.breakpoints.down('xs')]: {
      paddingTop: '1rem',
      borderLeft: 'unset',
      borderTop: '1px solid',
      borderColor: theme.palette.secondary.neutral50,
    },
  },
  userWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'unset',
    },
  },
  userImage: {
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      height: '50%',
    },
  },
  columnFlex: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  subtext: {
    lineHeight: '1.5rem',
    fontWeight: theme.typography.fontWeightBold,
    '& span': {
      marginLeft: '0.25rem',
    },
  },
  PostText: {
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
