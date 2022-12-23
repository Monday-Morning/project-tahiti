import React, { useState } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import theme from '../../config/themes/light';
import { ChevronDown, ChevronUp } from 'react-feather';
function DropDownCard({ children, title }) {
  const [expanded, setExpanded] = useState(false);

  const classes = useStyles(theme);

  return (
    <div
      onClick={() => {
        setExpanded((prev) => !prev);
      }}
      className={classes.root}
    >
      <div className={classes.dropDownIcon}>
        {expanded ? <ChevronUp size={32} /> : <ChevronDown size={32} />}
      </div>
      <div className={classes.cardDetails}>
        <h2 className={classes.cardHeading}>{title}</h2>
        {expanded && children}
      </div>
    </div>
  );
}

export default DropDownCard;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    gap: '20px',
    boxShadow:
      '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 3px rgba(0, 0, 0, 0.12)',
    padding: '20px',
    marginTop: '22px',
    borderRadius: '8px',
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'row-reverse',
    },
  },
  dropDownIcon: {
    '&>svg': {
      marginTop: '6px',
    },
  },
  cardDetails: {
    width: '100%',
  },
  cardHeading: {
    fontFamily: 'IBM Plex Sans',
    fontWeight: 600,
    fontSize: '24px',
    lineHeight: '32px',
    color: '#222222',
    paddingTop: '6px',
  },
}));
