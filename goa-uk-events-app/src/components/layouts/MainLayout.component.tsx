import Header from './Header.component';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader.component';
import { useStore } from '../../lib/hooks';

const MainLayout = () => {
  const {
    states: {
      common: { isLoading },
    },
  } = useStore();
  return (
    <div>
      <Header />
      {isLoading ? <Loader /> : null}
      <Outlet />
    </div>
  );
};

export default MainLayout;
