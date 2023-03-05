import { RouterProvider } from 'react-router-dom';
import { router } from './navigation/router';

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
