import React from 'react';
import ReactDOM from 'react-dom';

import App from './screens/App';
import Root from './config/Root';

import configureFirebase from './config/firebase';

import('./index.css');

configureFirebase()
  .then(() => {
    ReactDOM.render(
      <Root>
        <App />
      </Root>,
      document.querySelector('#root'),
    );
  })
  .catch((error) => {
    // eslint-disable-next-line
    console.log('Firebase Initialization Error: ', error);
  });
