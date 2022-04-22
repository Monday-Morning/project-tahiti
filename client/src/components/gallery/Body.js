import React, { useState } from 'react';

// libararies
import { makeStyles } from '@material-ui/core/styles';

// Components
import Disclaimer from '../article/Disclaimer';
import PhotoCarousel from '../widgets/PhotoCarousel';
import ArticleTags from '../article/Tags';
import { Grid } from 'react-feather';

// Placeholder
import { GALLERY } from '../../assets/placeholder/gallery';
import Image from 'next/image';

const Body = () => {
  const classes = useStyles();

  const [activeImage, setImage] = useState(0);
  const [view, setView] = useState('Grid');

  return (
    <div>
      <div className={classes.imageWrapper}>
        <div className={classes.switchContainer}>
          <div
            className={classes.switch}
            style={{
              backgroundColor: view === 'Slide' ? '#DADADA' : 'unset',
              color: view === 'Slide' ? 'black' : 'white',
            }}
            onClick={() => setView('Slide')}
          >
            <i className='fas fa-sliders-h' style={{ fontSize: '20px' }}></i>
          </div>
          <div
            className={classes.switch}
            style={{
              backgroundColor: view === 'Grid' ? '#DADADA' : 'unset',
              color: view === 'Grid' ? 'black' : 'white',
            }}
            onClick={() => setView('Grid')}
          >
            <Grid size={20} />
          </div>
        </div>
        {view === 'Grid' ? (
          <div>
            <div className={classes.active}>
              <Image
                src={GALLERY.gallery[activeImage]}
                alt='image'
                className={classes.activeImage}
              />
            </div>
            <div className={classes.imageContainer}>
              {GALLERY.gallery.map((image, key) => (
                <Image
                  src={image}
                  alt='image'
                  key={key}
                  className={classes.images}
                  onClick={() => setImage(key)}
                />
              ))}
            </div>
          </div>
        ) : (
          <div>
            <PhotoCarousel IMAGE={GALLERY.gallery} />
          </div>
        )}
      </div>
      <div className={classes.wrapper}>
        <Disclaimer />
        <ArticleTags tags={GALLERY.tags} />
      </div>
    </div>
  );
};

export default Body;

const useStyles = makeStyles((theme) => ({
  imageWrapper: {
    backgroundColor: theme.palette.secondary.main,
    padding: '24px 0px 48px 0px',
    [theme.breakpoints.down('xs')]: {
      padding: '12px 0px',
    },
  },
  switchContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  switch: {
    height: '40px',
    padding: '10px 14px',
    backgroundColor: 'white',
    cursor: 'pointer',
    border: '1px solid',
    borderColor: theme.palette.secondary.neutral50,
  },
  wrapper: {
    maxWidth: '1280px',
    margin: '60px auto 0px auto',
    [theme.breakpoints.down('xs')]: {
      margin: '40px 16px 0px 24px',
    },
  },
  active: {
    textAlign: 'center',
    margin: '40px auto 80px auto',
  },
  activeImage: {
    height: '500px',
  },
  imageContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '20px 0px',
  },
  images: {
    height: '173px',
    margin: '12px',
  },
}));
