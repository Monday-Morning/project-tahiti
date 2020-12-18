import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

function Trending() {
  const Categories = [
    'Academics',
    'Campus Buzz',
    'Student Activities',
    'Halls',
    'Poll Analysis',
    'Forum',
  ];
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.titleWrapper}>
        <Typography variant='h2' className={classes.title}>
          Trending
        </Typography>
        <div className={classes.underline}></div>
      </div>
      <div className={classes.CategoryWrapper}>
        {Categories.map((category, index) => (
          <Typography variant='h3' key={index} className={classes.category}>
            {category}
          </Typography>
        ))}
      </div>
    </div>
  );
}
export default Trending;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: '4rem',
  },
  titleWrapper: {
    display: 'flex',
  },
  title: {
    display: 'inline',
  },
  underline: {
    borderBottom: '1px solid black',
    marginLeft: '20px',
    width: '100%',
  },
  CategoryWrapper: {
    marginTop: '2rem',
  },
  category: {
    display: 'inline',
    marginRight: '10px',
    backgroundColor: theme.palette.primary.blue10,
    borderRadius: '4px',
    padding: '12px 16px',
  },
}));
