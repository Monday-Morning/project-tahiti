/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';

import makeStyles from '@mui/styles/makeStyles';
import { Typography, Grid, Button, useMediaQuery } from '@mui/material';
import theme from '../../config/themes/light';

// Components
import ArticleCardStack from '../widgets/article/ArticleCardStack';
import ArticleCarousel from '../widgets/article/ArticleCarousel';

// Assets
import { ARCHIVES } from '../../assets/placeholder/guide';

const Archives = ({ issues }) => {
  const classes = useStyles();
  const [activeMonth, setMonth] = useState(ARCHIVES.months[0]);
  const [activeYear, setYear] = useState(ARCHIVES.years[0]);
  let articles;
  useMediaQuery(theme.breakpoints.down('sm'))
    ? (articles = issues.slice(0, 3))
    : (articles = issues.slice(0, 6));

  const selectMonth = (month) => {
    setMonth(month);
  };
  const selectYear = (year) => {
    setYear(year);
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <Typography variant='h1' className={classes.title}>
          NITR 101
        </Typography>
        <Grid className={classes.titleText}>
          The only guide you will need at NITR!
        </Grid>
      </div>
      <ArticleCarousel articleList={articles} /> {/* props missing */}
      <div className={classes.archive}>
        <Typography variant='h1' className={classes.archivetitle}>
          Archive
        </Typography>
        {useMediaQuery(theme.breakpoints.down('sm')) ? (
          <div className={classes.archieveWrapper}>
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
          <div className={classes.archieveWrap}>
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
          </div>
        )}
      </div>
      <div className={classes.postWrapper}>
        <Typography variant='h3'>
          <span className={classes.select}>Selected:</span>
          {activeMonth} {activeYear}
        </Typography>
        <div>
          <ArticleCardStack articleList={articles} />
        </div>
        <div className={classes.buttonWrapper}>
          <Button type='submit' variant='contained' color='primary'>
            See All Posts
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Archives;

const useStyles = makeStyles(() => ({
  wrapper: {
    overflow: 'hidden',
  },
  header: {
    padding: '0 calc((100% - 1280px)/2 + 24px)',
    margin: '60px auto 0px auto',
    display: 'flex',
    direction: 'row',
    [theme.breakpoints.down('lg')]: {
      padding: '40px 24px',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      padding: '0 24px',
    },
  },
  title: {
    color: theme.palette.primary.blue60,
    borderTop: '4px solid',
    borderColor: theme.palette.primary.blue60,
    width: '205px',
  },
  titleText: {
    marginLeft: '7%',
    fontFamily: 'Source Sans Pro',
    color: theme.palette.secondary.neutral70,
    fontSize: '20px',
    fontWeight: '400',
    opacity: '75%',
    marginTop: '1.5rem',
    textAlign: 'justify',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
      lineHeight: '20px',
      marginLeft: '0px',
      marginTop: '0.75rem',
    },
  },
  archive: {
    padding: '40px calc((100% - 1280px)/2 + 24px)',
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.down('lg')]: {
      padding: '40px 24px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '30px 24px',
    },
  },
  archivetitle: {
    color: theme.palette.common.white,
    borderTop: '4px solid',
    borderColor: theme.palette.common.white,
    width: '205px',
    [theme.breakpoints.down('sm')]: {
      borderTop: '0px',
      marginBottom: '12px',
    },
  },
  formControl: {
    margin: '5px',
  },
  drop: {
    backgroundColor: theme.palette.secondary.main,
    borderColor: theme.palette.common.white,
    padding: '4px 12px',
    fontFamily: 'Source Sans Pro',
    fontSize: '20px',
    lineHeight: '28px',
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightRegular,
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
  select: {
    color: theme.palette.grey[400],
    marginRight: '26px',
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
  buttonWrapper: {
    padding: '40px 0px',
    display: 'flex',
    justifyContent: 'center',
  },
  archieveWrap: {
    marginLeft: '-24px',
  },
  archieveWrapper: {
    display: 'flex',
    direction: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  submitButton: {
    backgroundColor: theme.palette.primary.blue20,
  },
}));
