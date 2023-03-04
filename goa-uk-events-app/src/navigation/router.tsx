import { RouteObject, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: '/404',
    element: <div>Error</div>,
  },
];

export const router = createBrowserRouter(routes);
