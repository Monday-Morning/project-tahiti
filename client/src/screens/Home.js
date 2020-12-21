import React from 'react';
import { ReactLogo } from '../components/homepage';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <ReactLogo />
      <Link style={{ position: 'absolute', top: 50, left: 50 }} to='/onboarding'>
        Onboarding
      </Link>
    </div>
  );
}

export default Home;
