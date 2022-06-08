import makeStyles from '@mui/styles/makeStyles';
import Image from 'next/image';
import React from 'react';
import theme from '../../../config/themes/light';

function ImageBox({ widthImage, img }) {
  const classes = useStyles(theme, widthImage);
  return (
    <div className={classes.mainBox}>
      <Image src={img} alt='' className={classes.img} />
    </div>
  );
}

export default ImageBox;

const useStyles = makeStyles((theme, widthImage) => ({
  mainBox: {
    marginLeft: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'right',
    width: widthImage,

    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  img: {
    height: 'auto',
    width: '100%',
  },
}));
