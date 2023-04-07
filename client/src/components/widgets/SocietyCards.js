import React, { useState } from 'react';

import clsx from 'clsx';

import ExpandMore from '@mui/icons-material/ExpandMore';
import {
  Card,
  CardActions,
  CardContent,
  Collapse,
  IconButton,
  Typography,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

import PostHolders from './PostHolder';

const SocietyCards = ({ society, posts }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card className={classes.root}>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMore />
        </IconButton>
        <Typography variant='h3' className={classes.heading}>
          {society}
        </Typography>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent className={classes.hallDetails}>
          {posts?.map(({ position, name, email, phone }) => (
            <PostHolders
              key={name}
              position={position}
              name={name}
              email={email}
              phone={phone}
            />
          ))}
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default SocietyCards;

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '20px',
  },
  container: {
    maxWidth: '100%',
    marginTop: '1.5rem',
  },
  title: {
    display: 'inline-block',
    color: theme.palette.primary.blue60,
    fontFamily: 'IBM Plex Sans',
    minWidth: '124px',
    width: 'auto',
    marginTop: '36px',
    [theme.breakpoints.up('sm')]: {
      minWidth: '205px',
    },
  },
  expand: {
    transform: 'rotate(0deg)',
    color: '#000',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    color: '#000',
    transform: 'rotate(180deg)',
  },
  heading: {
    color: '#000',
    fontFamily: 'IBM Plex Sans',
    fontSize: '24px',
    fontWeight: 600,
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
      fontWeight: 600,
    },
  },
  position: {
    color: theme.palette.secondary.neutral80,
    fontFamily: 'Source Sans Pro',
    fontSize: '16px',
    marginBottom: '5px',
  },
  holderDetails: {
    fontSize: '20px',
    color: '#000',
  },
  phoneDetails: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  phone: {
    fontSize: '20px',
    color: '#000',
  },
  hallDetails: {
    padding: '30px 70px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
}));
