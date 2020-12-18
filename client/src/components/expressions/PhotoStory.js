import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import photostory from '../../assets/images/PS.png';

function PhotoStory() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <img className={classes.Image} src={photostory} alt='PhotoStory' />
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
