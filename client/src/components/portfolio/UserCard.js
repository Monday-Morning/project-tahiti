import React from 'react';

// Libraries
import useMediaQuery from '@mui/material/useMediaQuery';
import { Container, Grid, Typography, Card, CardContent } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import theme from '../../config/themes/light';

// Images
import Image from 'next/image';
import Link from 'next/link';

const UserCard = ({ user }) => {
  let Desktop = useMediaQuery(theme.breakpoints.up('sm'));
  const classes = useStyles();

  const { firstName, lastName, profileImageLink, email, noOfArticle, year } =
    user;

  return (
    <Container>
      <div className={classes.wrapper}>
        <Card className={classes.card}>
          <CardContent>
            <Grid container>
              <Grid item md={5} sm={12} className={classes.gridPadding}>
                <div className={classes.userWrapper}>
                  <div className={classes.imageWrapper}>
                    <Image
                      className={classes.profileImage}
                      src={profileImageLink}
                      alt='user photo'
                      width={135}
                      height={135}
                    />
                  </div>
                  <div className={classes.userData}>
                    <div className={classes.columnFlex}>
                      <div className={classes.userName}>
                        <Typography variant='h2'>
                          {firstName} {firstName?.length < 4 ? lastName : ''}
                        </Typography>
                      </div>
                      {email.trim() && (
                        <div>
                          <Typography variant='body2'>
                            <div className={classes.boldText}>Email</div>
                            <email>{email}</email>{' '}
                          </Typography>
                        </div>
                      )}
                      {year.trim() && (
                        <div>
                          <Typography variant='body2'>
                            <div className={classes.boldText}> Year</div>
                            {year}
                          </Typography>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Grid>

              <Grid
                item
                md={3}
                sm={6}
                className={`${classes.bordered} ${classes.gridPadding} ${classes.postDetailsWrapper}`}
              >
                {noOfArticle ? (
                  <>
                    <div className={classes.postDetails}>
                      <div>
                        <Typography
                          variant='body2'
                          className={classes.boldText}
                        >
                          Number Of Posts
                        </Typography>
                      </div>
                      <div>
                        <Typography variant='body2'>{noOfArticle}</Typography>
                      </div>
                    </div>
                    <div className={classes.postDetails}>
                      <Typography variant='body2'>
                        <span className={classes.boldText}>Content: </span>
                        {noOfArticle}
                      </Typography>

                      <Typography variant='body2'>
                        <span className={classes.boldText}>Design: </span>0
                      </Typography>

                      <Typography variant='body2'>
                        <span className={classes.boldText}>Photography: </span>0
                      </Typography>
                    </div>
                  </>
                ) : (
                  <>
                    <Typography variant='body2'>
                      <span
                        className={classes.boldText}
                      >{`${firstName} ${lastName}`}</span>{' '}
                      was responsible for creating and implementing the visual
                      elements that aid in communicating our message to the
                      audience.
                    </Typography>
                  </>
                )}
              </Grid>
              <Grid
                item
                md={4}
                sm={6}
                className={`${classes.bordered} ${classes.gridPadding} ${classes.postDetailsWrapper}`}
              >
                <div className={classes.postDetails}>
                  <div>
                    <Typography variant='body2' className={classes.boldText}>
                      Teams
                    </Typography>
                  </div>
                  <div>
                    <Typography variant='body2'>
                      {noOfArticle ? 'Content' : 'Team MM'}
                    </Typography>
                  </div>
                </div>

                <div className={classes.postDetails}>
                  <div>
                    <Typography variant='body2' className={classes.boldText}>
                      Links
                    </Typography>
                  </div>
                  <div className={classes.socialIcons}>
                    <span>
                      <Link
                        href='https://www.linkedin.com/company/monday-morning-the-official-student-media-body-of-nit-rourkela/mycompany/'
                        passHref={true}
                      >
                        <div className={classes.socialIcon}>
                          <i className='fab fa-linkedin' />
                        </div>
                      </Link>
                    </span>
                    <span>
                      <Link
                        passHref
                        href='https://www.facebook.com/mondaymorningnitr'
                      >
                        <div className={classes.socialIcon}>
                          <i className='fab fa-facebook-f' />
                        </div>
                      </Link>
                    </span>
                    <span>
                      <Link
                        passHref
                        href='https://www.instagram.com/mondaymorningnitrofficial/?hl=en'
                      >
                        <div className={classes.socialIcon}>
                          <i className='fab fa-instagram' />
                        </div>
                      </Link>
                    </span>
                    <span>
                      <Link
                        passHref
                        href='https://twitter.com/mmnitrkl?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
                      >
                        <div className={classes.socialIcon}>
                          <i className='fab fa-twitter' />
                        </div>
                      </Link>
                    </span>
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
    margin: '1.5rem auto 0 auto ',
  },
  card: {
    boxShadow: theme.shadows[0],
  },
  boldText: {
    fontFamily: 'Source Sans Pro',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '16px',
  },
  gridPadding: {
    width: '100%',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    [theme.breakpoints.down('md')]: {
      marginTop: '2rem',
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1rem',
      paddingRight: '1rem',
    },
  },
  bordered: {
    width: '100%',
    borderLeft: '1px solid',
    borderColor: theme.palette.secondary.neutral50,
    [theme.breakpoints.down('sm')]: {
      paddingTop: '2rem',
      paddingBottom: '2rem',
      borderLeft: 'unset',
      borderTop: '1px solid',
      borderColor: theme.palette.secondary.neutral50,
    },
  },
  userWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  imageWrapper: {
    alignSelf: 'center',
  },
  profileImage: {
    borderRadius: '50%',
  },
  columnFlex: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '100%',
  },
  userName: {
    [theme.breakpoints.down('lg')]: {
      textAlign: 'center',
    },
  },
  postDetailsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  postDetails: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  postInfo: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.5rem',
      alignText: 'center',
    },
  },
  postInfoNumber: {
    alignSelf: 'center',
    marginTop: '20px',
  },
  socialIcons: {
    maxWidth: '60%',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '2px',
    fontSize: '20px',
  },
  socialIcon: {
    cursor: 'pointer',
  },
}));
