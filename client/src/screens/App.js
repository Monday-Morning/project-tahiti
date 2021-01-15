import React from 'react';

// Libraries
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

// Components
import ActivityIndicator from '../components/shared/ActivityIndicator';
import TopBar from '../components/marginals/TopBar';
import Header from '../components/marginals/Header';
import Footer from '../components/marginals/Footer';

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
const AsyncPodcast = AsyncRoute('./Podcast');
const AsyncPortfolio = AsyncRoute('./Portfolio');
const AsyncCategory = AsyncRoute('./Category');


function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Router history={createBrowserHistory}>
        <TopBar />
        <Header />
        <Switch>
          <Route path='/' exact component={AsyncHome} />
          <Route path='/onboarding' exact component={AsyncOnboarding} />
          <Route path='/article' component={AsyncArticle} />
          <Route path='/podcast' exact component={AsyncPodcast} />
          <Route path='/portfolio' component={AsyncPortfolio} />

          <Route path='/campus' exact>
            <AsyncCategory
              category='campus'
              categoryName='Campus'
              categoryHeader='Catch up on everything at NITR in this section. From Academics to Fests, find everything on campus here.'
            />
          </Route>
          <Route path='/connect' exact>
            <AsyncCategory
              category='connect'
              categoryName='Connect'
              categoryHeader='Catch up on everything at NITR in this section. From Academics to Fests, find everything on campus here.'
            />
          </Route>
          <Route path='/career' exact>
            <AsyncCategory
              category='career'
              categoryName='Career'
              categoryHeader='Catch up on everything at NITR in this section. From Academics to Fests, find everything on campus here.'
            />
          </Route>
          <Route path='/alumni' exact>
            <AsyncCategory
              category='alumni'
              categoryName='Alumni'
              categoryHeader='Catch up on everything at NITR in this section. From Academics to Fests, find everything on campus here.'
            />
          </Route>
          <Route path='/ddcwc' exact>
            <AsyncCategory
              category='ddcwc'
              categoryName='DD & CWC '
              categoryHeader='Catch up on everything at NITR in this section. From Academics to Fests, find everything on campus here.'
            />
          </Route>
          {/* <Route path='/expressions' exact>
            <AsyncCategory
              category='expressions'
              categoryName='Expressions'
              categoryHeader='Catch up on everything at NITR in this section. From Academics to Fests, find everything on campus here.'
            />
          </Route> */}

          {/* <Redirect to='/' /> */}
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
