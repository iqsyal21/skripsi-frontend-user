import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/images/logo.png"

const NavbarComp = (props) => {
  const sessionToken = sessionStorage.getItem("token");

  const onLogout = () => {
    sessionStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <Navbar className="navbar-bg" sticky="top" expand="lg">
      <Container>
        <Navbar.Brand>
          <img
            alt="logo puskesmas cilebut"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Puskesmas Cilebut
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav
            className="my-2 mx-4 my-lg-0 nav-link:target"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              href="#home"
              className={props.currentState === 1 ? "active-nav" : ""}
              onClick={() => props.ubahState(1)}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#artikel"
              className={props.currentState === 2 ? "active-nav" : ""}
              onClick={() => props.ubahState(2)}
            >
              Artikel
            </Nav.Link>
            <Nav.Link
              href="#agenda"
              className={props.currentState === 3 ? "active-nav" : ""}
              onClick={() => props.ubahState(3)}
            >
              Agenda
            </Nav.Link>
            <Nav.Link href="/vaksinasi">Pendaftaran Vaksinasi</Nav.Link>
          </Nav>
          {sessionToken == undefined ? (
            <Button variant="primary" href="/akun">
              Login
            </Button>
          ) : (
            <Button variant="danger" onClick={onLogout}>
              Logout
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
