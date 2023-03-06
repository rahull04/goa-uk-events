import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Link className="nav-link" to={'/'}>
            Home
          </Link>
          <Link className="nav-link" to={'/admin'}>
            Admin
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
