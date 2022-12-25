import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import FullHeight from "react-full-height";

const Agenda = () => {
  const url = "http://localhost:5000/api";

  // get data agenda
  const [agenda, setAgenda] = useState([]);
  const getAgenda = () => {
    axios.get(url + "/agenda").then((res) => {
      setAgenda(res.data);
    });
  };
  useEffect(() => {
    getAgenda();
  }, []);

  return (
    <FullHeight canExceed>
      <Container>
        <div className="container-agenda">
          {agenda.map((item) => (
            <Card
              bg="light"
              key={item.id_agenda}
              text="dark"
              style={{ width: "100%" }}
              className="mb-2"
            >
              <Card.Header>{item.tanggal.split("T")[0]}</Card.Header>
              <Card.Body>
                <Card.Text>{item.keterangan}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </FullHeight>
  );
};

export default Agenda;
