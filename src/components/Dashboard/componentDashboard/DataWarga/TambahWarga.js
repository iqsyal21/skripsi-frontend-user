import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

const TambahWarga = (props) => {
  const { register, handleSubmit } = useForm();

  // post tambah data warga
  const tambahWarga = (data) => {
    axios
      .post(props.link + "/warga", data, props.config)
      .then((response) => {
        alert(response.msg);
        window.location.reload();
      })
      .catch((error) => {
        alert(error.msg);
      });
  };
  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title>Form Tambah Data Warga</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(tambahWarga)}>
          <Form.Group className="mb-3" controlId="nik">
            <Form.Label>NIK</Form.Label>
            <Form.Control
              type="text"
              {...register("nik", { required: true })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="nama">
            <Form.Label>Nama Lengkap</Form.Label>
            <Form.Control
              type="text"
              {...register("nama", { required: true })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="ttl">
            <Form.Label>Tempat Tanggal Lahir</Form.Label>
            <Form.Control
              type="text"
              {...register("ttl", { required: true })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="alamat">
            <Form.Label>Alamat</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              {...register("alamat", { required: true })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="kelamin">
            <Form.Label>Jenis Kelamin : </Form.Label>
            <div key={`inline-radio`} className="mb-3">
              <Form.Check
                inline
                label="Laki-laki"
                value="Laki-laki"
                type="radio"
                {...register("kelamin", { required: true })}
              />
              <Form.Check
                inline
                label="Perempuan"
                value="Perempuan"
                type="radio"
                {...register("kelamin", { required: true })}
              />
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="statcov">
            <Form.Label>Status Covid19 : </Form.Label>
            <div key={`inline-radio`} className="mb-3">
              <Form.Check
                inline
                label="Positif"
                value={true}
                type="radio"
                {...register("statcov", { required: true })}
              />
              <Form.Check
                inline
                label="Negatif"
                value={false}
                type="radio"
                {...register("statcov", { required: true })}
              />
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="donor">
            <Form.Label>Status Donor Plasma : </Form.Label>
            <div key={`inline-radio`} className="mb-3">
              <Form.Check
                inline
                label="Diizinkan"
                value={true}
                type="radio"
                {...register("donor", { required: true })}
              />
              <Form.Check
                inline
                label="Tidak Diizinkan"
                value={false}
                type="radio"
                {...register("donor", { required: true })}
              />
            </div>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </div>
  );
};

export default TambahWarga;
