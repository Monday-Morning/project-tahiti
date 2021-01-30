import React from 'react';

// Libraries

// Components
import BackLink from '../components/podcast/BackLink';
import LatestPodcast from '../components/podcast/LatestPodcast';
import PodcastList from '../components/podcast/List';

const Podcast = () => {
  return (
    <div>
      <BackLink />
      <LatestPodcast />
      <PodcastList />
    </div>
  );
};

export default Podcast;
