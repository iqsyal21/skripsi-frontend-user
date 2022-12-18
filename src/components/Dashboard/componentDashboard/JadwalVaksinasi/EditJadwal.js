import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

const EditJadwal = (props) => {
  const { register, handleSubmit } = useForm();

  // edit jadwal
  const editJadwal = (data) => {
    // cek validasi tanggal
    const localDate = new Date().toISOString().split("T")[0];
    if (data.tanggal < localDate) {
      return alert("tanggal tidak sesuai, sudah terlewati");
    }

    const formData = new FormData();
    formData.append("idstok", data.idstok.split(" ")[0]);
    formData.append("keterangan", data.keterangan);
    formData.append("tanggal", data.tanggal);

    // ini bisa jalan, value form data bisa didapat oleh server. kalo pke axios masih error
    fetch(props.link + "/jadwal/" + props.idJadwal, {
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
        <Modal.Title>Form Edit Jadwal Vaksinasi</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(editJadwal)}>
          <Form.Group className="mb-3">
            <Form.Label>Pilih Vaksin</Form.Label>
            <Form.Select {...register("idstok", { required: true })}>
              {props.stokvaksin.map((item) => (
                <option key={item.id_stok_vaksin}>
                  {item.id_stok_vaksin} = {item.nama_jenis_vaksin} - stok
                  {" : "}
                  {item.jumlah_stok}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="keterangan">
            <Form.Label>Keterangan</Form.Label>
            <Form.Control
              type="text"
              {...register("keterangan", { required: true })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="tangal">
            <Form.Label>Tanggal Vaksinasi</Form.Label>
            <Form.Control
              type="date"
              {...register("tanggal", { required: true })}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </div>
  );
};

export default EditJadwal;
