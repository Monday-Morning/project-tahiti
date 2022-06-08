import React from 'react';

// Components
import { Container } from '@mui/material';
import BackButton from '../components/shared/button/BackButton';
import ContactUs from '../components/contact/ContactUs';
import Details from '../components/contact/Details';
import Feedback from '../components/contact/Feedback';

function Contact() {
  return (
    <div>
      <Container>
        <BackButton path='/' goTo='Home' />
      </Container>
      <ContactUs />
      <Container>
        <Details />
        <Feedback />
      </Container>
    </div>
  );
}

export default Contact;
