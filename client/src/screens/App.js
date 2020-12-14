import React from 'react';

// Libraries
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Card } from '@material-ui/core';

// Components
import ActivityIndicator from '../components/shared/ActivityIndicator';

// Helpers
import createBrowserHistory from '../utils/history';

// Theme
import lightTheme from '../config/themes/light';

// Asynchronous Loading of Pages in different chunks
const AsyncHome = Loadable({
  loader: () => import('./Home'),
  loading: ActivityIndicator,
});

// Function to check the Authenticated status.
const isAuthenticated = () => {
  // Check the authentication state as per your way of authentication i.e. jwt, sessions, etc
};

// Use this Route component for authenticated Routes.
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (isAuthenticated() ? <Component {...props} /> : <Redirect to='/login' />)}
  />
);

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Router history={createBrowserHistory}>
        <Switch>
          <Route path='/' exact component={AsyncHome} />
          <Redirect to='/' />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
