import React from 'react';

// libararies
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

// placeholder
import { OPTIONS } from '../../assets/placeholder/guide';

// images
import icon1 from '../../assets/images/guide/optIcon1.png';
import icon2 from '../../assets/images/guide/optIcon2.png';
import icon3 from '../../assets/images/guide/optIcon3.png';
import icon4 from '../../assets/images/guide/optIcon4.png';

// components
import SubCategories from '../widgets/SubCategory';

// theme
import theme from '../../config/themes/light';

const Options = () => {
  const classes = useStyles(theme);

  return (
    <div className={classes.wrapper}>
      <Typography variant='h1' className={classes.title}>
        Guide
      </Typography>
      <Grid
        container
        direction='row'
        justify='flex-start'
        alignItems='center'
        className={classes.tagWrapper}
      >
        {OPTIONS.tags.map((tag, key) => (
          <SubCategories text={tag} key={key} className={classes.tag} />
        ))}
      </Grid>
      <div className={classes.optionWrapper}>
        <img src={icon1} alt='Icon' className={classes.icons} />
        <Typography variant='h3' className={classes.option1}>
          Communication Directory
        </Typography>
        <span className={classes.link}>
          <a href='#'>Download</a>
        </span>
      </div>
      <div className={classes.optionWrapper}>
        <img src={icon2} alt='Icon' className={classes.icons} />
        <Typography variant='h3' className={classes.option2}>
          SAC and Clubs Info
        </Typography>
        <Typography variant='h3' className={classes.arrow}>
          <i className='fas fa-chevron-right'></i>
        </Typography>
      </div>
      <div className={classes.optionWrapper}>
        <img src={icon3} alt='Icon' className={classes.icons} />
        <Typography variant='h3' className={classes.option2}>
          Hall Info
        </Typography>
        <Typography variant='h3' className={classes.arrow}>
          <i className='fas fa-chevron-right'></i>
        </Typography>
      </div>
      <div className={classes.optionWrapper}>
        <img src={icon4} alt='Icon' className={classes.icons} />
        <Typography variant='h3' className={classes.option2}>
          Health and Emergency Info
        </Typography>
        <Typography variant='h3' className={classes.arrow}>
          <i className='fas fa-chevron-right'></i>
        </Typography>
      </div>
    </div>
  );
};

export default Options;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: '1.5rem',
    position: 'relative',
    margin: '40px auto 0px auto',
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      marginTop: '1rem',
    },
  },
  title: {
    color: theme.palette.primary.blue60,
  },
  tagWrapper: {
    margin: '32px 0px',
    [theme.breakpoints.down('xs')]: {
      margin: '16px 0px',
    },
  },
  tag: {
    whiteSpace: 'nowrap',
  },
  optionWrapper: {
    maxWidth: '1200px',
    boxShadow: theme.shadows[0],
    borderRadius: '6px',
    padding: '24px',
    margin: '10px 0px',
    display: 'flex',
    direction: 'row',
    position: 'relative',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      padding: '12px',
    },
  },
  icons: {
    marginRight: '32px',
    [theme.breakpoints.down('xs')]: {
      marginRight: '14px',
    },
  },
  option1: {
    color: theme.palette.secondary.main,
  },
  link: {
    fontSize: '18px',
    marginLeft: '32px',
    [theme.breakpoints.down('xs')]: {
      visibility: 'hidden',
      width: '0px',
    },
  },
  option2: {
    color: theme.palette.secondary.main,
    textDecoration: 'underline',
  },
  arrow: {
    position: 'absolute',
    right: '24px',
    color: theme.palette.secondary.main,
    fontSize: '20px',
    [theme.breakpoints.down('xs')]: {
      right: '12px',
    },
  },
}));
