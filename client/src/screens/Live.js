import React, { useState } from 'react';

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

function Live() {
  const classes = useStyles();
  const Desktop = useMediaQuery(theme.breakpoints.up('sm'));
  const [activeCompany, setCompany] = useState(0);
  const [department, setDepartment] = useState(LIVE.departments[0]);
  const [degree, setDegree] = useState('B.Tech');
  const [filterText, setFilter] = useState('');
  const [activeSession, setSession] = useState(LIVE.sessions[0]);
  const [placement, setPlacement] = useState(false);

  const selectSessions = (season) => {
    setSession(season);
  };

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const selectDegree = (event) => {
    setDegree(event.target.value);
  };

  const selectDepartment = (branch) => {
    setDepartment(branch);
  };

  return (
    <Container maxWidth='xl'>
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
            <TypeSelector placement={placement} setPlacement={setPlacement} />
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
              <BranchSelector
                department={department}
                selectDepartment={selectDepartment}
                LIVE={LIVE}
              />
            </div>
            <div style={{ width: '70%' }}>
              <LiveData
                activeCompany={activeCompany}
                setCompany={setCompany}
                data={LIVE.data}
              />
            </div>
          </div>{' '}
        </>
      ) : (
        <>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
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
              justifyContent: 'space-around',
              alignItems: 'center',
              margin: '0.5rem',
            }}
          >
            <BranchSelector
              department={department}
              selectDepartment={selectDepartment}
              LIVE={LIVE}
            />
            <TypeSelector placement={placement} setPlacement={setPlacement} />
          </div>
          <NameFilter filterText={filterText} handleChange={handleChange} />
          <LiveData
            activeCompany={activeCompany}
            setCompany={setCompany}
            data={LIVE.data}
          />
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
