import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const FormDaftar = () => {
  // config headers
  const url = "http://localhost:5000/api";
  let token = sessionStorage.getItem("token");
  let config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    axios
      .post(url + "/pendaftaran", data, config)
      .then((response) => {
        alert(response.msg);
        history.push("/");
      })
      .catch((error) => {
        alert(error.msg);
      });
  };

  const [jadwalVaksinasi, setJadwalVaksinasi] = useState([]);
  const getJadwal = () => {
    axios.get(url + "/jadwal", config).then((res) => {
      setJadwalVaksinasi(res.data);
    });
  };
  useEffect(() => {
    getJadwal();
  }, []);

  return (
    <Container>
      <br /> <br />
      <Card>
        <Card.Header as="h3">Form Pendaftaran Vaksinasi</Card.Header>
        <Card.Body className="card-body-costume">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <br />
            <Form.Group className="mb-2" controlId="nik">
              <Form.Label>NIK</Form.Label>
              <Form.Control
                type="text"
                {...register("nik", { required: true })}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="profesi">
              <Form.Label>Profesi</Form.Label>
              <Form.Control
                type="text"
                {...register("profesi", { required: true })}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="telepon">
              <Form.Label>Telepon</Form.Label>
              <Form.Control
                type="text"
                {...register("telepon", { required: true })}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="idJadwal">
              <Form.Label>Jadwal Vaksinasi</Form.Label>
              <Form.Select
                className="select-vaksin-text"
                {...register("idJadwal", { required: true })}
              >
                {jadwalVaksinasi.map((item) => (
                  <option
                    key={item.id_jadwal_vaksinasi}
                    value={item.id_jadwal_vaksinasi}
                  >
                    {item.tanggal_vaksinasi.split("T")[0]} -{" "}
                    {item.stokvaksin.nama_jenis_vaksin} ({item.keterangan})
                    kuota{" "}
                    {item.stokvaksin.jumlah_stok -
                      item.stokvaksin.jumlah_digunakan}{" "}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <br />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default FormDaftar;
