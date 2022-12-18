import React from "react";
import { useHistory } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const NavbarAdmin = () => {
  const history = useHistory();
  const onLogout = () => {
    sessionStorage.removeItem("token");
    history.push("/akun");
  };

  return (
    <Navbar sticky="top" className="navbar-admin-bg" expand="lg">
      <Container>
        <Navbar.Brand className="text-light">Hello Admin</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button variant="danger" onClick={onLogout}>
            Logout
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarAdmin;
