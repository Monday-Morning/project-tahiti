import React from 'react';

// libraries
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Button } from '@material-ui/core';

function Squiggles() {
  const squiggles = {
    text:
      'Hon’ble Union Education Minister inaugurated the Golden Jubilee Building at NIT Rourkela on 19th October. The broadcast of the inauguration ceremony can be watched with the following link: https://youtu.be/CTi4VnwdGVI',
  };
  const classes = useStyles();
  return (
    <Card className={classes.squigglesCard}>
      <CardContent>
        <div className={classes.squigglesWrapper}>
          <div className={classes.ButtonWrapper}>
            <Button className={classes.squigglesButton} disabled>
              Squiggles
            </Button>
          </div>
          <div>
            <p className={classes.SquigglesText}>{squiggles.text}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Squiggles;
const useStyles = makeStyles((theme) => ({
  squigglesCard: {
    backgroundColor: theme.palette.accent.squiggles,
    boxShadow: theme.shadows[0],
  },
  squigglesWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: '25px',
    paddingRight: '25px',
    '@media (max-width:600px)': {
      display: 'block',
      padding: 'unset',
    },
  },
  ButtonWrapper: {
    textAlign: 'center',
  },
  squigglesButton: {
    backgroundColor: theme.palette.accent.squigglesButton,
    color: '#ffffff !important',
    marginRight: '40px',
    textTransform: 'unset',
    '@media (max-width:600px)': {
      marginRight: 'auto',
    },
  },
  SquigglesText: {
    fontSize: '20px',
    lineHeight: '28px',
    fontWeight: '400',
    textAlign: 'justify',
  },
}));
