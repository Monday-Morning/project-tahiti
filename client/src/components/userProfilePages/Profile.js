import { Container, useMediaQuery } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';
import { Edit2 } from 'react-feather';
import { PROFILEPAGES } from '../../assets/placeholder/profile';
import theme from '../../config/themes/light';
import profile from '../../assets/images/profile/profilePic.png';
import pp from '../../assets/images/profile.png';
import Image from 'next/dist/client/image';
import EditTextfield from '../userProfilePages/widgets/EditTextfield';

function Profile() {
  const classes = useStyles(theme);
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container>
      <div className={classes.root}>
        <div className={classes.option}>Profile</div>
        <div className={classes.wrapper}>
          <div className={classes.content}>
            <div className={classes.profilePic}>
              <Image
                src={pp}
                alt=''
                height={!matches ? '115px' : '70px'}
                width={!matches ? '115px' : '70px'}
                className={classes.pp}
              />
              <Edit2
                size={!matches ? '30' : '25'}
                className={classes.invertedIcon}
              />
            </div>
            <div className={classes.infoBlocks}>
              {PROFILEPAGES.PROFILE.INFO.map(({ head, value }) => (
                <EditTextfield
                  className={classes.editTextfield}
                  head={head}
                  value={value}
                />
              ))}
            </div>
          </div>
          <Image
            width={!matches ? '400px' : '210px'}
            height={!matches ? '400px' : '210px'}
            src={profile}
          />
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
    </Container>
  );
}

export default Profile;

const useStyles = makeStyles((theme) => ({
  option: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'inline-flex',
      fontWeight: '600',
      marginTop: '15px',
      fontFamily: 'IBM Plex Sans',
      fontSize: '18px',
    },
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      paddingInline: '5%',
      paddingBottom: '7%',
      alignItems: 'flex-start',
    },
  },
  wrapper: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '2rem',
      padding: '10px',
      width: '84%',
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      display: 'inline-flex',
      flexDirection: 'row-reverse',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      paddingRight: '10px',
    },
  },
  profilePic: {
    height: '115px',
    width: '115px',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      marginRight: '10px',
      height: '70px',
      width: '70px',
    },
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
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      bottom: '-0.5px',
      right: '-0.5px',
      borderRadius: '50%',
    },
  },
  infoBlocks: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      display: 'inline',
      marginBottom: '20px',
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
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
      lineHeight: '24px',
      whiteSpace: 'wrap',
      textAlign: 'center',
    },
    '& span': {
      '&:hover': {
        cursor: 'pointer',
      },
      whiteSpace: 'nowrap',
      fontSize: '1rem',
      textDecoration: 'underline',
      color: '#006DCC',
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
      [theme.breakpoints.down('sm')]: {
        fontWeight: '700',
        fontSize: '14px',
        fontFamily: 'Source Sans Pro',
      },
    },
  },
}));
