import './App.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from './navigation/router';
import { useStore } from './lib/hooks/useStore';
import MainLayout from './components/layouts/MainLayout.component';
import { Outlet } from 'react-router-dom';
import Header from './components/layouts/Header.component';

const App = () => {
  const {
    states: {
      user: { isAuthenticated },
    },
  } = useStore();
  return (
    <div className="App">
      <MainLayout>
        <Header />
        <RouterProvider router={router(isAuthenticated)} />
        <Outlet />
      </MainLayout>
    </div>
  );
};

export default App;
