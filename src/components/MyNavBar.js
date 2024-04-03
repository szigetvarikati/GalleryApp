import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import SearchBar from './SearchBar';

function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand href="#home">NAVA</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#search">Egyszerű kereső</Nav.Link>
          <Nav.Link href="#advanced-search">Összetett kereső</Nav.Link>
          <Nav.Link href="#altars">Leltárak</Nav.Link>
          <Nav.Link href="#collections">Gyűjtemények</Nav.Link>
          <Nav.Link href="#dictionaries">Szótárak</Nav.Link>
        </Nav>
        <Nav className="ml-auto flex-column flex-sm-row">
          <SearchBar />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
