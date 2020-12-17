import React from 'react';

// Hooks
import useToggle from '../../../hooks/useToggle';

// Libraries
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Components
import Button from '../../shared/button/Regular';

// Constants
import { ONBOARDING } from '../../../assets/placeholder/onboarding';

const Topic = (props) => {
  const classes = useStyles();
  const [selected, toggleSelected] = useToggle();

  // Props
  const { topic, addSelectedTopic, removeSeletedTopic } = props;

  const onClick = () => {
    selected ? removeSeletedTopic(topic) : addSelectedTopic(topic);
    toggleSelected();
  };

  return (
    <Typography
      onClick={onClick}
      style={{
        backgroundColor: selected ? '#4091D9' : '#EDEDED',
        color: selected ? '#FFFFFF' : '#000000',
      }}
      className={classes.topicName}
      variant='body1'
    >
      {topic}
    </Typography>
  );
};

function SelectTopics(props) {
  const classes = useStyles();

  // props
  const { selectedTopics, addSelectedTopic, removeSeletedTopic, onNext } = props;

  return (
    <div className={classes.container}>
      <Typography className={classes.title} variant='h1'>
        {ONBOARDING.INTERESTED_TOPICS.PRIMARY.TITLE}
      </Typography>

      <Typography className={classes.content} variant='body1'>
        {ONBOARDING.INTERESTED_TOPICS.PRIMARY.CONTENT}
      </Typography>

      <div className={classes.topicsContainer}>
        {ONBOARDING.INTERESTED_TOPICS.TOPICS.map((topic, index) => (
          <Topic
            key={index}
            topic={topic}
            index={index}
            addSelectedTopic={addSelectedTopic}
            removeSeletedTopic={removeSeletedTopic}
          />
        ))}
      </div>

      <Button
        text='Next'
        onClick={() => {
          onNext();
          console.log('Following are the selected Topics: ', selectedTopics);
        }}
        containerStyles={classes.nextButton}
      />
    </div>
  );
}

export default SelectTopics;

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '100%',
    padding: 50,
    paddingTop: 20,
    position: 'relative',
  },
  title: {
    fontWeight: 600,
    textAlign: 'left',
    margin: '20px 0px',
  },
  content: {
    fontWeight: 400,
    textAlign: 'left',
    marginBottom: 20,
  },
  topicsContainer: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
  },
  topicName: {
    textAlign: 'center',
    fontWeight: 400,
    backgroundColor: theme.palette.secondary.neutral30,
    color: theme.palette.secondary.neutral80,
    padding: '5px 12px',
    margin: 10,
    marginLeft: 0,
    borderRadius: 200,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  nextButton: {
    position: 'absolute',
    bottom: '5%',
    right: '5%',
    margin: 10,
    padding: 5,
    minWidth: 80,
    width: 'auto',
  },
}));
