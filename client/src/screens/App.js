import React from 'react';

// Libraries
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

// Components
import ActivityIndicator from '../components/shared/ActivityIndicator';

// Helpers
import createBrowserHistory from '../utils/history';

// Theme
import lightTheme from '../config/themes/light';

const AsyncRoute = (route) =>
  Loadable({
    loader: () => import(`${route}`),
    loading: ActivityIndicator,
  });

const AsyncHome = AsyncRoute('./Home');
const AsyncOnboarding = AsyncRoute('./Onboarding');
const AsyncArticle = AsyncRoute('./Article');

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Router history={createBrowserHistory}>
        <Switch>
          <Route path='/' exact component={AsyncHome} />
          <Route path='/onboarding' exact component={AsyncOnboarding} />
          <Route path='/article' exact component={AsyncArticle} />
          {/* <Redirect to='/' /> */}
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
