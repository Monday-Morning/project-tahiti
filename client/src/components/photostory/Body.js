import React from 'react';

// libraries
import { Container } from '@mui/material';

// Components
import Carousel from '../../components/photostory/Carousel';
import Disclaimer from '../article/Disclaimer';
import ArticleTags from '../article/Tags';

// Placeholder
import { PHOTOSTORY } from '../../assets/placeholder/photostory';

const Body = ({ content }) => {
  return (
    <>
      <Carousel content={content} />
      <Container>
        <Disclaimer />
        <ArticleTags tags={PHOTOSTORY.tags} />
        <hr />
      </Container>
    </>
  );
};

export default Body;
