import { RouteObject, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Admin from '../pages/Admin';
import PrivateRoute from './PrivateRoute';

const routes = (isSignedIn: boolean): RouteObject[] => [
  {
    path: '/admin',
    element: (
      <PrivateRoute isSignedIn={isSignedIn}>
        <Admin />
      </PrivateRoute>
    ),
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/404',
    element: <div>Error</div>,
  },
];

export const router = (isSignedIn: boolean) => createBrowserRouter(routes(isSignedIn));
