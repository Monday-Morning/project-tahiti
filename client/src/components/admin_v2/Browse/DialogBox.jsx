import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog({
  openDialog,
  handleDialogClose,
  updatePublishStatus,
  selectedArticle: { status, id, title },
}) {
  return (
    <div>
      <Dialog
        open={openDialog}
        onClose={handleDialogClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          Do you want to {status.toLowerCase().slice(0, -2)} this article?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Title: {title}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              updatePublishStatus({ id, publishStatus: status }),
                handleDialogClose();
            }}
          >
            Yes
          </Button>
          <Button onClick={handleDialogClose} autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
