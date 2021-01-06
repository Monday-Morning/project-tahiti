import React from 'react';

import TopBar from './TopBar';

function TopMarginal({ children }) {
  return (
    <>
      <TopBar />
      {children}
    </>
  );
}

export default TopMarginal;
