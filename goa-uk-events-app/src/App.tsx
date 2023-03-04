import './App.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from './navigation/router';
import { useStore } from './lib/hooks/useStore';

const App = () => {
  const {
    states: {
      user: { isAuthenticated },
    },
  } = useStore();
  return (
    <div className="App">
      <RouterProvider router={router(isAuthenticated)} />
    </div>
  );
};

export default App;
