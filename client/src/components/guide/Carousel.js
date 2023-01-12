import React, { useState } from 'react';
import Image from 'next/image';
import makeStyles from '@mui/styles/makeStyles';
import { IconButton, Typography, useMediaQuery } from '@mui/material';
import ArrowLeft from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowRight from '@mui/icons-material/ArrowCircleRightOutlined';

// Utils
import theme from '../../config/themes/light';

const Carousel = ({ content }) => {
  const classes = useStyles();
  const length = content.length;

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(content) || content.length <= 0) {
    return null;
  }

  const Desktop = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <section className={classes.wrapper}>
      <div className={classes.imgContainer}>
        {Desktop && (
          <Image
            className={classes.sideImage}
            src={
              current === 0 ? content[length - 1].img : content[current - 1].img
            }
            alt='image'
            width='400px'
            height='300px'
            objectFit='contain'
          />
        )}
        <div className={classes.midSlide}>
          <a
            target='_blank'
            href={content[current].link}
            rel='noopener noreferrer'
          >
            <Image
              className={classes.centreImage}
              src={content[current].img}
              alt='image'
              width='600px'
              height='400px'
            />
          </a>
          {content[current].desc && (
            <div className={classes.textWrapper}>
              <Typography
                variant='body2'
                textAlign='center'
                className={classes.text}
              >
                {content[current].desc}
              </Typography>
            </div>
          )}
        </div>
        {Desktop && (
          <Image
            className={classes.sideImage}
            src={
              current === length - 1 ? content[0].img : content[current + 1].img
            }
            alt='image'
            width='400px'
            height='300px'
            objectFit='contain'
          />
        )}
      </div>

      <span className={classes.navIconWrapper}>
        <IconButton
          className={classes.navIcon}
          onClick={prevSlide}
          size='large'
        >
          <ArrowLeft />
        </IconButton>
        <IconButton
          className={classes.navIcon}
          onClick={nextSlide}
          size='large'
        >
          <ArrowRight />
        </IconButton>
      </span>
    </section>
  );
};

export default Carousel;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    maxWidth: '100%',
    position: 'relative',
    backgroundColor: theme.palette.secondary.main,
  },

  carousel: {
    display: 'flex',
    overflowX: 'scroll',
    overflowY: 'none',
    scrollBehavior: 'smooth',
  },

  imgContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1em',
    gap: 20,
  },

  centreImage: {
    borderRadius: '16px',
  },

  sideImage: {
    borderRadius: '16px',
    opacity: '0.5',
  },

  midSlide: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '16px',
  },

  bottomContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: '3%',
    position: 'absolute',
  },

  textWrapper: {
    justifyContent: 'justify',
    alignItems: 'justify',
    marginTop: '15px',
    color: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '15px',
      paddingRight: '15px',
    },
  },

  navIconWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.secondary.neutral70,
  },

  navIcon: {
    color: theme.palette.secondary.neutral70,
  },
}));
