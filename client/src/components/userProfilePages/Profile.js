import { Card, makeStyles } from '@material-ui/core';
import React from 'react';
import { Edit2 } from 'react-feather';
import { PROFILEPAGES } from '../../assets/placeholder/profile';
import theme from '../../config/themes/light';
import profile from '../../assets/images/profile/profilePic.png';
import pp from '../../assets/images/profile.png';

function Profile() {
  const classes = useStyles(theme);
  //   const props = {
  //     userInfo: PROFILEPAGES,
  //   };
  return (
    <div className={classes.root}>
      <span>Profile </span>
      <Card className={classes.wrapper}>
        <div className={classes.content}>
          <div className={classes.profilePic}>
            <img src={pp} alt='' height='115px' width='115px' className={classes.pp} />
            <Edit2 size={30} className={classes.invertedIcon} />
            {/* </img> */}
            {/* <div className={classes.box}> */}
            {/* </div> */}
          </div>
          <div className={classes.infoBlocks}>
            {PROFILEPAGES.PROFILE.INFO.map(({ head, value }) => (
              <div className={classes.infoBlock}>
                <div className={classes.infoHead}>
                  <span>{head}</span>
                  <div className={classes.editButton}>
                    <Edit2 size={18} />
                  </div>
                </div>
                <div className={classes.subInfo}>{value}</div>
              </div>
            ))}
          </div>

          <div className={classes.emailSub}>
            Your email is not yet verified. <span>Verify Now</span>
          </div>
        </div>
        <div className={classes.imageBox}>
          <img src={profile} alt='' className={classes.image} />
          <div>
            <div className={classes.imageSub}>
              <span>Joined on:</span> {PROFILEPAGES.PROFILE.JOINDATE}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Profile;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '2rem',
    '& span': {
      fontFamily: 'IBM Sans Pro',
      fontSize: '1.5rem',
      lineHeight: '2rem',
      fontWeight: '600',
    },
  },
  wrapper: {
    marginTop: '19px',
    height: '542px',
    display: 'flex',
    boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 3px rgba(0, 0, 0, 0.12)',
    background: theme.palette.common.white,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '33px',
    marginLeft: '71px',
  },
  profilePic: {
    // display: 'flex',
    // justifyConte
    height: '115px',
    // minWidth: '115px',
    // maxWidth: '115px',
    width: '115px',
    position: 'relative',
  },
  pp: {
    borderRadius: '50%',
  },
  invertedIcon: {
    position: 'absolute',
    bottom: '-3px',
    right: '-3px',
    borderRadius: '50%',
    // filter: 'invert:100%',
    background: theme.palette.secondary.neutral50,
  },
  infoBlocks: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  infoBlock: {
    marginTop: '42px',
    display: 'flex',
    flexDirection: 'column',
  },
  infoHead: {
    display: 'flex',
    lineHeight: '2rem',
    '& span': {
      fontSize: '1.5rem',
      fontWeight: '600',
      // color: 'red',
    },
  },
  editButton: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '0.25rem',
  },
  subInfo: {
    fontSize: '1.5rem',
    fontWeight: '400',
    marginTop: '0.25rem',
  },

  emailSub: {
    fontFamily: 'Source Sans Pro',
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
    fontWeight: '400',
    color: theme.palette.secondary.neutral80,
    marginTop: '0.25rem',
    '& span': {
      fontSize: '1rem',
      textDecoration: 'underline',
      color: theme.palette.secondary.main,
    },
  },
  imageBox: {
    margin: '48px 71px 0px 31px',
    // marginLeft: '31px',
    // margin
  },
  image: {
    height: '395px',
    width: '369px',
  },
  imageSub: {
    fontFamily: 'Source Sans Pro',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'baseline',
    color: theme.palette.common.black,
    fontWeight: '400',

    '& span': {
      fontWeight: '600',
      fontSize: '1rem',
      lineHeight: '1.5rem',
      color: theme.palette.secondary.main,
    },
  },
}));
