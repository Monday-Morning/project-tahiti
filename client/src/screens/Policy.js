import React from 'react';

// libraries
import { Container } from '@mui/material';

// Components
import Terms from '../components/policy/terms';
import BackButton from '../components/shared/button/BackButton';

function Policy() {
  return (
    <Container>
      <BackButton path='/' goTo='Home' />
      <Terms />
    </Container>
  );
}

export default Policy;
