import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import TambahArtikel from "./TambahArtikel";
import EditArtikel from "./EditArtikel";

const Artikel = () => {
  const url = "http://localhost:5000/";
  let token = sessionStorage.getItem("token");
  let config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  // state modals tambah
  const [previewImage, setPreviewImage] = useState(null);
  const [showTambahArtikel, setShowTambahArtikel] = useState(false);
  const handleCloseTambahArtikel = () => {
    setShowTambahArtikel(false);
    setPreviewImage(null);
  };
  const handleShowTambahArtikel = () => setShowTambahArtikel(true);

  // state modals edit
  const [showEditArtikel, setShowEditArtikel] = useState(false);
  const [editIdArtikel, setEditIdArtikel] = useState(null);
  const handleCloseEdit = () => {
    setEditIdArtikel("");
    setShowEditArtikel(false);
    setPreviewImage(null);
  };
  const handleShowEdit = (id) => {
    setEditIdArtikel(id);
    setShowEditArtikel(true);
  };

  // get data artikel
  const [artikel, setArtikel] = useState([]);
  const getArtikel = () => {
    axios.get(url + "api/artikel", config).then((res) => {
      setArtikel(res.data);
    });
  };
  useEffect(() => {
    getArtikel();
  }, []);

  // preview image
  const handleChangeImage = (e) => {
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
  };

  // hapus artikel
  const hapusArtikel = (id) => {
    axios
      .delete(url + "api/artikel/" + id, config)
      .then((response) => {
        alert(response.msg);
        window.location.reload();
      })
      .catch((error) => {
        alert(error.msg);
      });
  };

  let no = 1;

  return (
    <div className="container-content">
      {/* modal tambah*/}
      <Modal show={showTambahArtikel} onHide={handleCloseTambahArtikel}>
        <TambahArtikel
          link={url}
          token={token}
          previewImage={previewImage}
          handleChangeImage={handleChangeImage}
        />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseTambahArtikel}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* endmodal tambah*/}

      {/* modal edit*/}
      <Modal show={showEditArtikel} onHide={handleCloseEdit}>
        <EditArtikel
          link={url}
          token={token}
          idArtikel={editIdArtikel}
          previewImage={previewImage}
          handleChangeImage={handleChangeImage}
        />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseTambahArtikel}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* endmodal edit*/}
      <div className="container-content__headingadd">
        <h3>Tambah Artikel</h3>
        <Button variant="primary" onClick={handleShowTambahArtikel}>
          Tambah
        </Button>
      </div>
      <hr />
      <br />
      <h3>List Artikel</h3>
      <hr />
      <Table bordered hover className="text-center">
        <thead className="table-primary">
          <tr>
            <th>no</th>
            <th>gambar</th>
            <th>Judul</th>
            <th>Deskripsi</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {artikel.map((item) => (
            <tr key={item.id_artikel}>
              <td>{no++}</td>
              <td>
                <img
                  src={url + item.gambar}
                  alt={item.judul}
                  className="listartikel-thumbnail"
                />
              </td>
              <td>{item.judul}</td>
              <td>{item.deskripsi}</td>
              <td>
                <Button
                  variant="warning"
                  className="mx-2"
                  onClick={() => handleShowEdit(item.id_artikel)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => hapusArtikel(item.id_artikel)}
                >
                  Hapus
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Artikel;
