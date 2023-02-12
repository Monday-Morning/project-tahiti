import React, { useContext, useEffect, useState } from 'react';

import { ThemeProvider } from '@mui/material/styles';

import darkTheme from '../config/themes/dark';
import lightTheme from '../config/themes/light';

//context for theming
export const ThemeContext = React.createContext({
  isDarkTheme: undefined,
  setDarkTheme: async (theme) => null,
});

export const useTheme = () => useContext(ThemeContext);

//context provider
const ThemeContextProvider = ({ children }) => {
  const [isDarkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const currentHour = new Date().getHours();
    setDarkTheme(currentHour >= 20 || currentHour <= 8 ? true : false);
  }, [setDarkTheme]);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setDarkTheme }}>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
