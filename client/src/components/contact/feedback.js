import React, { useState } from 'react';

// Libraries
import { Grid, makeStyles, Typography, Button } from '@material-ui/core';

// Images
import image from '../../assets/images/contact/contact-us.png';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isEmailCorrect, setEmailCorrect] = useState(false);
  const [error, setError] = useState({
    nameError: '',
    emailError: '',
    feedbackError: '',
    Error: '',
  });

  const enabled =
    isEmailCorrect && name.trim().length > 0 && feedback.trim().length > 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const feedbackData = {
        name: name.trim(),
        email: email,
        feedback: feedback.trim(),
      };
      setName('');
      setEmail('');
      setFeedback('');
      setError({
        nameError: '',
        emailError: '',
        feedbackError: '',
        Error: '',
      });
    } catch {
      setError({ ...error, Error: 'Failed to send' });
    }
  };

  const cancel = () => {
    setName('');
    setEmail('');
    setFeedback('');
    setError({
      nameError: '',
      emailError: '',
      feedbackError: '',
      Error: '',
    });
  };

  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Grid container className={classes.elementWrapper} spacing={4}>
        <Grid item xs={12} md={7}>
          <Typography variant='h3' className={classes.title}>
            We’d love to hear from you
          </Typography>
          <form onSubmit={handleSubmit}>
            <div className={classes.nameWrapper}>
              <input
                className={classes.nameInput}
                name='name'
                type='text'
                placeholder='Name'
                value={name}
                onChange={(event) => setName(event.target.value)}
                onBlur={() => {
                  name.trim().length <= 0
                    ? setError({ ...error, nameError: 'Name Required' })
                    : setError({ ...error, nameError: '' });
                }}
              />
            </div>
            <div container className={classes.errorMessage}>
              <Typography>{error.nameError}</Typography>
            </div>
            <div className={classes.emailWrapper}>
              <input
                className={classes.emailInput}
                name='email'
                type='text'
                placeholder='Email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                onBlur={() => {
                  !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                    ? (setError({
                        ...error,
                        emailError: 'Valid Email-Id Required',
                      }),
                      setEmailCorrect(false))
                    : (setError({ ...error, emailError: '' }),
                      setEmailCorrect(true));
                }}
              />
            </div>

            <div container className={classes.errorMessage}>
              <Typography>{error.emailError}</Typography>
            </div>

            <div className={classes.feedbackWrapper}>
              <textarea
                multiline
                className={classes.feedbackInput}
                rows='8'
                name='feedback'
                placeholder='Write your message here'
                value={feedback}
                onChange={(event) => setFeedback(event.target.value)}
                onBlur={() => {
                  feedback.trim().length <= 0
                    ? setError({ ...error, feedbackError: 'Message Required' })
                    : setError({ ...error, feedbackError: '' });
                }}
              />
            </div>

            <div container className={classes.errorMessage}>
              <Typography>{error.feedbackError}</Typography>
            </div>

            <div container className={classes.errorMessage}>
              <Typography>{error.Error}</Typography>
            </div>

            <Grid
              container
              justify='flex-end'
              spacing={3}
              className={classes.buttonWrapper}
            >
              <Grid item>
                <Button onClick={cancel} variant='contained'>
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
            <img src={image} alt='Feedback' className={classes.image} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Feedback;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    maxWidth: '1248px',
    margin: '40px auto 40px auto',
    [theme.breakpoints.down('md')]: {
      marginTop: '24px',
      padding: '0px 40px 0px 40px',
    },
  },
  elementWrapper: {
    padding: '18px 0px 24px 24px',
    boxShadow: theme.shadows[0],
    borderRadius: '8px',
    [theme.breakpoints.down('md')]: {
      padding: '18px 6px 24px 6px',
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
    padding: '5px 16px 5px 5px',
    margin: '16px 0px 0px 0px',
    height: 'auto',
  },
  nameInput: {
    marginLeft: '16px',
    fontSize: '18px',
    fontFamily: theme.typography.body1.fontFamily,
    fontWeight: 400,
    width: '100%',
    backgroundColor: 'unset',
    border: '0',
    padding: '5px 10px',
    '&:focus': {
      border: '0px',
    },
  },
  emailWrapper: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.neutral30,
    borderRadius: '4px',
    width: '100%',
    padding: '5px 16px 5px 5px',
    margin: '0px 0px 0px 0px',
    height: 'auto',
  },
  emailInput: {
    marginLeft: '16px',
    fontSize: '18px',
    fontFamily: theme.typography.body1.fontFamily,
    fontWeight: 400,
    width: '100%',
    backgroundColor: 'unset',
    border: '0',
    padding: '5px 10px',
    '&:focus': {
      border: '0px',
    },
  },
  feedbackWrapper: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.neutral30,
    borderRadius: '4px',
    width: '100%',
    padding: '5px 16px 5px 5px',
    margin: '0px 0px 15px 0px',
    height: 'auto',
  },
  feedbackInput: {
    resize: 'none',
    fontSize: '18px',
    fontFamily: theme.typography.body1.fontFamily,
    fontWeight: 400,
    marginLeft: '16px',
    width: '100%',
    backgroundColor: 'unset',
    border: '0',
    padding: '5px 10px',
    '&:focus': {
      border: '0px',
    },
  },
  errorMessage: {
    margin: '10px 0px 2px 8px',
    color: 'red',
  },
  buttonWrapper: {
    padding: '10px 16px 5px 5px',
    margin: '0px 0px 15px 0px',
  },
  buttonText: {
    [theme.breakpoints.down('md')]: {
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
