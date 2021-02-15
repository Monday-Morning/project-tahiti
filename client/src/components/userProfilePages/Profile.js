import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Edit2 } from 'react-feather';
import { PROFILEPAGES } from '../../assets/placeholder/profile';
import theme from '../../config/themes/light';
import profile from '../../assets/images/profile/profilePic.png';
import pp from '../../assets/images/profile.png';
import ImageBox from './widgets/ImageBox';

function Profile() {
  const classes = useStyles(theme);
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <div className={classes.profilePic}>
            <img src={pp} alt='' height='115px' width='115px' className={classes.pp} />
            <Edit2 size={30} className={classes.invertedIcon} />
          </div>
          <div className={classes.infoBlocks}>
            {PROFILEPAGES.PROFILE.INFO.map(({ head, value }, key) => (
              <div className={classes.infoBlock} key={key}>
                <div className={classes.infoHead}>
                  <Typography variant='h2'>{head}</Typography>
                  <div className={classes.editButton}>
                    <Edit2 size={18} />
                  </div>
                </div>
                <Typography className={classes.subInfo}>{value}</Typography>
              </div>
            ))}
          </div>
        </div>
        <ImageBox widthImage='44.3%' img={profile} />
      </div>
      <div className={classes.subLine}>
        <div className={classes.emailSub}>
          Your email is not yet verified. <span>Verify Now</span>
        </div>

        <div className={classes.joined}>
          <span>Joined on:</span> {PROFILEPAGES.PROFILE.JOINDATE}
        </div>
      </div>
    </div>
  );
}

export default Profile;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',

    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      paddingInline: '5%',
      paddingBottom: '7%',
    },
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '2rem',
    width: '84%',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
      marginLeft: '0',
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      alignItems: 'center',
    },
  },
  profilePic: {
    height: '115px',
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
    background: theme.palette.secondary.neutral50,
  },
  infoBlocks: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      alignItems: 'center',
    },
  },
  infoBlock: {
    marginTop: '2.5rem',
    display: 'flex',
    flexDirection: 'column',
  },
  infoHead: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },
  },
  editButton: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '0.25rem',
  },
  subInfo: {
    textAlign: 'center',
    fontSize: '1.5rem',
    fontWeight: '400',
    marginTop: '0.25rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.25rem',
    },

  },

  subLine: {
    fontFamily: 'Source Sans Pro',
    width: '84%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    flexWrap: 'wrap',
    color: theme.palette.common.black,

    [theme.breakpoints.down('sm')]: {
      marginTop: '1rem',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
  },
  emailSub: {
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
    fontWeight: '400',
    color: theme.palette.secondary.neutral80,
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
      whiteSpace: 'wrap',
      textAlign: 'center',
      marginTop: '0.4rem',
    },
    '& span': {
      '&:hover': {
        cursor: 'pointer',
      },
      whiteSpace: 'nowrap',
      fontSize: '1rem',
      textDecoration: 'underline',
      color: theme.palette.secondary.main,
    },
  },
  joined: {
    fontSize: '1rem',
    fontWeight: '400',
    lineHeight: '1.25rem',
    color: theme.palette.secondary.main,
    '& span': {
      fontWeight: '600',
      whiteSpace: 'nowrap',
    },
  },
}));
