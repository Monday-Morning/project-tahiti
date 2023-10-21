import { useState } from 'react';
const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    try {
      const value = window.localStorage.getItem(key);
      return value != 'null' ? JSON.parse(value) : initialValue;
    } catch (error) {
      console.log(error);
    }
  });
  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(state) : value;
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      setState(value);
    } catch (error) {
      console.log(error);
    }
  };
  return [state, setValue];
};
export default useLocalStorage;
