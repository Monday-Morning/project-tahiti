import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label='close'
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default function Events() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open === false) {
      setOpen(true);
    }
    setTimeout(() => {
      setOpen(false);
    }, 10000);
  }, [open]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
      >
        <BootstrapDialogTitle
          id='customized-dialog-title'
          onClose={handleClose}
        >
          Awaaz-e-SAC
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <img
            src='https://res.cloudinary.com/sambitsankalp/image/upload/v1659382451/hacknitr/SoapBOX_1_rvfogd.png'
            alt=''
            style={{ width: '100%', height: 'auto', overflowY: 'hidden' }}
          />
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
