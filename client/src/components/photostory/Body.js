import React from 'react';

// libraries
import { Container } from '@mui/material';

// Components
import Carousel from '../../components/photostory/Carousel';
import Disclaimer from '../article/Disclaimer';
import ArticleTags from '../article/Tags';

const Body = ({ content, tags }) => {
  return (
    <>
      <Carousel content={content} />
      <Container>
        <Disclaimer />
        <ArticleTags tags={tags} />
        <hr />
      </Container>
    </>
  );
};

export default Body;
