import React from 'react';

// Libraries
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const topics = [
  'Witsdom',
  'Campus Buzz',
  'Student Activities',
  'Halls',
  'Alumni Affairs',
  'Interviews',
  'SAC Speaks',
  'Dean Speaks',
  'Videos',
  'Guest Interviews',
  "Director's Desk",
  "Chief Warden's Column",
  'Alumnus Speaks',
  'Editorial',
  'Placements',
  'Internships',
  'Higher Education',
  'Photostories',
  'Comics',
];

function SelectTopics() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography className={classes.title} variant='h1'>
        Interested Topics
      </Typography>

      <Typography className={classes.content} variant='body1'>
        Select the topics you’re interested in, and get smarter article suggestions on the MM
        website!
      </Typography>

      <div className={classes.topicsContainer}>
        {topics.map((topic, index) => (
          <Typography className={classes.topicName} variant='body1' key={index}>
            {topic}
          </Typography>
        ))}
      </div>

      <div className={classes.nextButton}>
        <Typography className={classes.next} variant='body1'>
          Next
        </Typography>
      </div>
    </div>
  );
}

export default SelectTopics;

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '100%',
    padding: 50,
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
    padding: '5px 10px',
    paddingVertical: 5,
    margin: 10,
    marginLeft: 0,
    borderRadius: 200,
  },
  nextButton: {
    position: 'absolute',
    bottom: 60,
    right: 40,
    margin: 10,
    padding: 5,
    backgroundColor: theme.palette.primary.blue50,
    borderRadius: 5,
    minWidth: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  next: {
    color: theme.palette.common.white,
    padding: 0,
    margin: 0,
  },
}));
