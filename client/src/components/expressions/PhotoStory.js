import React from 'react';
import Image from 'next/image';

import makeStyles from '@mui/styles/makeStyles';

// images
import photoStory from '../../assets/images/photoStory.png';

function PhotoStory() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Image className={classes.img} src={photoStory} alt='PhotoStory' />
    </div>
  );
}

export default PhotoStory;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    borderRadius: '8px',
    width: '100%',
  },
  img: {
    width: '100%',
    objectFit: 'cover',
  },
}));
