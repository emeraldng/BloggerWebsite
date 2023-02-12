
import { Link, NavLink } from 'react-router-dom';


import Nav from 'react-bootstrap/Nav';

import "./CustomNavbar.scss";


export const CustomNavbar = () => {
  return (


    <div className="container">
      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="/">Home</NavLink>
        </Nav.Item>
        <Nav.Item as="li">
          <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="/travel">Travel</NavLink>
        </Nav.Item>
        <Nav.Item as="li">
          <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="/lifestyle">Lifestyle</NavLink>
        </Nav.Item>
        <Nav.Item as="li">
          <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="/business">Business</NavLink>
        </Nav.Item>
        <Nav.Item as="li">
          <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="/food">Food</NavLink>
        </Nav.Item>
        <Nav.Item as="li">
          <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="/work">Work</NavLink>
        </Nav.Item>
      </Nav>
    </div>
  )
}
