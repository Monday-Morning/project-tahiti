import React from 'react';

//libraries
import { Container } from '@material-ui/core';

// Components
import Options from '../components/guide/Options';
import Archives from '../components/guide/Archive';
import BigCarousel from '../components/widgets/BigCarousel';
import BackButton from '../components/shared/button/BackButton';

// placeholder
import { CAROUSEL } from '../assets/placeholder/guide';

function Contact() {
  return (
    <div>
      <Container>
        <BackButton path='/' goTo='Home' />
        <Options />
      </Container>
      <BigCarousel head='Issues' IMAGE={CAROUSEL} navigator='2020-2021' />
      <Container>
        <Archives />
      </Container>
    </div>
  );
}

export default Contact;
