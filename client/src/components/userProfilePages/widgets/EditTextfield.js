import React, { useState } from 'react';
import { Edit2 } from 'react-feather';
import { Typography, TextField } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import theme from '../../../config/themes/light';

function EditTextfield({ head, value }) {
  const classes = useStyles(theme);
  const [toggle, setToggle] = useState(false);

  return (
    <div className={classes.infoBlock}>
      <div className={classes.infoHead}>
        <Typography variant='h2' className={classes.head}>
          {head}
        </Typography>
        <div className={classes.editButton}>
          <Edit2
            className={classes.edit}
            size={18}
            onClick={() => {
              setToggle(true);
            }}
          />
        </div>
      </div>
      <div className={classes.typo}>
        {toggle && (
          <TextField
            variant='standard'
            className={classes.subInfo}
            InputProps={{ disableUnderline: true }}
            defaultValue={value}
          />
        )}
        {!toggle && (
          <Typography className={classes.subInfo}> {value} </Typography>
        )}
      </div>
    </div>
  );
}

export default EditTextfield;

const useStyles = makeStyles((theme) => ({
  head: {
    fontFamily: 'IBM Plex Sans',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
      fontWeight: '800',
    },
  },
  typo: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  infoBlock: {
    marginTop: '2.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  edit: {
    cursor: 'pointer',
  },
  infoHead: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  editButton: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '0.25rem',
  },
  subInfo: {
    fontFamily: 'Source Sans Pro',
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: '400',
    marginTop: '0.25rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
    },
  },
}));
