import React from 'react';

// Library
import { makeStyles } from '@material-ui/core/styles';

function RegularInput(props) {
  const classes = useStyles();
  const { value, onChange, placeholder, className } = props;

  return (
    <input
      className={`${classes.input} ${className}`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
}

export default RegularInput;

const useStyles = makeStyles((theme) => ({
  input: {
    width: '100%',
    padding: 10,
    backgroundColor: theme.palette.secondary.neutral30,
    borderRadius: 5,
    margin: 10,
    marginLeft: 0,
    color: theme.palette.text.disabled,
    fontSize: '18px',
    border: '0px',
  },
}));
