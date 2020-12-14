import React from 'react';
import ReactDOM from 'react-dom';

import App from './screens/App';
import Root from './Root';

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.querySelector('#root'),
);
