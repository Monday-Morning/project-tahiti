import React from 'react';

// libraries
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Button } from '@material-ui/core';

// Components
import { SQUIGGLES } from '../../assets/placeholder/widget';

// theme
import theme from '../../config/themes/light';

function Squiggles() {
  const classes = useStyles(theme);

  return (
    <Card className={classes.squigglesCard}>
      <CardContent>
        <div className={classes.squigglesWrapper}>
          <div className={classes.buttonWrapper}>
            <Button className={classes.squigglesButton} disabled>
              Squiggles
            </Button>
          </div>
          <div>
            <p className={classes.squigglesText}>{SQUIGGLES.TEXT}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Squiggles;

const useStyles = makeStyles(() => ({
  squigglesCard: {
    backgroundColor: theme.palette.accent.squiggles,
    boxShadow: theme.shadows[0],
    marginTop: 25,
  },
  squigglesWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: '25px',
    paddingRight: '25px',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      padding: 'unset',
    },
  },
  buttonWrapper: {
    textAlign: 'center',
  },
  squigglesButton: {
    backgroundColor: theme.palette.accent.squigglesButton,
    color: '#ffffff !important',
    marginRight: '40px',
    textTransform: 'unset',
    [theme.breakpoints.down('sm')]: {
      marginRight: 'auto',
    },
  },
  squigglesText: {
    fontSize: '20px',
    lineHeight: '28px',
    fontWeight: '400',
    textAlign: 'justify',
    fontFamily: 'IBM Plex Sans',
  },
}));
