import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import witsdom from '../../assets/images/witsdom.png';

function Witsdom() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <img className={classes.Image} src={witsdom} alt='Witsdom' />
    </div>
  );
}

export default Witsdom;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    borderRadius: '8px',
  },
  Image: {
    width: '100%',
    objectFit: 'cover',
  },
}));
