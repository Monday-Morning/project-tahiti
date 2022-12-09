import React, { useEffect, useState } from 'react';
import { useDate } from '../../hooks/useDate';
import {
  Button,
  Card,
  CardContent,
  Container,
  IconButton,
  InputBase,
  Link,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import makeStyles from '@mui/styles/makeStyles';
import { ChevronLeft, ChevronRight } from 'react-feather';
import NewEvent from './NewEvent';
import Backdrop from '@mui/material/Backdrop';

const EventCalendar = () => {
  const [nav, setNav] = useState(0);
  const [open, setOpen] = useState(false);
  const { days, currentMonthYear } = useDate(nav);
  const [weekDays, setWeekDays] = useState([]);
  const [date, setDate] = useState(null);

  const selectedDate = date + ' ' + currentMonthYear;
  const newSelectedDate = new Date(selectedDate);
  var year = newSelectedDate.toLocaleString('default', { year: 'numeric' });
  var month = newSelectedDate.toLocaleString('default', { month: '2-digit' });
  var day = newSelectedDate.toLocaleString('default', { day: '2-digit' });

  var formattedDate = day + '/' + month + '/' + year;
  const handleChange = (days) => {
    setOpen((prev) => !prev);
    setDate(days);
  };
  useEffect(() => {
    const newDays = [];
    const _days = days;
    for (let i = _days.length / 7; i >= 0; i--)
      newDays.push(_days.splice(0, 7));

    setWeekDays(newDays);
  }, [nav, days]);

  const classes = useStyles();
  return (
    <Container>
      <Backdrop className={classes.eventBox} open={open}>
        <NewEvent
          handleChange={handleChange}
          formattedDate={formattedDate}
          className={classes.newEventBox}
        />
      </Backdrop>
      <div className={classes.calendarHeader}>
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
        <div>
          <Typography variant='caption' display='block' gutterBottom>
            Today
          </Typography>
        </div>
        <div className={classes.currentMonth}>{currentMonthYear}</div>

        <div className={classes.eventSearch}>
          <div>
            <IconButton type='button' aria-label='search'>
              <SearchIcon />
            </IconButton>
            <InputBase
              placeholder='Search for events'
              inputProps={{ 'aria-label': 'search for events' }}
            />
          </div>
          <div>
            <Button variant='contained' className={classes.findEventsButton}>
              Find Events
            </Button>
          </div>
          <div className={classes.listMonthDay}>
            <div>
              <Link href='#' underline='none' className={classes.listChange}>
                {'List'}
              </Link>
            </div>
            <div>
              <Link href='#' underline='none' className={classes.listChange}>
                {'Month'}
              </Link>
            </div>
            <div>
              <Link href='#' underline='none' className={classes.listChange}>
                {'Day'}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Card className={classes.calendar}>
        <CardContent>
          <div className={classes.calendarBox}>
            <div className={classes.weekRow}>
              <div className={classes.dayOfTheWeek}>MON</div>
              <div className={classes.dayOfTheWeek}>TUE</div>
              <div className={classes.dayOfTheWeek}>WED</div>
              <div className={classes.dayOfTheWeek}>THU</div>
              <div className={classes.dayOfTheWeek}>FRI</div>
              <div className={classes.dayOfTheWeek}>SAT</div>
              <div className={classes.dayOfTheWeek}>SUN</div>
            </div>
            <div className={classes.dayContainer}>
              {weekDays.map((week, index) => (
                <div className={classes.tableRow} key={index}>
                  {week.map((day, index) => (
                    <div
                      className={classes.dayValue}
                      key={parseInt(day.value) + index}
                      onClick={() => handleChange(day.value)}
                    >
                      <div
                        className={
                          day.isCurrentDay
                            ? `${classes.today} ${classes.dayValue}`
                            : `${classes.day}`
                        }
                      >
                        {day.value}
                        <div className={classes.eventColors}>
                          {day.isCurrentDay && day.isInstituteHoliday && (
                            <div className={classes.redDot}></div>
                          )}
                          {day.isCurrentDay && day.isInstituteHoliday && (
                            <div>
                              <Typography className={classes.eventsTitle}>
                                Holiday
                              </Typography>
                            </div>
                          )}
                        </div>
                        <div className={classes.eventColors}>
                          {day.isCurrentDay && day.isInstituteEvent && (
                            <div className={classes.greenDot}></div>
                          )}
                          {day.isCurrentDay && day.isInstituteEvent && (
                            <div>
                              <Typography className={classes.eventsTitle}>
                                Independence Day
                              </Typography>
                            </div>
                          )}
                        </div>
                        <div className={classes.eventColors}>
                          {day.isCurrentDay && day.isClubEvent && (
                            <div className={classes.yellowDot}></div>
                          )}
                          {day.isCurrentDay && day.isClubEvent && (
                            <div>
                              <Typography className={classes.eventsTitle}>
                                Webinar
                              </Typography>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      <div className={classes.eventIndex}>
        <div className={classes.eventFooter}>
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
        <div>
          <Button variant='contained' className={classes.syncButton}>
            Sync with Google Calender
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default EventCalendar;

const useStyles = makeStyles((theme) => ({
  calendar: {
    boxShadow: theme.shadows[0],
    backgroundColor: theme.palette.primary.blue10,
    height: '100%',
  },
  calendarHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '48px 0 15px 0',
  },
  calendarActions: {
    display: 'flex',
  },
  currentMonth: {
    fontFamily: 'Source Sans Pro',
    fontSize: '24px',
    fontWeight: 600,
    lineHeight: '28px',
    display: 'flex',
  },

  eventSearch: {
    width: '719px',
    height: '40px',
    border: '0.5px solid #DADADA',
    borderRadius: '2px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  findEventsButton: {
    height: '36px',
    borderRadius: '4px',
    padding: '6px 20px 6px 20px',
    gap: '10px',
    top: '1px',
  },
  listMonthDay: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    textAlign: 'center',
    alignItems: 'center',
  },
  listChange: {
    fontFamily: 'Source Sans Pro',
    color: 'black',
    fontWeight: 400,
    fontSize: '16px',
  },
  calendarBox: {
    minHeight: '963px',
  },
  weekRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7,1fr)',
    justifyItems: 'center',
    marginBottom: '12px',
  },

  dayOfTheWeek: {
    fontFamily: 'IBM Plex Sans',
    fontWeight: 600,
    fontSize: '24px',
    lineHeight: '32px',
  },
  dayContainer: {
    display: 'grid',
    rowGap: '30px',
  },
  tableRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7,1fr)',
    justifyItems: 'center',
  },

  dayValue: {
    fontFamily: theme.typography.fontFamily,
    boxSizing: 'border-box',
    width: '129px',
    height: '129px',
    left: '170px',
    top: '431px',
    fontWeight: 600,
    fontSize: '24px',
    lineHeight: '32px',
    backgroundColor: theme.palette.common.white,
    boxShadow:
      '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 3px rgba(0, 0, 0, 0.12)',
    cursor: 'pointer',
  },

  eventBox: {
    zIndex: 10,
    width: '500',
    height: '500',
    backgroundColor: 'black',
  },
  day: {
    fontFamily: theme.typography.fontFamily,
    width: '29px',
    height: '32px',
    padding: '10px',
  },
  today: {
    boxSizing: 'border-box',
    border: '4px solid #006DCC',
    padding: '10px',
  },

  eventColors: {
    display: 'flex',
    marginTop: '5px',
    alignItems: 'center',
  },
  dateEvents: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Source Sans Pro',
    fontWeight: '400',
    fontSize: '12px',
  },
  eventsTitle: {
    fontFamily: 'Source Sans Pro',
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '16px',
  },
  eventIndex: {
    display: 'flex',
    marginTop: '1rem',
    justifyContent: 'space-between',
  },
  eventFooter: {
    display: 'flex',
    gap: '45px',
  },
  eventType: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: theme.typography.fontFamily,
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    fontStyle: 'normal',
  },

  redDot: {
    backgroundColor: theme.palette.accent.red,
    width: '11px',
    height: '11px',
    borderRadius: '50%',
    marginRight: '0.5rem',
  },
  yellowDot: {
    backgroundColor: theme.palette.accent.yellow,
    width: '11px',
    height: '11px',
    borderRadius: '50%',
    marginRight: '0.5rem',
  },
  greenDot: {
    backgroundColor: theme.palette.accent.green,
    width: '11px',
    height: '11px',
    borderRadius: '50%',
    marginRight: '0.5rem',
  },
}));
