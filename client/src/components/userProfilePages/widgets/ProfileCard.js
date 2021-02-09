import { Box, Button, Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Bell, Bookmark, User } from 'react-feather';
import userImage from '../../../assets/images/profile.png';
import theme from '../../../config/themes/light';

function ProfileCard() {
  const classes = useStyles(theme);
  return (
    <Card className={classes.root}>
      <img src={userImage} alt="Sorry we Can't show your face😝" className={classes.userImage} />
      <CardContent className={classes.content}>
        <div className={classes.userName}>Rev Shawn</div>
        <div className={classes.userID}>revshawn2020</div>
      </CardContent>
      <div className={classes.buttons}>
        <Button className={classes.icons}>
          <Bookmark />
        </Button>

        <Button className={classes.iconCenter}>
          <User />
        </Button>

        <Button className={classes.icons}>
          <Bell />
        </Button>
      </div>
    </Card>
  );
}

export default ProfileCard;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '276px',
    height: '276px',
    borderRadius: '6px',
    boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 3px rgba(0, 0, 0, 0.12)',
    background: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  userImage: {
    marginTop: '18px',

    maxWidth: '112px',
    height: '112px',
    borderRadius: '50%',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Source Sans Pro',
  },
  userName: {
    fontSize: '1.5rem',
    lineHeight: '1.5rem',
    color: theme.palette.common.black,
  },
  userID: {
    fontWeight: '400',
    fontSize: '1rem',
    lineHeight: '1.75rem',
    color: theme.palette.secondary.neutral80,
  },
  buttons: {
    minWidth: '100%',
    display: 'flex',
    borderTop: '1px solid',
    borderColor: theme.palette.secondary.neutral60,
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  icons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '67px',
    borderRadius: '0px',
    minWidth: '33.3%',
  },
  iconCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '67px',
    borderRadius: '0px',
    minWidth: '33.4%',
    border: '1px solid',
    borderTop: '0px solid',
    // borderColor: theme.palette.secondary.neutral60,
    // borderRight: '1px solid',
    borderColor: theme.palette.secondary.neutral60,
  },
  // 'icons i': {
  //   color: 'red',
  //   border: '0px 1px solid',
  //   borderColor: theme.palette.secondary.neutral60,
  // },
  icon: {
    // display: 'flex',
  },
}));
