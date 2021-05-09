import React from 'react';

// Libraries
import { makeStyles } from '@material-ui/core';

const ArticleTags = ({ tags }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      Tags :
      {tags.map((tag) => (
        <div key={tag.name} className={classes.tag}>
          {tag.name}
        </div>
      ))}
    </div>
  );
};

export default ArticleTags;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: '0.25rem',
    marginBottom: '1rem',
    fontSize: '1rem',
    lineHeight: '1.5rem',
    fontWeight: '400',
    color: theme.palette.grey[300],
  },
  tag: {
    display: 'inline',
    padding: '2px 8px',
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.blue40,
    marginLeft: '10px',
    borderRadius: '4px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '4px',
      padding: '1.5px 8px',
    },
  },
}));
