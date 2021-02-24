import React from 'react';

// Libraries
import { Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

// Components
import ActivityIndicator from '../components/shared/ActivityIndicator';
import Marginals from '../components/marginals/Marginals';

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
const AsyncCategory = AsyncRoute('./CategoryPage');
const AsyncContact = AsyncRoute('./Contact');
const AsyncGuide = AsyncRoute('./Guide');
const AsyncWitsdom = AsyncRoute('./Witsdom.js');
const AsyncProfile = AsyncRoute('./UserProfile');
const AsyncAbout = AsyncRoute('./About');
const AsyncPhotoStory = AsyncRoute('./PhotoStory');
const AsyncGallery = AsyncRoute('./Gallery');
const AsyncExpressions = AsyncRoute('./Expressions');

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />

      <Router history={createBrowserHistory}>
        <Switch>
          <Route path='/onboarding' exact component={AsyncOnboarding} />

          <Marginals>
            <Route path='/article' exact component={AsyncArticle} />
            <Route path='/podcast' exact component={AsyncPodcast} />
            <Route path='/portfolio' exact component={AsyncPortfolio} />
            <Route path='/witsdom' exact component={AsyncWitsdom} />

            <Route path='/about' component={AsyncAbout} />
            <Route path='/photostory' component={AsyncPhotoStory} />
            <Route path='/gallery' component={AsyncGallery} />
            {/* TODO: About Route */}
            <Route path='/contact' exact component={AsyncContact} />
            <Route path='/guide' exact component={AsyncGuide} />

            {/* Navigation Tabs */}
            <Route path='/' exact component={AsyncHome} />
            <Route path='/campus' exact component={AsyncCategory} />
            <Route path='/connect' exact component={AsyncCategory} />
            <Route path='/ddcwc' exact component={AsyncCategory} />
            <Route path='/career' exact component={AsyncCategory} />
            <Route path='/alumni' exact component={AsyncCategory} />

            <Route path='/profile' exact component={AsyncProfile} />

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
            <Route path='/expressions' exact component={AsyncExpressions} />
            {/* <Redirect to='/' /> */}
          </Marginals>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
export default App;
