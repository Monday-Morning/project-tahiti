import React from 'react';

// libraries
import { Container } from '@mui/material';

// Components
import BackButton from '../components/shared/button/BackButton';
import AboutUs from '../components/about/AboutUs';
import Content from '../components/about/Content';
import Team from '../components/about/Team';
// import Project from '../components/about/Project';

function About() {
  return (
    <Container maxWidth='xl'>
      <BackButton path='/' goTo='Home' />
      <AboutUs />
      <Content />
      {/* <Team /> */}
      {/* <Project /> */}
    </Container>
  );
}

export default About;
