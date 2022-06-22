import React, { createContext, useState } from 'react';

export const SidebarContext = createContext();

const SidebarContextProvider = ({ children }) => {
  const [state, setState] = useState({
    opened: true,
    isOpen: [],
    navOpened: [],
  });

  return (
    <SidebarContext.Provider value={{ state, setState }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContextProvider;
