import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarComp = (props) => {
  return (
    <Navbar className="navbar-bg" sticky="top" expand="lg">
      <Container>
        <Navbar.Brand>Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav
            className="my-2 mx-4 my-lg-0 nav-link:target"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#home" onClick={() => props.ubahState(1)}>
              Home
            </Nav.Link>
            <Nav.Link href="#artikel" onClick={() => props.ubahState(2)}>
              Artikel
            </Nav.Link>
            <Nav.Link href="#agenda" onClick={() => props.ubahState(3)}>
              Agenda
            </Nav.Link>
            <Nav.Link href="/vaksinasi">Pendaftaran Vaksinasi</Nav.Link>
          </Nav>
          <Button variant="primary" href="/akun">
            Login
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;

/*
<Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#artikel" onClick={() => props.ubahState(true)}>Artikel</Nav.Link>
            <Nav.Link href="#agenda" onClick={() => props.ubahState(false)}>Agenda</Nav.Link>
            <Nav.Link href="/vaksinasi">Pendaftaran Vaksinasi</Nav.Link>
          </Nav>
            <Button variant="primary" href="/akun">Login</Button>
        </Navbar.Collapse>
        */
