import React from 'react';

// Libraries

// Components
import TopBar from '../components/marginals/TopBar';
import Header from '../components/marginals/Header';
import Footer from '../components/marginals/Footer';
import BackLink from '../components/podcast/BackLink';
import LatestPodcast from '../components/podcast/LatestPodcast';
import PodcastList from '../components/podcast/List';

const Podcast = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <BackLink />
      <LatestPodcast />
      <PodcastList />
      <Footer />
    </div>
  );
};

export default Podcast;
