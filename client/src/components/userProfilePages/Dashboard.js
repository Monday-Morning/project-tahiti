import { Card, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { PROFILEPAGES } from '../../assets/placeholder/profile';
import graph from '../../assets/images/profile/profilePic.png';
import theme from '../../config/themes/light';

const Dashboard = () => {
  const a = new Date();
  let hours =
    a.getHours() == 0
      ? '12 AM'
      : a.getHours() < 12
      ? `${a.getHours()} AM`
      : `${a.getHours() - 12} PM`;
  let month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let dateTime = `${a.getDate()} ${
    month[a.getMonth()]
  } ${a.getFullYear()}, ${hours}`;
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant='h3'>Activity</Typography>
        <div className={classes.dateTime}>as of {dateTime}</div>
      </div>
      <div className={classes.content}>
        <div className={classes.activityGraph}>
          <img src={graph} alt='' className={classes.graph} />
        </div>
        <div className={classes.stats}>
          {PROFILEPAGES.DASHBOARD.map(({ head, value }, key) => (
            <div className={key ? classes.stat : classes.stat2} key={key}>
              <div className={classes.stat__head}>{head}</div>
              <div className={classes.stat__value}>{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    background: theme.palette.common.white,
    paddingLeft: '40px',
    padding: '15px 0 10% 5%',
    [theme.breakpoints.down('xs')]: {
      paddingInline: '5%',
      height: 'auto',
    },
  },

  header: {
    display: 'flex',
    flexDirection: 'column',
    whiteSpace: 'nowrap',
    '& h3': {
      color: theme.palette.secondary.main,
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },
  dateTime: {
    fontFamily: 'Mulish',
    fontWeight: '400',
    fontSize: '0.75rem',
    lineHeight: '1rem',
    color: '#9FA2B4',
  },
  content: {
    display: 'flex',
    marginTop: '15px',
    width: '100%',
    justifyContent: 'center',
  },
  activityGraph: {
    height: '432px',
    paddingTop: '98px',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  graph: {
    height: '336px',
    width: '100%',
  },
  stats: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginTop: '0',
    fontFamily: 'Mulish',
    background: theme.palette.common.white,
    width: '259px',
    position: 'relative',
    top: '-60px',
    [theme.breakpoints.down('xs')]: {
      alignItems: 'center',
      position: 'static',
    },
  },
  stat: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '2rem',
    marginBottom: '1.5rem',
    width: '174px',
    borderTop: '1px solid',
    borderColor: '#DFE0EB',
  },
  stat2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2rem',
    marginBottom: '1.5rem',
    width: '174px',
  },
  stat__head: {
    fontSize: '1rem',
    color: '#9FA2B4',
    lineHeight: '22px',
    fontWeight: '600',
  },
  stat__value: {
    fontWeight: '700',
    fontSize: '1.5rem',
    lineHeight: '30.12px',
    color: '#252733',
  },
}));
