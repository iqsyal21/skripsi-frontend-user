import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const PendaftaranVaksinasi = () => {
  return (
    <div>
      <Navbar bg="dark" variant="light" sticky="top" expand="lg">
        <Container fluid>
          <Nav className="me-auto">
            <Nav.Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-arrow-left-circle back-icon"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
                />
              </svg>
              <span className="back-icon_text">Kembali</span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div>
        <h1>halaman pendaftaran vaksinasi</h1>
      </div>
    </div>
  );
};

export default PendaftaranVaksinasi;
