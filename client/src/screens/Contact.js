import React from 'react';

// Components
import BackButton from '../components/shared/button/BackButton';
import ContactUs from '../components/contact/ContactUs';
import Details from '../components/contact/Details';
import Feedback from '../components/contact/feedback';

function Contact() {
    return (
        <div>
            <BackButton path="/" goTo="Home" />
            <ContactUs />
            <Details />
            <Feedback />
        </div>
    );
}

export default Contact;
