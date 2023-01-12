import React from 'react';

import { Container } from '@mui/material';

// Components
import BackLink from '../components/podcast/BackLink';
import LatestPodcast from '../components/podcast/LatestPodcast';
import PodcastList from '../components/podcast/List';

const Podcast = ({ spotify }) => (
  <>
    <Container>
      <BackLink />
      <LatestPodcast />
      <PodcastList spotify={spotify} />
    </Container>
  </>
);

export default Podcast;
