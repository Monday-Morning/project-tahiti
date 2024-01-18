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
        <DialogTitle id='scroll-dialog-title' className={classes.dialogTitle}>
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
                className={classes.questionInputField}
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
          <DialogContent className={classes.liveReturn}>
            <Typography variant='h3'>Poll Going Live </Typography>
          </DialogContent>
        )}

        <div className={classes.buttonBox}>
          <Button
            className={classes.liveButton}
            onClick={() => {
              handleLive();
            }}
          >
            Live
          </Button>
          <Button
            className={classes.liveButton}
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
  dialogTitle: {
    textAlign: 'center',
  },
  buttonBox: {
    display: 'flex',
    justifyContent: 'end',
  },
  liveButton: {
    width: '3rem',
    margin: '1rem 1rem 1rem 0',
    backgroundColor: 'green',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#f50057',
    },
  },
  liveReturn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '10rem',
    width: '100%',
  },
  questionInputField:{
    width: '100%',
    marginBottom: '1rem ',
    marginTop: '1rem'
}));
export default DialogPoll;
