import React from 'react';

import Header from './Navbar';
import TopBar from './TopBar';
import Footer from './Footer';

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
