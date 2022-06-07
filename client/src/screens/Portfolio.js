import React from 'react';

// libraries

// Components
import BackLink from '../components/portfolio/Backlink';
import UserCard from '../components/portfolio/UserCard';
import Works from '../components/portfolio/Works';

// placeholders

function Portfolio({ user }) {
  return (
    <div>
      <BackLink />
      <UserCard user={user} />
      <Works user={user} />
    </div>
  );
}

export default Portfolio;
