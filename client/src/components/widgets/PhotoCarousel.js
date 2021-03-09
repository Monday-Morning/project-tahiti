import React, { useRef } from 'react';

import { makeStyles } from '@material-ui/core';
import { Typography, Grid } from '@material-ui/core';

import '../../assets/css/slider.css';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather';

const PhotoCarousel = ({ IMAGE, navigator }) => {
  const slider = useRef();
  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };
  const classes = useStyles();
  const config = {
    ref: slider,
    centerMode: true,
    arrows: false,
    slidesToShow: 1,
    centerPadding: '370px',
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          centerMode: true,
          centerPadding: '320px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          centerMode: true,
          centerPadding: '200px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 960,
        settings: {
          centerMode: true,
          centerPadding: '150px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          centerPadding: '70px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 350,
        settings: {
          centerMode: true,
          centerPadding: '50px',
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={classes.wrapper}>
      <div>
        <Slider {...config}>
          {IMAGE.map((img, key) => (
            <Grid item key={key} className={classes.img}>
              <img src={img} alt='Icon' className={classes.img} />
            </Grid>
          ))}
        </Slider>
      </div>
      <div className={classes.textWrapper}>
        <Typography variant='h3' className={classes.text}>
          <ArrowLeftCircle onClick={previous} />
          <div>{navigator}</div>
          <ArrowRightCircle onClick={next} />
        </Typography>
      </div>
    </div>
  );
};

export default PhotoCarousel;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: '24px',
  },
  textWrapper: {
    display: 'flex',
    direction: 'row',
    justifyContent: 'center',
    marginTop: '24px',
    [theme.breakpoints.down('xs')]: {
      marginTop: '0px',
    },
  },
  text: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.common.white,
    '& div': {
      marginInline: '0.3rem',
    },
  },
  img: {
    [theme.breakpoints.down('lg')]: {
      height: '500px',
    },
    [theme.breakpoints.down('md')]: {
      height: '400px',
    },
    [theme.breakpoints.down('sm')]: {
      height: '300px',
    },
    [theme.breakpoints.down('xs')]: {
      height: '180px',
    },
  },
}));
