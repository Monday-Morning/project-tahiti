import React from 'react';

// Components
import Backlink from '../components/contact/Backlink';
import ContactUs from '../components/contact/ContactUs';
import Details from '../components/contact/Details';
import Feedback from '../components/contact/feedback';

function Contact(){
    return(
        <div>
        <Backlink />
        <ContactUs />
        <Details />
        <Feedback />
        </div>
    );
}

export default Contact;
