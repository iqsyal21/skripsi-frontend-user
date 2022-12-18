import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const DetailWarga = (props) => {
  const [dataWarga, setDataWarga] = useState([]);
  const getDataWarga = () => {
    axios
      .get(props.link + "/warga/" + props.idWarga, props.config)
      .then((res) => {
        setDataWarga(res.data);
      });
  };
  useEffect(() => {
    getDataWarga();
  }, []);

  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title>Detail Data Warga</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table bordered striped="columns">
          <tbody>
            <tr>
              <Row>
                <Col sm={4}>
                  <td>NIK</td>
                </Col>
                <Col sm={8}>
                  <td>: {dataWarga.nik}</td>
                </Col>
              </Row>
            </tr>
            <tr>
              <Row>
                <Col sm={4}>
                  <td>Nama Lengkap</td>
                </Col>
                <Col sm={8}>
                  <td>: {dataWarga.nama_lengkap}</td>
                </Col>
              </Row>
            </tr>
            <tr>
              <Row>
                <Col sm={4}>
                  <td>Tempat Tanggal Lahir</td>
                </Col>
                <Col sm={8}>
                  <td>: {dataWarga.tempat_tanggal_lahir}</td>
                </Col>
              </Row>
            </tr>
            <tr>
              <Row>
                <Col sm={4}>
                  <td>Alamat</td>
                </Col>
                <Col sm={8}>
                  <td>: {dataWarga.alamat}</td>
                </Col>
              </Row>
            </tr>
            <tr>
              <Row>
                <Col sm={4}>
                  <td>Jenis Kelamin</td>
                </Col>
                <Col sm={8}>
                  <td>: {dataWarga.jenis_kelamin}</td>
                </Col>
              </Row>
            </tr>
            <tr>
              <Row>
                <Col sm={4}>
                  <td>Status Covid19</td>
                </Col>
                <Col sm={8}>
                  {dataWarga.status_covid19 === true ? (
                    <td>: Positif</td>
                  ) : (
                    <td>: Negatif</td>
                  )}
                </Col>
              </Row>
            </tr>
            <tr>
              <Row>
                <Col sm={4}>
                  <td>Donor Plasma</td>
                </Col>
                <Col sm={8}>
                  {dataWarga.donor_plasma === true ? (
                    <td>: Diizinkan</td>
                  ) : (
                    <td>: Tidak Diizinkan</td>
                  )}
                </Col>
              </Row>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
    </div>
  );
};

export default DetailWarga;
