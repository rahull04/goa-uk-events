import './App.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from './navigation/router';
import Loader from './components/Loader';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} fallbackElement={<Loader />} />
    </div>
  );
}

export default App;
