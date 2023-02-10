import React, { useContext } from 'react';
import authContext from '../../../context/auth/AuthContext';

// Hooks
import useToggle from '../../../hooks/useToggle';

// Libraries
import { Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

// Components
import Button from '../../shared/button/Regular';

// Constants
import { ONBOARDING } from '../../../assets/placeholder/onboarding';

//graphql
import { GraphClient } from '../../../config/ApolloClient';
import updateUserTopics from '../../../graphql/mutations/user/updateUserTopics';

const Topic = (props) => {
  const [selected, toggleSelected] = useToggle(false);
  const classes = useStyles(selected);
  // Props
  const { topic, addSelectedTopic, removeSelectedTopic, tabletMatches } = props;

  const onClick = () => {
    selected ? removeSelectedTopic(topic) : addSelectedTopic(topic);
    toggleSelected();
  };

  return (
    <Typography
      onClick={onClick}
      className={classes.topicName}
      variant={tabletMatches ? 'body2' : 'body1'}
    >
      {topic}
    </Typography>
  );
};

function SelectTopics(props) {
  const classes = useStyles();

  // props
  const {
    selectedTopics,
    addSelectedTopic,
    removeSelectedTopic,
    onNext,
    tabletMatches,
  } = props;

  const { mid } = useContext(authContext);

  const setSelectedTopics = (topics) => {
    GraphClient.mutate({
      mutation: updateUserTopics,
      variables: {
        userId: mid,
        interestedTopics: topics,
      },
    });
  };

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
            removeSelectedTopic={removeSelectedTopic}
            tabletMatches={tabletMatches}
          />
        ))}
      </div>

      <Button
        text='Next'
        onClick={() => {
          setSelectedTopics(selectedTopics);
          onNext();
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
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      padding: 12,
    },
  },
  title: {
    fontWeight: 600,
    margin: '0px 0px',
  },
  content: {
    fontWeight: 400,
    marginBottom: 20,
    fontSize: '14px',
    color: theme.palette.secondary.neutral60,
  },
  topicsContainer: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
  },
  topicName: {
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
    [theme.breakpoints.down('sm')]: {
      fontSize: '13px',
      padding: '8px 8.5px',
      margin: 5,
      marginLeft: 0,
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
    [theme.breakpoints.down('md')]: {
      margin: 4,
      bottom: '2%',
      right: '2%',
    },
  },
}));
