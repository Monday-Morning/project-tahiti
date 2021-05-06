import { useState } from 'react';

export default (initialState = '') => {
  const [state, setState] = useState(initialState);
  const set = (value) => setState(value);
  const reset = () => setState(initialState);
  return [state, set, reset];
};
