import React, { useEffect, useState } from 'react';
import { useDate } from '../../hooks/useDate';
import { Card, CardContent, Link, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { ChevronLeft, ChevronRight } from 'react-feather';

<<<<<<< HEAD
const Calendar = () => {
=======
function Calendar() {
  const [nav, setNav] = useState(0);
  const { days, currentMonthYear } = useDate(nav);
  const [weekDays, setWeekDays] = useState([]);

  useEffect(() => {
    const newDays = [];
    const _days = days;
    for (let i = _days.length / 7; i >= 0; i--)
      newDays.push(_days.splice(0, 7));

    setWeekDays(newDays);
    console.log('hello');
  }, [nav, days]);

>>>>>>> 18d66dd9969870bde53ba3b9f96cba516ea18979
  const classes = useStyles();
  return (
    <Card className={classes.calendar}>
      <CardContent>
        <div className={classes.events}>
          <Typography variant='h1'>Events</Typography>
          <Link href='#' className={classes.eventDetails}>
            Event Details
          </Link>
        </div>
        <div className={classes.monthRow}>
          <div className={classes.month}>{currentMonthYear}</div>

          <div className={classes.calendarActions}>
            <ChevronLeft
              className={classes.calendarAction}
              onClick={() => setNav((prev) => prev - 1)}
            />

            <ChevronRight
              className={classes.calendarAction}
              onClick={() => setNav((prev) => prev + 1)}
            />
          </div>
        </div>

        <div className={classes.weekRow}>
          <div className={classes.dayOfTheWeek}>Mo</div>
          <div className={classes.dayOfTheWeek}>Tu</div>
          <div className={classes.dayOfTheWeek}>We</div>
          <div className={classes.dayOfTheWeek}>Th</div>
          <div className={classes.dayOfTheWeek}>Fr</div>
          <div className={classes.dayOfTheWeek}>Sa</div>
          <div className={classes.dayOfTheWeek}>Su</div>
        </div>
        <div>
          {weekDays.map((week, index) => (
            <div className={classes.tableRow} key={index}>
              {week.map((day, index) => (
                <div
                  className={classes.dayValue}
                  key={parseInt(day.value) + index}
                >
                  <div
                    className={
                      day.isCurrentDay
                        ? `${classes.today} ${classes.day}`
                        : `${classes.day}`
                    }
                  >
                    {day.value}
                  </div>

                  <div className={classes.eventColors}>
                    {day.isInstituteEvent && (
                      <div className={classes.dateRed}></div>
                    )}

                    {day.isClubEvent && (
                      <div className={classes.dateGreen}></div>
                    )}

                    {day.isInstituteHoliday && (
                      <div className={classes.dateYellow}></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className={classes.eventIndex}>
          <div className={classes.eventType}>
            <div className={classes.redDot}></div>
            Insti Holidays
          </div>
          <div className={classes.eventType}>
            <div className={classes.yellowDot}></div>
            Club Events
          </div>
          <div className={classes.eventType}>
            <div className={classes.greenDot}></div>
            Insti Events
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default Calendar;

const useStyles = makeStyles((theme) => ({
  calendar: {
    boxShadow: theme.shadows[0],
    backgroundColor: theme.palette.common.white,
    width: '379px',
    height: '423px',
  },
  weekRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7,1fr)',
    textAlign: 'center',
    margin: '1.625rem 0 1rem 0',
    fontWeight: 700,
    color: theme.palette.secondary.neutral50,
  },
  dayOfTheWeek: {
    fontFamily: theme.typography.fontFamily,
  },
  events: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 0.5rem 0 0.5rem',
  },
  eventDetails: {
    fontFamily: 'Source Sans Pro',
    color: 'black',
    width: '109px',
    height: '28px',
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '28px',
  },

  monthRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '1.5rem',
    height: '19px',
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '19px',
    margin: '1.5rem 0.5rem 0 0.5rem',
  },
  month: {
    fontSize: '16px',
    fontFamily: theme.typography.fontFamily,
  },
  calendarAction: {
    marginLeft: '1rem',
  },
  day: {
    height: '17px',
    width: '17.5px',
    fontFamily: theme.typography.fontFamily,
  },
  today: {
    background: theme.palette.primary.blue50,
    color: theme.palette.common.white,
    borderRadius: '50%',
    width: '1rem',
  },
  eventIndex: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '1rem',
  },
  eventColors: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '10px',
    width: '15px',
  },
  eventType: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: '400',
    fontFamily: 'Source Sans Pro',
  },
  redDot: {
    backgroundColor: theme.palette.accent.red,
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    marginRight: '0.5rem',
  },
  yellowDot: {
    backgroundColor: theme.palette.accent.yellow,
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    marginRight: '0.5rem',
  },
  greenDot: {
    backgroundColor: theme.palette.accent.green,
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    marginRight: '0.5rem',
  },
  dateRed: {
    backgroundColor: theme.palette.accent.red,
    width: '13.14px',
    height: '0.1rem',
    marginBottom: '2px',
  },
  dateGreen: {
    backgroundColor: theme.palette.accent.green,
    width: '13.14px',
    height: '0.1rem',
    marginBottom: '2px',
  },
  dateYellow: {
    backgroundColor: theme.palette.accent.yellow,
    width: '13.14px',
    height: '0.1rem',
  },

  dayValue: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    width: '15px',
    fontSize: '14px',
    fontWeight: '600',
    paddingTop: '0.65rem',
    textAlign: 'center',
    fontFamily: 'Inter',
  },
  tableRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7,1fr)',
    justifyItems: 'center',
  },
}));
