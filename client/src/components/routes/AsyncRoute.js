import Loadable from 'react-loadable';
import ActivityIndicator from '../shared/ActivityIndicator';

const AsyncRoute = (route) =>
  Loadable({
    loader: () => import(`${route}`),
    loading: ActivityIndicator,
  });

export default AsyncRoute;
