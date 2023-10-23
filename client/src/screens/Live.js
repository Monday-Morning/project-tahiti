import React, { useContext, useEffect, useState } from 'react';

// libraries
import { Typography, Container, useMediaQuery } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

// Components
import SessionSelector from '../components/live/sessionSelector';
import TypeSelector from '../components/live/typeSelector';
import NameFilter from '../components/live/nameFilter';
import CourseSelector from '../components/live/courseSelector';
import BranchSelector from '../components/live/branchSelector';
import LiveData from '../components/live/liveData';

// theme
import theme from '../config/themes/light';

// placeholder
import { LIVE } from '../assets/placeholder/live';
import getLiveByYearAndSemester from '../graphql/queries/live/getLiveByYearAndSemester';
import ActivityIndicator from '../components/shared/ActivityIndicator';
import { apolloContext } from '../context/ApolloContextProvider';

function Live() {
  const classes = useStyles();
  const Desktop = useMediaQuery(theme.breakpoints.up('sm'));
  const [liveData, setLiveData] = useState([]);
  const [department, setDepartment] = useState(LIVE.departments[0]);
  const [degree, setDegree] = useState('All Degrees');
  const [filterText, setFilter] = useState('');
  const [activeSession, setSession] = useState(LIVE.sessions[0]);
  const [showPlacement, setShowPlacement] = useState(true);

  const [isLoading, setLoading] = useState(true);

  const graphClient = useContext(apolloContext);

  const selectSessions = (season) => {
    setSession(season);
  };

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const selectDegree = (event) => {
    // setDegree(event.target.value);
  };

  // const selectDepartment = (branch) => {
  //   setDepartment(branch);
  // };

  useEffect(() => {
    setLoading(true);
    const [semester, year] = activeSession.split(' ');
    graphClient
      .query({
        query: getLiveByYearAndSemester,
        variables: { year: parseInt(year), semester: semester.toUpperCase() },
      })
      .then((res) => {
        setLiveData(res.data.getLiveByYearAndSemester);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [activeSession]);

  return (
    <Container>
      <Typography variant='h2' className={classes.title}>
        Live
      </Typography>
      {Desktop ? (
        <>
          {' '}
          <div className={classes.HeadWrapper}>
            <SessionSelector
              activeSession={activeSession}
              selectSessions={selectSessions}
              LIVE={LIVE}
            />
            <TypeSelector
              placement={showPlacement}
              setPlacement={setShowPlacement}
            />
            <NameFilter filterText={filterText} handleChange={handleChange} />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ width: '25%' }}>
              <CourseSelector
                degree={degree}
                setDegree={setDegree}
                handleChange={selectDegree}
              />
              {/* <BranchSelector
                department={department}
                selectDepartment={selectDepartment}
                LIVE={LIVE}
              /> */}
            </div>
            <div style={{ width: '70%' }}>
              {!isLoading && liveData && (
                <LiveData
                  live={liveData.filter((item) => {
                    if (showPlacement) {
                      return item.liveType !== 4;
                    } else {
                      return item.liveType === 4;
                    }
                  })}
                />
              )}
              {isLoading && <ActivityIndicator size={50} />}
            </div>
          </div>{' '}
        </>
      ) : (
        <>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: '0.5rem',
            }}
          >
            <SessionSelector
              activeSession={activeSession}
              selectSessions={selectSessions}
              LIVE={LIVE}
            />
            <CourseSelector
              degree={degree}
              setDegree={setDegree}
              handleChange={selectDegree}
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: '0.5rem',
            }}
          >
            {/* <BranchSelector
              department={department}
              selectDepartment={selectDepartment}
              LIVE={LIVE}
            /> */}
            <TypeSelector
              placement={showPlacement}
              setPlacement={setShowPlacement}
            />
          </div>
          <NameFilter filterText={filterText} handleChange={handleChange} />
          {!isLoading && liveData && (
            <LiveData
              live={liveData.filter((item) => {
                if (showPlacement) {
                  return item.liveType !== 4;
                } else {
                  return item.liveType === 4;
                }
              })}
            />
          )}
          {isLoading && <ActivityIndicator size={50} />}
        </>
      )}
    </Container>
  );
}

export default Live;

const useStyles = makeStyles(() => ({
  title: {
    marginTop: '2rem',
    color: theme.palette.secondary.main,
  },
  HeadWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '2rem',
  },
}));
