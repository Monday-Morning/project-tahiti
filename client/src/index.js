import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './screens/App';
import Root from './config/Root';
import ApolloClient from './config/ApolloClient';

// Utils
import configureFirebase from './config/firebase';

import('./index.css');

configureFirebase()
  .then(() => {
    ReactDOM.render(
      <ApolloClient>
        <Root>
          <App />
        </Root>
      </ApolloClient>,
      document.querySelector('#root'),
    );
  })
  .catch((error) => {
    // eslint-disable-next-line
    console.log('Firebase Initialization Error: ', error);
  });
