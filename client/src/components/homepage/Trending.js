import React from 'react';

// libraries
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

// Helpers
import ROUTES from '../../utils/getRoutes';

function Trending() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.titleWrapper}>
        <Typography variant='h2' className={classes.title}>
          Trending
        </Typography>
        <div className={classes.underline} />
      </div>
      <div className={classes.CategoryWrapper}>
        {ROUTES.SUB_CATEGORIES.OBJECT.CAMPUS.map(
          ({ name, shortName, path, idNumber }) => (
            <Link to={path} key={`${shortName}-${idNumber}`}>
              <Typography variant='h3' className={classes.category}>
                {name}
              </Typography>
            </Link>
          ),
        )}
      </div>
    </div>
  );
}
export default Trending;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: '4rem',
    marginBottom: '3rem',
  },
  titleWrapper: {
    display: 'flex',
  },
  title: {
    display: 'inline',
    whiteSpace: 'nowrap',
  },
  underline: {
    borderBottom: '1px solid black',
    marginLeft: '20px',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10px',
    },
  },
  CategoryWrapper: {
    marginTop: '2rem',
  },
  category: {
    display: 'inline-block',
    marginRight: '10px',
    marginTop: '10px',
    backgroundColor: theme.palette.primary.blue10,
    color: theme.palette.common.black,
    borderRadius: '4px',
    padding: '12px 16px',
    cursor: 'pointer',
  },
}));
