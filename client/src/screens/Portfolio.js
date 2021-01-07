import React from 'react';

// libraries

// Components
import Header from '../components/marginals/Header';
import Footer from '../components/marginals/Footer';
import TopBar from '../components/marginals/TopBar';
import BackLink from '../components/portfolio/Backlink';
import UserCard from '../components/portfolio/UserCard';
import Works from '../components/portfolio/Works';

//placeholders

function Portfolio() {
  return (
    <div>
      <TopBar />
      <Header />
      <BackLink />
      <UserCard />
      <Works />
      <Footer />
    </div>
  );
}

export default Portfolio;
