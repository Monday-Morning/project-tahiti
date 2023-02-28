import { React, useState } from 'react';

// libraries
import {
  Typography,
  Grid,
  Button,
  useMediaQuery,
  Container,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

//Theme
import theme from '../../config/themes/light';

// Assets
import { ARCHIVES } from '../../assets/placeholder/guide';

function Calendar({ activeMonth, activeYear, selectMonth, selectYear }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.archive}>
        {useMediaQuery(theme.breakpoints.down('sm')) ? (
          <div className={classes.archiveWrapper}>
            <select
              name='year'
              id='year'
              value={activeYear}
              onChange={(e) => selectYear(e.target.value)}
              className={classes.drop}
            >
              {ARCHIVES.years.map((year, key) => (
                <option key={key} value={year} className={classes.selectItem}>
                  {year}
                </option>
              ))}
            </select>
            <select
              name='month'
              id='month'
              value={activeMonth}
              onChange={(e) => selectMonth(e.target.value)}
              className={classes.drop}
            >
              {ARCHIVES.months.map((month, key) => (
                <option key={key} value={month}>
                  {month}
                </option>
              ))}
            </select>
            <Button
              type='submit'
              variant='contained'
              className={classes.submitButton}
            >
              Browse
            </Button>
          </div>
        ) : (
          <div className={classes.archiveWrap}>
            <Container>
              <Grid
                container
                direction='row'
                justifyContent='flex-start'
                alignItems='center'
                className={classes.timeWrapper}
              >
                {ARCHIVES.years.map((year, key) => (
                  <Grid item key={key}>
                    <span
                      className={
                        activeYear === year ? classes.active : classes.time
                      }
                      onClick={() => selectYear(year)}
                      onKeyDown={() => selectYear(year)}
                      role='button'
                      tabIndex={0}
                    >
                      {year}
                    </span>
                  </Grid>
                ))}
              </Grid>
              <Grid
                container
                direction='row'
                justifyContent='flex-start'
                alignItems='center'
                className={classes.timeWrapper}
              >
                {ARCHIVES.months.map((month, key) => (
                  <Grid item key={key}>
                    <span
                      className={
                        activeMonth === month ? classes.active : classes.time
                      }
                      onClick={() => selectMonth(month)}
                      onKeyDown={() => selectMonth(month)}
                      role='button'
                      tabIndex={0}
                    >
                      {month}
                    </span>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </div>
        )}
      </div>

      <div className={classes.postWrapper}>
        <Container>
          <Typography variant='h3'>
            <span className={classes.select}>Selected:</span>
            {activeMonth === 'All'
              ? activeMonth
              : `${activeMonth} ${activeYear}`}
          </Typography>
        </Container>
      </div>
    </>
  );
}

export default Calendar;

const useStyles = makeStyles((theme) => ({
  archive: {
    padding: '5px calc((100% - 1280px)/2 + 24px)',
    backgroundColor: theme.palette.background.archive,
    [theme.breakpoints.down('lg')]: {
      padding: '5px 24px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '30px 24px',
    },
  },
  postWrapper: {
    marginTop: '1.5rem',
    maxWidth: '1280px',
    margin: '40px auto 20px auto',
    padding: '0 24px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '1rem',
    },
  },
  drop: {
    backgroundColor: theme.palette.background.archive,
    borderColor: theme.palette.common.white,
    padding: '4px 12px',
    fontFamily: 'Source Sans Pro',
    fontSize: '20px',
    lineHeight: '28px',
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightRegular,
  },
  select: {
    color: theme.palette.grey[400],
    marginRight: '26px',
    marginLeft: '5px',
  },
  timeWrapper: {
    margin: '24px 0px',
  },
  time: {
    color: theme.palette.secondary.neutral60,
    fontFamily: 'IBM Plex Sans',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: '24px',
    lineHeight: '32px',
    margin: '24px',
    cursor: 'pointer',
  },
  active: {
    color: theme.palette.common.white,
    fontFamily: 'IBM Plex Sans',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: '24px',
    lineHeight: '32px',
    margin: '24px',
    cursor: 'pointer',
  },
  archiveWrap: {
    marginLeft: '-24px',
  },
  archiveWrapper: {
    display: 'flex',
    direction: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  submitButton: {
    backgroundColor: theme.palette.primary.blue20,
  },
}));
