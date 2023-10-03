import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function PortfolioNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Meu Portfólio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Início</Nav.Link>
          <Nav.Link as={Link} to="/projetos">Projetos</Nav.Link>
          <Nav.Link as={Link} to="/experiencia">Experiência</Nav.Link>
          <Nav.Link as={Link} to="/contato">Contato</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default PortfolioNavbar;
