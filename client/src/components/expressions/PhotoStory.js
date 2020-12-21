import React from 'react';

//libararies
import { makeStyles } from '@material-ui/core/styles';

//images
import photoStory from '../../assets/images/photoStory.png';

function PhotoStory() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <img className={classes.Image} src={photoStory} alt='PhotoStory' />
    </div>
  );
}

export default PhotoStory;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    borderRadius: '8px',
  },
  Image: {
    width: '100%',
    objectFit: 'cover',
  },
}));
