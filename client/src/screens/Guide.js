import React from 'react';

// Components
import Backlink from '../components/guide/Backlink';
import Options from '../components/guide/Options';
import Archives from '../components/guide/Archive';
import Issues from '../components/guide/Issue';

function Contact(){
    return(
        <div>
        <Backlink />
        <Options />
        <Issues />
        <Archives />
        </div>
    );
}

export default Contact;