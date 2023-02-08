import {
  Button,
  Card,
  TextField,
  Autocomplete,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export const NewEvent = ({ onSave, handleChange, formattedDate }) => {
  const [title, setTitle] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [error, setError] = useState(false);
  const eventsName = [
    { label: 'Insti Events' },
    { label: 'Club Events' },
    { label: 'Insti Holidays' },
  ];
  const classes = useStyles();
  return (
    <Card className={classes.newEvent}>
      <div className={classes.clickedDate}>
        <Typography variant='h5' gutterBottom>
          {formattedDate}
        </Typography>
      </div>

      <div className={classes.newEventHeader}>New Event</div>
      <TextField
        required
        className={error ? 'error' : ''}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        label='Event Title'
      />

      <Autocomplete
        disablePortal
        className={classes.eventType}
        options={eventsName}
        renderInput={(params) => <TextField {...params} label='Event Type' />}
      />

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          label='Start'
          value={startTime}
          onChange={(newValue) => {
            setStartTime(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />

        <TimePicker
          label='End'
          value={endTime}
          onChange={(newValue) => {
            setEndTime(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <Button
        variant='contained'
        onClick={() => {
          if (title) {
            setError(false);
            onSave(title);
          } else {
            setError(true);
          }
        }}
        className={classes.saveBtn}
      >
        Save
      </Button>
      <Button variant='contained' onClick={handleChange}>
        Cancel
      </Button>
    </Card>
  );
};

export default NewEvent;

const useStyles = makeStyles((theme) => ({
  newEvent: {
    display: 'flex',
    flexDirection: 'column',
    width: '350px',
    alignItems: 'flex-start',
    gap: '10px',
    backgroundColor: 'white',
    zIndex: '20',
    boxShadow: '0px 0px 3px black',
    borderRadius: '5px',
    position: 'absolute',
    padding: '20px',
  },
  newEventHeader: {
    fontWeight: 700,
    fontFamily: theme.typography.fontFamily,
    width: 300,
  },
  eventType: {
    width: 300,
  },
}));
