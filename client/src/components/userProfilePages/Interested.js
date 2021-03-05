import React from 'react';
import useToggle from '../../hooks/useToggle';
import { Button, Card, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ONBOARDING } from '../../assets/placeholder/onboarding';

const Topic = (props) => {
  const [selected, toggleSelected] = useToggle(false);
  const classes = useStyles(selected);
  const { topic, addSelectedTopic, removeSelectedTopic } = props;
  const onClick = () => {
    selected ? removeSelectedTopic(topic) : addSelectedTopic(topic);
    toggleSelected();
  };

  return (
    <Typography onClick={onClick} className={classes.topicName} variant='body1'>
      {topic}
    </Typography>
  );
};

function Interested({ selectedTopics, addSelectedTopic, removeSelectedTopic }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.text}>
        Select the topics you’re interested in, and get smarter article
        suggestions on the MM website!
      </div>

      <div className={classes.topicsContainer}>
        {ONBOARDING.INTERESTED_TOPICS.TOPICS.map((topic, index) => (
          <Topic
            key={index}
            topic={topic}
            index={index}
            addSelectedTopic={addSelectedTopic}
            removeSelectedTopic={removeSelectedTopic}
          />
        ))}
      </div>
      <div className={classes.buttons}>
        <Button className={classes.button}>
          <div>Undo Changes</div>
        </Button>
        <Button color='primary' variant='contained' className={classes.button}>
          Save Changes
        </Button>
      </div>
    </div>
  );
}

export default Interested;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: '20px',
    height: '100%',
  },
  text: {
    fontFamily: 'Source Sans Pro',
    fontSize: '1.5rem',
    lineHeight: '26px',
    fontWeight: '400',
    margin: '30px 40px 0px 30px',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  topicsContainer: {
    width: '80%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '2%',
  },
  topicName: {
    userSelect: 'none',
    textAlign: 'center',
    fontWeight: 400,
    backgroundColor: (selected) =>
      selected
        ? theme.palette.primary.blue40
        : theme.palette.secondary.neutral30,
    color: (selected) =>
      selected ? theme.palette.common.white : theme.palette.secondary.neutral80,
    padding: '5px 12px',
    margin: 10,
    marginLeft: 0,
    borderRadius: 200,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    width: '80%',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },
  button: {
    whiteSpace: 'nowrap',
    marginLeft: '20px',
    minWidth: '80px',
    maxWidth: '156px',
    '& span': {
      textTransform: 'unset',
      fontFamily: 'Source Sans Pro !important',
      fontSize: '1.25rem !important',
      '& div': {
        color: theme.palette.secondary.neutral70,
      },
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      lineHeight: '1.25rem',
    },
  },
}));
