import React from 'react';

// Components
import { Container } from '@material-ui/core';
import LiveHeader from '../components/live/liveHeader';
import LiveData from '../components/live/liveData';

// libraries

function Live() {
  return (
    <Container>
      <LiveHeader />
      <LiveData />
    </Container>
  );
}

export default Live;
