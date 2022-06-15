import React from 'react';

import Header from './Navbar';
import TopBar from './TopBar';
import Footer from './Footer';
import Container from '@mui/material/Container';

function Marginals({ children }) {
  return (
    <>
      <TopBar />
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Marginals;
