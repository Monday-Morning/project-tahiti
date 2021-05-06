import { useState } from 'react';

export default (initialState = false) => {
  const [state, setState] = useState(initialState);
  const toggle = () => setState((current) => !current);
  return [state, toggle, setState];
};
