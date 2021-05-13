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
import ROUTES from '../utils/getRouter';

// Theme
import lightTheme from '../config/themes/light';

const AsyncRoute = (route) =>
  Loadable({
    loader: () => import(`${route}`),
    loading: ActivityIndicator,
  });

// const ONBOARDING_DETAILS = {
//   path: '/onboarding',
//   name: 'Onboarding',
//   component: './Onboarding.js',
// };

// const AsyncHome = AsyncRoute('./Home');
// const AsyncOnboarding = AsyncRoute('./Onboarding');
// const AsyncArticle = AsyncRoute('./Article');
// const AsyncPodcast = AsyncRoute('./Podcast');
// const AsyncPortfolio = AsyncRoute('./Portfolio');
// const AsyncCategory = AsyncRoute('./CategoryPage');
// const AsyncContact = AsyncRoute('./Contact');
// const AsyncGuide = AsyncRoute('./Guide');
// const AsyncSubCategory = AsyncRoute('./SubCategory.js');
// const AsyncProfile = AsyncRoute('./UserProfile');
// const AsyncAbout = AsyncRoute('./About');
// const AsyncPhotoStory = AsyncRoute('./PhotoStory');
// const AsyncGallery = AsyncRoute('./Gallery');
// const AsyncExpressions = AsyncRoute('./Expressions');

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />

      {/* prettier-ignore */}
      <Router history={createBrowserHistory}>
        <Switch>
          {/* <Route path={ONBOARDING_DETAILS.path} exact component={AsyncRoute(ONBOARDING_DETAILS.component)} /> */}

          {/* Render the Onboarding Route Outside the Marginals. */}
          <Route path={ROUTES.USER[0].path} component={AsyncRoute(ROUTES.USER[0].asyncRoutePath)} exact={ROUTES.USER[0].exact} />

          <Marginals>
            {/* Categories Tabs */}
            {ROUTES.CATEGORIES.map(({shortName, path, asyncRoutePath, exact, idNumber}) => (
              <Route key={`${shortName}-${idNumber}`} path={path} component={AsyncRoute(asyncRoutePath)} exact={exact} />
            ))}

            {/* Sub Categories - Campus Tabs */}
            {ROUTES.SUB_CATEGORIES.OBJECT.CAMPUS.map(({shortName, path, asyncRoutePath, exact, idNumber}) => (
              <Route key={`${shortName}-${idNumber}`} path={path} component={AsyncRoute(asyncRoutePath)} exact={exact} />
            ))}

            {/* Sub Categories - Connect Tabs */}
            {ROUTES.SUB_CATEGORIES.OBJECT.CONNECT.map(({shortName, path, asyncRoutePath, exact, idNumber}) => (
              <Route key={`${shortName}-${idNumber}`} path={path} component={AsyncRoute(asyncRoutePath)} exact={exact} />
            ))}

            {/* Sub Categories - DD & CWC Tabs */}
            {ROUTES.SUB_CATEGORIES.OBJECT.DDCWC.map(({shortName, path, asyncRoutePath, exact, idNumber}) => (
              <Route key={`${shortName}-${idNumber}`} path={path} component={AsyncRoute(asyncRoutePath)} exact={exact} />
            ))}

            {/* Sub Categories - Career Tabs */}
            {ROUTES.SUB_CATEGORIES.OBJECT.CAREER.map(({shortName, path, asyncRoutePath, exact, idNumber}) => (
              <Route key={`${shortName}-${idNumber}`} path={path} component={AsyncRoute(asyncRoutePath)} exact={exact} />
            ))}

            {/* Sub Categories - Alumni Tabs */}
            {ROUTES.SUB_CATEGORIES.OBJECT.ALUMNI.map(({shortName, path, asyncRoutePath, exact, idNumber}) => (
              <Route key={`${shortName}-${idNumber}`} path={path} component={AsyncRoute(asyncRoutePath)} exact={exact} />
            ))}

            {/* Sub Categories - Expressions Tabs */}
            {ROUTES.SUB_CATEGORIES.OBJECT.EXPRESSIONS.map(({shortName, path, asyncRoutePath, exact, idNumber}) => (
              <Route key={`${shortName}-${idNumber}`} path={path} component={AsyncRoute(asyncRoutePath)} exact={exact} />
            ))}

            {/* Individual Routes */}
            {ROUTES.INDIVIDUALS.map(({shortName, path, asyncRoutePath, exact, idNumber}) => (
              <Route key={`${shortName}-${idNumber}`} path={path} component={AsyncRoute(asyncRoutePath)} exact={exact} />
            ))}

            {/* General Routes */}
            {ROUTES.GENERAL.map(({shortName, path, asyncRoutePath, exact, idNumber}) => (
              <Route key={`${shortName}-${idNumber}`} path={path} component={AsyncRoute(asyncRoutePath)} exact={exact} />
            ))}

            {/* General Routes */}
            {ROUTES.GENERAL.map(({shortName, path, asyncRoutePath, exact, idNumber}) => (
              <Route key={`${shortName}-${idNumber}`} path={path} component={AsyncRoute(asyncRoutePath)} exact={exact} />
            ))}

            {/* User Profile Route */}
            <Route path={ROUTES.USER[1].path} component={AsyncRoute(ROUTES.USER[1].asyncRoutePath)} exact={ROUTES.USER[1].exact} />

            {/* <Route path='/' exact component={AsyncHome} />
            <Route path='/campus' exact component={AsyncCategory} />
            <Route path='/connect' exact component={AsyncCategory} />
            <Route path='/ddcwc' exact component={AsyncCategory} />
            <Route path='/career' exact component={AsyncCategory} />
            <Route path='/alumni' exact component={AsyncCategory} />
            <Route path='/expressions' exact component={AsyncExpressions} /> */}

            {/* Sub Categories */}
            {/* Campus */}
            {/* <Route path='/campus/academics' exact component={AsyncSubCategory} />
            <Route path='/campus/campusBuzz' exact component={AsyncSubCategory} />
            <Route path='/campus/forum' exact component={AsyncSubCategory} />
            <Route path='/campus/studentActivities' exact component={AsyncSubCategory} />
            <Route path='/campus/halls' exact component={AsyncSubCategory} />
            <Route path='/campus/pollAnalysis' exact component={AsyncSubCategory} /> */}

            {/* Connect */}
            {/* <Route path='/connect/interviews' exact component={AsyncSubCategory} />
            <Route path='/connect/sacSpeaks' exact component={AsyncSubCategory} />
            <Route path='/connect/cgpa' exact component={AsyncSubCategory} />
            <Route path='/connect/guestInterview' exact component={AsyncSubCategory} /> */}

            {/* DD && CWC */}
            {/* <Route path='/ddcwc/directorsDesk' exact component={AsyncSubCategory} />
            <Route path='/ddcwc/chiefWardensDesk' exact component={AsyncSubCategory} /> */}

            {/* Career */}
            {/* <Route path='/career/placements' exact component={AsyncSubCategory} />
            <Route path='/career/internships' exact component={AsyncSubCategory} />
            <Route path='/career/higherEducation' exact component={AsyncSubCategory} /> */}
            {/* // TODO */}
            {/* <Route path='/career/live' exact component={AsyncSubCategory} /> */}

            {/* Alumni */}
            {/* <Route path='/alumni/alumnusSpeaks' exact component={AsyncSubCategory} />
            <Route path='/alumni/alumniAffairs' exact component={AsyncSubCategory} /> */}

            {/* Expressions */}
            {/* <Route path='/expressions/witsdom' exact component={AsyncSubCategory} />
            <Route path='/expressions/editorial' exact component={AsyncSubCategory} />
            <Route path='/expressions/podcasts' exact component={AsyncPodcast} />
            <Route path='/expressions/photostory' component={AsyncPhotoStory} />
            <Route path='/expressions/gallery' component={AsyncSubCategory} /> */}

            {/* Individuals */}
            {/* <Route path='/article/:id/:title' exact component={AsyncArticle} />
            <Route path='/witsdom/:id/:title' exact component={AsyncArticle} />
            <Route path='/gallery/:id/title' component={AsyncGallery} />
            <Route path='/photostory/:id/title' component={AsyncGallery} />
            <Route path='/portfolio/:id/:name' exact component={AsyncPortfolio}/> */}

            {/* Interactions: TODO */}
            {/* <Route path='/calendar' />
            <Route path='/polls' />
            <Route path='/forums' /> */}

            {/* General */}
            {/* <Route path='/about' component={AsyncAbout} />
            <Route path='/guide' exact component={AsyncGuide} />
            <Route path='/contact' exact component={AsyncContact} />
            <Route path='/archive' />
            <Route path='/terms&policies' />
            <Route path='/sac&clubs' />
            <Route path='/health' />
            <Route path='/emergency' /> */}

            {/* User Account */}
            {/* <Route path='/profile' exact component={AsyncProfile} /> */}
          </Marginals>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
export default App;
