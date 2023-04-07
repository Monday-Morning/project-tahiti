import React, { useContext, useState } from 'react';
import { authContext } from '../../../context/AuthContextProvider';

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
import updateUserTopics from '../../../graphql/mutations/user/updateUserTopics';
import { apolloContext } from '../../../context/ApolloContextProvider';

function Topic({
  topic,
  addSelectedTopic,
  removeSelectedTopic,
  tabletMatches,
  setSnackbarData,
}) {
  const [selected, toggleSelected] = useToggle(false);
  const classes = useStyles(selected);

  const onClick = () => {
    selected ? removeSelectedTopic(topic[1]) : addSelectedTopic(topic[1]);
    toggleSelected();
    setSnackbarData({
      message: '',
      severity: 'success',
    });
  };

  return (
    <Typography
      onClick={onClick}
      className={classes.topicName}
      variant={tabletMatches ? 'body2' : 'body1'}
    >
      {topic[0]}
    </Typography>
  );
}

function SelectTopics({ onComplete, onSkip, tabletMatches, setSnackbarData }) {
  const classes = useStyles();

  const [selectedTopics, setSelectedTopics] = useState([]);

  const addSelectedTopic = (newTopic) =>
    setSelectedTopics((current) => [...current, newTopic]);

  const removeSelectedTopic = (topic) =>
    setSelectedTopics((selected) => {
      return selected.filter((selectedTopic) => {
        if (selectedTopic !== topic) return selectedTopic;
      });
    });

  const { user } = useContext(authContext);
  const graphClient = useContext(apolloContext);

  const updateInterestedTopics = async (topics) => {
    try {
      if (!user) {
        setSnackbarData({
          message: 'Please sign up to continue.',
          severity: 'warning',
        });
        return;
      }
      if (topics.length === 0) {
        onSkip();
        return;
      }
      console.log(user);

      await graphClient.mutate({
        mutation: updateUserTopics,
        variables: {
          id: user.mid,
          interestedTopics: topics,
        },
      });

      onComplete();
    } catch (error) {
      setSnackbarData({
        message: 'Something went wrong. Please try again.',
        severity: 'error',
      });
    }
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
            setSnackbarData={setSnackbarData}
          />
        ))}
      </div>

      <Button
        text='Next'
        onClick={() => {
          updateInterestedTopics(selectedTopics);
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
