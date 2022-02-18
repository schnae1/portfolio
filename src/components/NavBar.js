import React from 'react';
import '../styles/navbar.css';
import Navbar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';

export default function NavBar() {
  return (
    <Navbar
      bg="navbar-custom"
      variant="dark"
      collapseOnSelect
      fixed="top"
      expand="lg"
    >
      <Navbar.Toggle className="mx-3" />
      <Navbar.Collapse>
        <Nav className="nav-custom" navbar>
          <Nav.Link className="nav-link-custom px-4" href="/">
            Home
          </Nav.Link>
          <Nav.Link className="nav-link-custom px-4" href="/projects">
            Projects
          </Nav.Link>
          <Nav.Link className="nav-link-custom px-4" href="/about">
            About
          </Nav.Link>
          <Nav.Link className="nav-link-custom px-4" href="/contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
