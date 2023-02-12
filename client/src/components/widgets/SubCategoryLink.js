import React from 'react';
import Link from 'next/link';
import { ButtonBase } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

const SubCategoryLink = ({ text, isRed, onclick, path }) => {
  const classes = useStyles({ isRed });

  return (
    <Link href={path} passHref style={{ textDecoration: 'none' }}>
      <div className={classes.container}>
        <ButtonBase type='button' className={classes.button} onClick={onclick}>
          <span className={classes.label}> {text} </span>
        </ButtonBase>
      </div>
    </Link>
  );
};

export default SubCategoryLink;

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'inline',
    textDecoration: 'none',
  },
  button: {
    textAlign: 'center',
    backgroundColor: ({ isRed }) =>
      isRed ? 'rgba(215, 36, 46, 0.6)' : theme.palette.background.banner,
    borderRadius: '4px',
    margin: '8px 8px 0px 0px',
    padding: '12px 16px',
    [theme.breakpoints.down('md')]: {
      padding: '3px 8px',
    },
  },
  label: {
    textTransform: 'capitalize',
    fontFamily: 'IBM Plex sans',
    fontSize: '22px',
    fontWeight: '600',
    lineHeight: '1.5rem',
    textDecoration: 'none',
    color: ({ isRed }) =>
      isRed ? theme.palette.secondary.neutral30 : theme.palette.secondary.main,
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
      lineHeight: '20px',
    },
  },
}));
