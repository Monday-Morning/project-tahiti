import React from 'react';
import Head from 'next/head';

import Allphotostory from '../screens/Allphotostory';
import Marginals from '../components/marginals/Marginals';





const PhotoStoryPage = () => (
  <>
    <Marginals>
      <Allphotostory/>
    </Marginals>
  </>
);

export default PhotoStoryPage;