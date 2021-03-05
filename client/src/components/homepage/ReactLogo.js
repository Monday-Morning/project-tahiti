import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Switch,
  FormControlLabel,
  Button,
} from '@material-ui/core';

const blue = {
  '--background-start': '#2196F3',
  '--background-end': '#21CBF3',
  '--box-shadow': 'rgba(33, 203, 243, .3)',
};

const defaultColor = {
  '--background-start': '#FE6B8B',
  '--background-end': '#FF8E53',
  '--box-shadow': 'rgba(255, 105, 135, .3)',
};

function ReactLogo() {
  const classes = useStyles();
  const [color, setColor] = React.useState(defaultColor);

  const handleChange = (event) =>
    setColor(event.target.checked ? blue : defaultColor);

  return (
    <div className={classes.screen}>
      <Typography variant='h1' className={classes.typography}>
        Monday Morning!
      </Typography>
      <FormControlLabel
        className={classes.form}
        control={
          <Switch
            checked={color === blue}
            onChange={handleChange}
            color='primary'
            value='dynamic-class-name'
          />
        }
        label={color === blue ? 'Red' : 'Blue'}
      />
      <Button className={classes.button} style={color}>
        CSS variables
      </Button>
    </div>
  );
}

export default ReactLogo;

const useStyles = makeStyles(() => ({
  screen: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  form: {
    marginBottom: '1em',
  },
  button: {
    background:
      // eslint-disable-next-line
      'linear-gradient(45deg, var(--background-start) 30%, var(--background-end) 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px var(--box-shadow)',
  },
  typography: {
    marginBottom: '1em',
  },
}));
