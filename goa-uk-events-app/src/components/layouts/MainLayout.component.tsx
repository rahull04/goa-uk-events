import Header from './Header.component';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const MainLayout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

export default MainLayout;
