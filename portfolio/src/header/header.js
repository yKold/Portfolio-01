import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

import './header.css'
import React from 'react'

const Header = () => {
  return (
    <Navbar className='header' bg='dark' data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Gabriel Ykold</Navbar.Brand>
        <Nav>
          <Nav.Link href=''>Sobre</Nav.Link>
          <Nav.Link href=''>Projetos</Nav.Link>
          <Nav.Link href=''>Contato</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}


export default Header;