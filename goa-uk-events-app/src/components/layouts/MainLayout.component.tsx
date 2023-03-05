import Header from './Header.component';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Loader from '../Loader.component';
import { useStore } from '../../lib/hooks';

const MainLayout = () => {
  const {
    states: {
      common: { isLoading },
    },
  } = useStore();
  return (
    <Container>
      <Header />
      {isLoading ? <Loader /> : null}
      <Outlet />
    </Container>
  );
};

export default MainLayout;
