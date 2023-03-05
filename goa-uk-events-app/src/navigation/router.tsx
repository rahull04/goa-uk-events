import { RouteObject, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Admin from '../pages/Admin';
import PrivateRoute from './PrivateRoute';
import MainLayout from '../components/layouts/MainLayout.component';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/admin',
        element: (
          <PrivateRoute>
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
    ],
  },
];

export const router = createBrowserRouter(routes);
