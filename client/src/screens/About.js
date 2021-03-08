import React from 'react';

// Components
import BackButton from '../components/shared/button/BackButton';
import AboutUs from '../components/about/AboutUs';
import Content from '../components/about/Content';
import Team from '../components/about/Team';
import Project from '../components/about/Project';

// libraries
import { Container } from '@material-ui/core';

function About() {
  return (
    <Container>
      <BackButton path='/' goTo='Home' />
      <AboutUs />
      <Content />
      <Team />
      <Project />
    </Container>
  );
}

export default About;
