import React from 'react';

// Components
import { Container } from '@material-ui/core';
import Terms from '../components/policy/terms';
import BackButton from '../components/shared/button/BackButton';

// libraries

function Policy() {
  return (
    <Container>
      <BackButton path='/' goTo='Home' />
      <Terms />
    </Container>
  );
}

export default Policy;
