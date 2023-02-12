
import { Link, NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const CustomNavabar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
        <NavLink  className={ ({isActive}) => `nav-item nav-link` }  to="/">Home</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink  className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active': ''}` }  to="/lifestyle">Lifestyle</NavLink>
            <NavLink  className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active': ''}` }  to="/travel">Travel</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
