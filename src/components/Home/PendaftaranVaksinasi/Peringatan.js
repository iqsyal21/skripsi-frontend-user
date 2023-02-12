import React from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Peringatan = () => {
  const history = useHistory();
  
  return (
    <Card className="box-peringatan">
      <Card.Body>Anda belum Login !</Card.Body>
      <Card.Body>
        Untuk melakukan pendaftaran anda harus login terlebih dahulu
      </Card.Body>
      <Button variant="primary" className="button-peringatan" onClick={() => history.push("/akun")}>
        Login
      </Button>
    </Card>
  );
};

export default Peringatan;
