import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography , useMediaQuery } from '@material-ui/core';
import theme from '../../config/themes/light';

// Images
import Phone from '../../assets/images/about/Phone.png';
import Mail from '../../assets/images/about/Mail.png';

const Profile = ({
  member,
  showDesignation = true,
  showSocial = true,
  small = false,
}) => {
  const classes = useStyles({ small });
  return (
    <div className={classes.imgContainer}>
      <div className={classes.img}>
        <img className={classes.img} src={member.IMG} alt={member.NAME} />
      </div>
      <Typography variant={small ? 'body2' : 'body1'} className={classes.name}>
        {member.NAME}
      </Typography>
      {showDesignation && (
        <Typography variant='body2' className={classes.designation}>
          {member.ROLE}
        </Typography>
      )}
      {showSocial && (useMediaQuery(theme.breakpoints.down('sm')) ?
      <div className={classes.social}>
        <a href={`tel:${member.PHONE}`}><img src={Phone} /></a>
        <a href={`mailto:${member.MAIL}`} ><img src={Mail} /></a>
      </div> :
      <div>
        <a href={`tel:${member.PHONE}`} className={classes.designation}>
          <Typography variant='body2'>
            {member.PHONE}
          </Typography>
        </a>
        <a href={`mailto:${member.MAIL}`} className={classes.designation}>
        <Typography variant='body2'>
          {member.MAIL}
        </Typography>
        </a>
      </div>
      )}
    </div>
  );
};

export default Profile;

const useStyles = makeStyles((theme) => ({
  imgContainer: {
    width: ({ small }) => (small ? 120 : 180),
    height: ({ small }) => (small ? 150 : 220),
    margin: '0px 5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: ({ small }) => (small ? 70 : 100),
      height: ({ small }) => (small ? 90 : 160),
  },
  },
  img: {
    width: ({ small }) => (small ? 90 : 120),
    height: ({ small }) => (small ? 90 : 120),
    borderRadius: '100%',
    [theme.breakpoints.down('sm')]: {
      width: ({ small }) => (small ? 50 : 60),
      height: ({ small }) => (small ? 50 : 60),
  },
  },
  name: {
    fontWeight: theme.typography.fontWeightMedium,
    marginBottom: '5px',
    marginTop: '15px',
    textAlign: 'center',
  },
  designation: {
    textAlign: 'center',
    color: theme.palette.common.black,
    textDecoration: 'none',
  },
  social: {
    marginTop: '4px',
    width: '60%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
}));