import React from 'react';

// Components
import Backlink from '../components/about/Backlink';
import AboutUs from '../components/about/AboutUs';
import Content from '../components/about/Content';
import Team from '../components/about/Team';
import Project from '../components/about/Project';

function About(){
    return(
        <div>
        <Backlink />
        <AboutUs />
        <Content />
        <Team />
        <Project />
        </div>
    );
}

export default About;