import React from 'react';

// Libraries
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

// Components
import ActivityIndicator from '../components/shared/ActivityIndicator';
import Marginals from '../components/marginals/Marginals';
import ScrollToTopOnMount from '../components/shared/ScrollToTopOnMount';
import ScrollToTopButton from '../components/shared/button/ScrollToTopButton';

// Helpers
import createBrowserHistory from '../utils/history';
import ROUTES from '../utils/getRoutes';

// Theme
import lightTheme from '../config/themes/light';

const AsyncRoute = (route) =>
  Loadable({
    loader: () => import(`${route}`),
    loading: ActivityIndicator,
  });

const AsyncPlayground = AsyncRoute('./Playground.js');
const Async404 = AsyncRoute('./404.js');

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />

      <Router history={createBrowserHistory}>
        <Switch>
          {/* Playground route for testing */}
          <Route path='/playground' component={AsyncPlayground} exact />

          {/* Render the Onboarding Route Outside the Marginals. */}
          <Route
            path={ROUTES.USER[0].path}
            component={AsyncRoute(ROUTES.USER[0].asyncRoutePath)}
            exact={ROUTES.USER[0].exact}
          />

          <Route path='/error/404' component={Async404} exact />

          <Marginals>
            <Switch>
              {/* Categories Tabs */}
              {ROUTES.CATEGORIES.map(
                ({ shortName, path, asyncRoutePath, exact, idNumber }) => (
                  <Route
                    key={`${shortName}-${idNumber}`}
                    path={path}
                    component={AsyncRoute(asyncRoutePath)}
                    exact={exact}
                  />
                ),
              )}

              {/* Sub Categories - Campus Tabs */}
              {ROUTES.SUB_CATEGORIES.OBJECT.CAMPUS.map(
                ({ shortName, path, asyncRoutePath, exact, idNumber }) => (
                  <Route
                    key={`${shortName}-${idNumber}`}
                    path={path}
                    component={AsyncRoute(asyncRoutePath)}
                    exact={exact}
                  />
                ),
              )}

              {/* Sub Categories - Connect Tabs */}
              {ROUTES.SUB_CATEGORIES.OBJECT.CONNECT.map(
                ({ shortName, path, asyncRoutePath, exact, idNumber }) => (
                  <Route
                    key={`${shortName}-${idNumber}`}
                    path={path}
                    component={AsyncRoute(asyncRoutePath)}
                    exact={exact}
                  />
                ),
              )}

              {/* Sub Categories - DD & CWC Tabs */}
              {ROUTES.SUB_CATEGORIES.OBJECT.DDCWC.map(
                ({ shortName, path, asyncRoutePath, exact, idNumber }) => (
                  <Route
                    key={`${shortName}-${idNumber}`}
                    path={path}
                    component={AsyncRoute(asyncRoutePath)}
                    exact={exact}
                  />
                ),
              )}

              {/* Sub Categories - Career Tabs */}
              {ROUTES.SUB_CATEGORIES.OBJECT.CAREER.map(
                ({ shortName, path, asyncRoutePath, exact, idNumber }) => (
                  <Route
                    key={`${shortName}-${idNumber}`}
                    path={path}
                    component={AsyncRoute(asyncRoutePath)}
                    exact={exact}
                  />
                ),
              )}

              {/* Sub Categories - Alumni Tabs */}
              {ROUTES.SUB_CATEGORIES.OBJECT.ALUMNI.map(
                ({ shortName, path, asyncRoutePath, exact, idNumber }) => (
                  <Route
                    key={`${shortName}-${idNumber}`}
                    path={path}
                    component={AsyncRoute(asyncRoutePath)}
                    exact={exact}
                  />
                ),
              )}

              {/* Sub Categories - Expressions Tabs */}
              {ROUTES.SUB_CATEGORIES.OBJECT.EXPRESSIONS.map(
                ({ shortName, path, asyncRoutePath, exact, idNumber }) => (
                  <Route
                    key={`${shortName}-${idNumber}`}
                    path={path}
                    component={AsyncRoute(asyncRoutePath)}
                    exact={exact}
                  />
                ),
              )}

              {/* Individual Routes */}
              {ROUTES.INDIVIDUALS.map(
                ({ shortName, path, asyncRoutePath, exact, idNumber }) => (
                  <Route
                    key={`${shortName}-${idNumber}`}
                    path={path}
                    component={AsyncRoute(asyncRoutePath)}
                    exact={exact}
                  />
                ),
              )}

              {/* General Routes */}
              {ROUTES.GENERAL.map(
                ({ shortName, path, asyncRoutePath, exact, idNumber }) => (
                  <Route
                    key={`${shortName}-${idNumber}`}
                    path={path}
                    component={AsyncRoute(asyncRoutePath)}
                    exact={exact}
                  />
                ),
              )}

              {/* User Profile Route */}
              <Route
                path={ROUTES.USER[1].path}
                component={AsyncRoute(ROUTES.USER[1].asyncRoutePath)}
                exact={ROUTES.USER[1].exact}
              />
              <Route path='*'>
                <Redirect to='/error/404' />
              </Route>
            </Switch>
          </Marginals>
        </Switch>

        <ScrollToTopButton />
        <ScrollToTopOnMount />
      </Router>
    </ThemeProvider>
  );
}
export default App;
