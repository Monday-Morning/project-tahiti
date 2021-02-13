import { Card, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Edit2 } from 'react-feather';
import { PROFILEPAGES } from '../../assets/placeholder/profile';
import theme from '../../config/themes/light';
import profile from '../../assets/images/profile/profilePic.png';
import pp from '../../assets/images/profile.png';

function Profile() {
  const classes = useStyles(theme);
  return (
    <div className={classes.root}>
      <Typography variant="h2">Profile </Typography>
      <Card className={classes.wrapper}>
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
    width: '90%',
    '& h2': {
      [theme.breakpoints.down("xs")]: {
        marginLeft: '0',
        textAlign: 'center',
      },
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: '1rem',
    },
  },
  wrapper: {
    width: '100%',
    marginTop: '19px',
    display: 'flex',
    height: '542px',
    boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 3px rgba(0, 0, 0, 0.12)',
    background: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      height: 'auto',
      flexDirection: 'column',
      paddingInline: '5%',
      paddingBottom: '10%',
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '2rem',
    marginLeft: '4.5rem',
    [theme.breakpoints.down('xs')]: {
      alignItems: 'center',
      marginLeft: '0',
    }
  },
  profilePic: {
    height: '115px',
    width: '115px',
    position: 'relative',
    background: { pp }
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
    }
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
    [theme.breakpoints.down('xs')]: {
      whiteSpace: 'wrap',
      textAlign: 'center',
      marginTop: '0.4rem',
    },
    '& span': {
      '&:hover': {
        cursor: 'pointer',
      },
      fontSize: '1rem',
      textDecoration: 'underline',
      color: theme.palette.secondary.main,
    },
  },
  imageBox: {
    margin: '3rem 4.5rem 0px 2rem',
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'center',
  },
  image: {
    height: 'auto',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },
  imageSub: {
    fontFamily: 'Source Sans Pro',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'baseline',
    color: theme.palette.common.black,
    fontSize: '0.9rem',
    fontWeight: '400',
    whiteSpace: 'nowrap',
    textAlign: "center",

    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
    '& span': {
      fontWeight: '600',
      fontSize: '1rem',
      lineHeight: '1.5rem',
      color: theme.palette.secondary.main,
    },
  },
}));
