import { Card, makeStyles, Typography } from '@material-ui/core';
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
  let month = ['January', 'February', 'March', 'April', 'May', 'June', 'August', 'September', 'October', 'November', 'December'];
  let dateTime = `${a.getDate()} ${month[a.getMonth()]} ${a.getFullYear()}, ${hours}`;
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      <Typography variant='h2'>Dashboard</Typography>
      <Card className={classes.wrapper}>
        <div className={classes.header}>
          <Typography variant="h3">Activity</Typography>
          <div className={classes.dateTime}>as of {dateTime}</div>
        </div>
        <div className={classes.content}>
          <div className={classes.activityGraph}>
            <img src={graph} alt='' className={classes.graph} />
          </div>
          <div className={classes.stats}>
            {PROFILEPAGES.DASHBOARD.map(({ head, value }, key) => (
              <div className={key ? classes.stat : classes.stat2} key={key}>
                <div className={classes.stat__head}>
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
    flexDirection: 'column',
    height: '542px',
    boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 3px rgba(0, 0, 0, 0.12)',
    background: theme.palette.common.white,
    paddingTop: '15px',
    // paddingLeft: "40px",
    paddingBottom: '10%',
    paddingLeft: '5%',
    [theme.breakpoints.down('xs')]: {
      // flexWrap: 'wrap',
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
    [theme.breakpoints.down("xs")]: {
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
    // position: 'relative',
    display: 'flex',

    // flexDirection: 'column',
    marginTop: '15px',
    width: '100%',
    // [theme.breakpoints.up("md")]: {
    //   marginLeft: '39px',
    // },
    // [theme.breakpoints.down("sm")]: {
    justifyContent: 'center',
    // },

  },
  activityGraph: {
    height: '432px',
    paddingTop: '98px',
    width: '100%',
    [theme.breakpoints.down("xs")]: {
      display: 'none',
    },
  },
  graph: {
    height: '336px',
    width: '100%',
  },
  stats: {
    // position: 'absolute',
    // top: '-15px',
    // right: '0',
    // zIndex: '10',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginTop: '0',
    fontFamily: 'Mulish',
    background: theme.palette.common.white,
    // height: '100%',
    width: '259px',
    [theme.breakpoints.down("xs")]: {
      // top: '42px',
      alignItems: 'center',
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
