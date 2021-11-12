import React from 'react';
import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import witsdom from '../../assets/images/witsdom.png';

function Witsdom() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Image className={classes.img} src={witsdom} alt='Witsdom' />
    </div>
  );
}

export default Witsdom;

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
