import React, { useContext, useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import darkTheme from '../config/themes/dark';
import lightTheme from '../config/themes/light';
import useLocalStorage from '../hooks/useLocalStorage';
//context for theming
export const ThemeContext = React.createContext({
  isDarkTheme: undefined,
  setDarkTheme: async (theme) => null,
});

export const useTheme = () => useContext(ThemeContext);

//context provider
const ThemeContextProvider = ({ children }) => {
  const [defaultTheme, setDefaultTheme] = useLocalStorage('DefaultTheme');
  const [isDarkTheme, setDarkTheme] = useLocalStorage('IsDarkTheme');
  useEffect(() => {}, [isDarkTheme]);
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)',
    );
    const setTheme = (event) => {
      if (event.matches) {
        setDefaultTheme(defaultTheme === true ? defaultTheme : null);
        setDarkTheme(true);
      } else {
        setDefaultTheme(false);
        setDarkTheme(defaultTheme === false ? defaultTheme : null);
      }
    };
    setTheme(darkModeMediaQuery);
    darkModeMediaQuery.addEventListener('change', setTheme);
    setDarkTheme(isDarkTheme);
    setDefaultTheme(isDarkTheme ? isDarkTheme : isDarkTheme);
    return () => {
      darkModeMediaQuery.removeEventListener('change', setTheme);
    };
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setDarkTheme }}>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
