import React from 'react';

import { Container } from '@material-ui/core';

// Components
import BackLink from '../components/podcast/BackLink';
import LatestPodcast from '../components/podcast/LatestPodcast';
import PodcastList from '../components/podcast/List';

const Podcast = () => (
  <>
    <Container>
      <BackLink />
    </Container>
    <LatestPodcast />
    <PodcastList />
  </>
);

export default Podcast;
