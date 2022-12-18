import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

const EditArtikel = (props) => {
  const { register, handleSubmit } = useForm();

  // edit artikel
  const editArtikel = (data) => {
    const formData = new FormData();
    formData.append("judul", data.judul);
    formData.append("deskripsi", data.deskripsi);
    formData.append("gambar", data.gambar[0]);

    fetch(props.link + "api/artikel/" + props.idArtikel, {
      method: "PUT",
      body: formData,
      headers: {
        Authorization: "Bearer " + props.token,
      },
    })
      .then((res) => res.json())
      .then((resjson) => {
        alert(resjson.msg);
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title>Form Edit Artikel</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(editArtikel)}>
          <Form.Group className="mb-3" controlId="judul">
            <Form.Label>Judul</Form.Label>
            <Form.Control
              type="text"
              {...register("judul", { required: true })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="deskripsi">
            <Form.Label>Deskripsi Artikel</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              {...register("deskripsi", { required: true })}
            />
          </Form.Group>
          <Form.Group controlId="gambar" className="mb-3">
            <Form.Label>Gambar Artikel (Opsional)</Form.Label>
            <Form.Control
              type="file"
              {...register("gambar", {
                required: true,
                onChange: props.handleChangeImage,
              })}
            />
            {props.previewImage !== null ? (
              <img
                src={props.previewImage}
                alt="preview gambar artikel"
                className="preview-artikelimg"
              />
            ) : (
              ""
            )}
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </div>
  );
};

export default EditArtikel;
