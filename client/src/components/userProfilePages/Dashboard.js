import { Card, makeStyles } from '@material-ui/core';
import React from 'react';
import { PROFILEPAGES } from '../../assets/placeholder/profile';
import graph from '../../assets/images/profile/profilePic.png';
import theme from '../../config/themes/light';

const Dashboard = () => {
  console.log(a);
  // const dateTime = ` ${a.getYear()},`
  const a = new Date();
  let hours =
    a.getHours() == 0
      ? '12 AM'
      : a.getHours() < 12
      ? `${a.getHours()} AM`
      : `${a.getHours() - 12} PM`;
  let month = 0;
  switch (a.getMonth()) {
    case 0:
      month = 'January';
      break;
    case 1:
      month = 'February';
      break;
    case 2:
      month = 'March';
      break;
    case 3:
      month = 'April';
      break;
    case 4:
      month = 'May';
      break;
    case 5:
      month = 'June';
      break;
    case 6:
      month = 'July';
      break;
    case 7:
      month = 'August';
      break;
    case 8:
      month = 'September';
      break;
    case 9:
      month = 'October';
      break;
    case 10:
      month = 'November';
      break;
    case 11:
      month = 'December';
      break;

    default:
      break;
  }
  let dateTime = `${a.getDate()} ${month} ${a.getFullYear()}, ${hours}`;
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      <span>Dashboard</span>
      <Card className={classes.wrapper}>
        <div className={classes.content}>
          <div className={classes.header}>
            <span>Activity</span>
            <div className={classes.dateTime}>as of {dateTime}</div>
          </div>
          <div className={classes.activityGraph}>
            <img src={graph} alt='' className={classes.graph} />
          </div>
          <div className={classes.stats}>
            {PROFILEPAGES.DASHBOARD.map(({ head, value }, key) => (
              <div className={key ? classes.stat : classes.stat2}>
                <div key={key} className={classes.stat__head}>
                  {head}
                </div>
                <div className={classes.stat__value}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
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
    width: '886px',
    display: 'flex',
    boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 3px rgba(0, 0, 0, 0.12)',
    background: theme.palette.common.white,
  },
  content: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '15px',
    marginLeft: '39px',
    width: '100%',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    '& span': {
      fontFamily: 'IBM Sans Pro',
      fontSize: '22px',
      lineHeight: '1.5rem',
      fontWeight: '600',
      color: theme.palette.secondary.main,
    },
  },
  dateTime: {
    fontFamily: 'Mulish',
    fontWeight: '400',
    fintSize: '0.75rem',
    lineHeight: '1rem',
    color: '#9FA2B4',
  },
  activityGraph: {
    height: '432px',
    paddingTop: '98px',
    width: '100%',
  },
  graph: {
    height: '336px',
    width: '100%',
  },
  stats: {
    fontFamily: 'Mulish',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    top: '-15px',
    right: '0',
    background: theme.palette.common.white,
    height: '100%',
    zIndex: '10',
    width: '259px',
    marginTop: '0',
    // paddingTop:''
  },
  stat: {
    // color: key ? 'red' : 'blue',
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
    color: '#2527330,',
  },
}));
