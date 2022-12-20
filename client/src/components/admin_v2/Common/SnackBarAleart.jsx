import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const SnackBarAleart = ({ open, message, setOpen, sentStatus }) => {
  const handleClose = (_event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={sentStatus ? 'success' : 'error'}>
        <div>{message}</div>
      </Alert>
    </Snackbar>
  );
};

export default SnackBarAleart;
