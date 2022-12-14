import React, { useRef } from 'react';
import Image from 'next/image';

import { Typography, Grid } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import ArrowLeft from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowRight from '@mui/icons-material/ArrowCircleRightOutlined';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

const PhotoCarousel = ({ IMAGE, navigator, TEXT }) => {
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
    centerPadding: '400px',
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          centerMode: true,
          centerPadding: '520px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          centerMode: true,
          centerPadding: '65px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 960,
        settings: {
          centerMode: true,
          centerPadding: '75px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          centerPadding: '50px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 350,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={classes.wrapper}>
      <Slider {...config}>
        {IMAGE.map((img, key) => (
          <Grid item key={key} className={classes.imgWrapper}>
            <Image src={img} alt='Icon' className={classes.img} />
          </Grid>
        ))}
      </Slider>
      {TEXT && (
        <div className={classes.textWrapper}>
          <Typography variant='body2' className={classes.text}>
            {TEXT}
          </Typography>
        </div>
      )}
      <div className={classes.navIconWrapper}>
        <ArrowLeft onClick={previous} className={classes.navIcon} />
        <div>{navigator}</div>
        <ArrowRight onClick={next} className={classes.navIcon} />
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
    marginTop: '12px',
    display: 'flex',
    direction: 'row',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: '0px 24px',
      justifyContent: 'flex-start',
    },
  },
  text: {
    color: theme.palette.common.white,
    alignSelf: 'center',
  },
  navIconWrapper: {
    display: 'flex',
    direction: 'row',
    justifyContent: 'center',
    marginTop: '24px',
    gap: 10,
  },
  navIcon: {
    color: theme.palette.secondary.neutral70,
    cursor: 'pointer',
  },
  text: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.common.white,
    '& div': {
      marginInline: '0.3rem',
    },
  },
}));
