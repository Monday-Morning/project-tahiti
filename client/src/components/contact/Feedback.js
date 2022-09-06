import React, { useState } from 'react';

import Image from 'next/dist/client/image';
// Libraries
import { Grid, Typography, Button, TextField } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

// Images
import image from '../../assets/images/contact/contact-us.png';

const Feedback = () => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState({
    nameError: '',
    emailError: '',
    messageError: '',
    error: '',
    success: '',
  });

  const resetFields = () => {
    setName('');
    setEmail('');
    setMessage('');
    setError({
      nameError: '',
      emailError: '',
      messageError: '',
      error: '',
      success: '',
    });
  };

  const enabled =
    error.emailError.length === 0 && name.length > 0 && message.length > 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const feedbackData = { name, message, email };
      resetFields(); // When adding API, make sure to refactor and reset state only when API gives success
      setError({ ...error, success: 'Send' });
    } catch {
      setError({ ...error, error: 'Failed to send' });
    }
  }; //API to be added later

  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Grid container className={classes.elementWrapper} spacing={4}>
        <Grid container className={classes.testingWrapper}>
          <Grid item xs={12} md={7}>
            <Typography variant='h3' className={classes.title}>
              We’d love to hear from you
            </Typography>
            <form onSubmit={handleSubmit}>
              <div className={classes.nameWrapper}>
                <TextField
                  variant='standard'
                  className={classes.nameInput}
                  name='name'
                  type='text'
                  placeholder='Name'
                  disableUnderline={true}
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  onFocus={() => setError({ ...error, nameError: '' })}
                  onBlur={() => {
                    setName(name.trim()),
                      name.length <= 0
                        ? setError({ ...error, nameError: 'Name Required' })
                        : setError({ ...error, nameError: '' });
                  }}
                  InputProps={{ disableUnderline: true }}
                />
              </div>
              <Typography className={classes.errorMessage}>
                {error.nameError}
              </Typography>

              <div className={classes.emailWrapper}>
                <TextField
                  variant='standard'
                  className={classes.emailInput}
                  name='email'
                  type='email'
                  placeholder='Email'
                  InputProps={{ disableUnderline: true }}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  onFocus={() => setError({ ...error, emailError: '' })}
                  onBlur={() => {
                    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                      ? setError({
                          ...error,
                          emailError: 'Valid Email-Id Required',
                        })
                      : setError({ ...error, emailError: '' });
                  }}
                />
              </div>
              <Typography className={classes.errorMessage}>
                {error.emailError}
              </Typography>

              <div className={classes.messageWrapper}>
                <TextField
                  variant='standard'
                  multiline
                  className={classes.messageInput}
                  rows='8'
                  name='message'
                  placeholder='Write your message here'
                  InputProps={{ disableUnderline: true }}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  onFocus={() => setError({ ...error, messageError: '' })}
                  onBlur={() => {
                    setMessage(message.trim()),
                      message.length <= 0
                        ? setError({
                            ...error,
                            messageError: 'Message Required',
                          })
                        : setError({ ...error, messageError: '' });
                  }}
                />
              </div>

              <Typography className={classes.errorMessage}>
                {error.messageError}
              </Typography>

              <div container className={classes.errorMessage}>
                <Typography>{error.error}</Typography>
              </div>
              <div container className={classes.successMessage}>
                <Typography>{error.success}</Typography>
              </div>

              <Grid
                container
                justifyContent='flex-end'
                spacing={3}
                className={classes.buttonWrapper}
              >
                <Grid item>
                  <Button onClick={resetFields} variant='contained'>
                    <span className={classes.buttonText}>Cancel</span>
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    className={classes.submitButton}
                    disabled={!enabled}
                  >
                    <span className={classes.buttonText}>send Message</span>
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item xs={12} md={5}>
            <div className={classes.imageWrapper}>
              <Image src={image} alt='Feedback' className={classes.image} />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default Feedback;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    maxWidth: '1200px',
    margin: '40px auto 40px auto',
    [theme.breakpoints.down('lg')]: {
      marginTop: '24px',
      padding: '0px 40px 0px 40px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0px 10px 0px 35px',
    },
  },
  testingWrapper: {
    padding: '40px',
    [theme.breakpoints.down('sm')]: {
      padding: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  elementWrapper: {
    boxShadow: theme.shadows[0],
    borderRadius: '8px',
    [theme.breakpoints.down('lg')]: {
      marginTop: '10px',
      padding: '18px 6px 24px 6px',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  title: {
    paddingBottom: '16px',
  },
  nameWrapper: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.neutral30,
    borderRadius: '4px',
    width: '100%',
    padding: '5px 16px 0px 5px',
    margin: '0px 0px 0px 0px',
    height: 'auto',
  },
  nameInput: {
    fontSize: '18px',
    fontFamily: theme.typography.body1.fontFamily,
    fontWeight: 400,
    width: '100%',
    backgroundColor: 'unset',
    border: '0',
    padding: '5px 10px',
    '&:focus': {
      outline: 'none',
      border: '0px',
    },
  },
  emailWrapper: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.neutral30,
    borderRadius: '4px',
    width: '100%',
    padding: '5px 16px 0px 5px',
    margin: '0px 0px 0px 0px',
    height: 'auto',
  },
  emailInput: {
    fontSize: '18px',
    fontFamily: theme.typography.body1.fontFamily,
    fontWeight: 400,
    width: '100%',
    backgroundColor: 'unset',
    border: '0',
    padding: '5px 10px',
    '&:focus': {
      outline: 'none',
      border: '0px',
    },
  },
  messageWrapper: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.neutral30,
    borderRadius: '4px',
    width: '100%',
    padding: '5px 16px 5px 5px',
    margin: '0px 0px 0px 0px',
    height: 'auto',
  },
  messageInput: {
    resize: 'none',
    fontSize: '18px',
    fontFamily: theme.typography.body1.fontFamily,
    fontWeight: 400,
    width: '100%',
    backgroundColor: 'unset',
    border: '0',
    padding: '5px 10px',
    '&:focus': {
      outline: 'none',
      border: '0px',
    },
  },
  errorMessage: {
    fontSize: '14px',
    margin: '0px 0px 10px 8px',
    color: 'red',
  },
  successMessage: {
    fontSize: '14px',
    margin: '0px 0px 0px 8px',
    color: 'green',
  },
  buttonWrapper: {
    padding: '10px 16px 5px 5px',
    margin: '0px 0px 15px 0px',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  buttonText: {
    [theme.breakpoints.down('lg')]: {
      fontSize: '16px',
    },
  },
  imageWrapper: {
    maxHeight: '377px',
    maxWidth: '404px',
  },
  image: {
    height: '100%',
    width: '100%',
  },
}));
