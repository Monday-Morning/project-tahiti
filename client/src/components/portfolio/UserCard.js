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
                      <div>
                        <Typography variant='body2'>
                          <div className={classes.boldText}>Email</div>
                          <email>{email}</email>{' '}
                        </Typography>
                      </div>
                      <div>
                        <Typography variant='body2'>
                          <div className={classes.boldText}> Year</div>
                          {year}
                        </Typography>
                      </div>
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
                <div className={classes.postDetails}>
                  <div>
                    <Typography variant='body2' className={classes.boldText}>
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
                    <Typography variant='body2'>Content</Typography>
                  </div>
                </div>

                <div className={classes.postDetails}>
                  <div>
                    <Typography variant='body2' className={classes.boldText}>
                      Links
                    </Typography>
                  </div>
                  <div>
                    <span>
                      <Typography variant='body2'>
                        <Link
                          href='https://www.linkedin.com/company/monday-morning-the-official-student-media-body-of-nit-rourkela/mycompany/'
                          passHref={true}
                        >
                          <a>linkedin </a>
                        </Link>
                      </Typography>
                    </span>
                    <span>
                      <Typography variant='body2'>
                        <Link
                          href='https://www.instagram.com/mondaymorningnitrofficial/?hl=en'
                          passHref={true}
                        >
                          <a> Instagram</a>
                        </Link>
                      </Typography>
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
    marginTop: '1.5rem',
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
    [theme.breakpoints.down('sm')]: {
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
    justifyContent: 'space-around',
    height: '100%',
  },
  userName: {
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  },
  postDetailsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  postDetails: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  postInfo: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.5rem',
      alignText: 'center',
    },
  },
  postInfoNumber: {
    alignSelf: 'center',
    marginTop: '20px',
  },
}));
