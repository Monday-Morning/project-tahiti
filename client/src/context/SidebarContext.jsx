import React, { createContext, useState } from 'react';

// context
export const SidebarContext = createContext();

// provider
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
