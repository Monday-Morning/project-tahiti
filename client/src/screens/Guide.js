import React from 'react';

// Components
import Backlink from '../components/guide/Backlink';
import Options from '../components/guide/Options';
import Archives from '../components/guide/Archive';
import BigCarousel from '../components/widgets/BigCarousel';

function Contact() {
  return (
    <div>
      <Backlink />
      <Options />
      <BigCarousel head='Issues' navigator='2020-2021' />
      <Archives />
    </div>
  );
}

export default Contact;
