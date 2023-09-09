import React, { useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

const DialogPoll = ({ dialogBoxOpen, setDialogBoxOpen }) => {
  const [value, setValue] = useState(0);
  const [live, setLive] = useState('offline');
  const [Options, setOptions] = useState('');
  const DialogBoxClose = () => {
    setDialogBoxOpen(false);
    setValue(0);
    setLive('offline');
  };
  const handleOptions = (e) => {
    setOptions(e.target.value);
  };
  const handleValue = (e) => {
    setValue(e.target.value);
  };
  const handleLive = () => {
    setLive('Live');
  };
  const handleSave = () => {
    DialogBoxClose();
  };
  const classes = useStyles();
  useEffect(() => {
    console.log(live);
  }, [live]);
  return (
    <>
      <Dialog
        open={dialogBoxOpen}
        onClose={DialogBoxClose}
        scroll='paper'
        aria-labelledby='scroll-dialog-title'
        aria-describedby='scroll-dialog-description'
        fullWidth
        maxWidth='md'
      >
        <DialogTitle id='scroll-dialog-title' className={classes.dialogtitle}>
          Create Poll
        </DialogTitle>
        {live === 'offline' ? (
          <DialogContent>
            <div>
              <Typography variant='h6'>Question</Typography>
              <TextField
                multiline
                variant='outlined'
                placeholder='Poll Question'
                sx={{ width: '100%', marginBottom: '1rem ', marginTop: '1rem' }}
              ></TextField>
            </div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id='demo-multiple-name-label'>Options</InputLabel>
              <Select
                labelId='demo-multiple-name-label'
                id='demo-multiple-name'
                label='Options'
                onChange={handleValue}
                renderValue={(selected) => {
                  return selected;
                }}
              >
                {[...Array(10).keys()].map((num) => {
                  return <MenuItem value={num + 1}>{num + 1}</MenuItem>;
                })}
              </Select>
            </FormControl>
            {[...Array(value).keys()].map((num) => {
              return (
                <div>
                  <TextField
                    onChange={(e) => handleOptions(e)}
                    key={num}
                    placeholder={`Poll Option ${num + 1}`}
                    variant='outlined'
                    margin='dense'
                    fullWidth
                  />
                </div>
              );
            })}
          </DialogContent>
        ) : (
          <DialogContent className={classes.livereturn}>
            <Typography variant='h3'>Poll Going Live </Typography>
          </DialogContent>
        )}

        <div className={classes.btnbox}>
          <Button
            className={classes.livebtn}
            onClick={() => {
              handleLive();
            }}
          >
            Live
          </Button>
          <Button
            className={classes.livebtn}
            onClick={() => {
              handleSave();
            }}
          >
            Save
          </Button>
        </div>
      </Dialog>
    </>
  );
};
const useStyles = makeStyles((theme) => ({
  dialogtitle: {
    textAlign: 'center',
  },
  btnbox: {
    display: 'flex',
    justifyContent: 'end',
  },
  livebtn: {
    width: '3rem',
    margin: '1rem 1rem 1rem 0',
    backgroundColor: 'green',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#f50057',
    },
  },
  livereturn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '10rem',
    width: '100%',
  },
}));
export default DialogPoll;
