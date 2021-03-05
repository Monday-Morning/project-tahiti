import React from 'react';
import { Route } from 'react-router-dom';

// Function to check the Authenticated status.
const isAuthenticated = () => {
  // Check the authentication state as per your way of authentication i.e. jwt, sessions, etc
};

// Use this Route component for authenticated Routes.
export default ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? <Component {...props} /> : <Redirect to='/login' />
    }
  />
);
