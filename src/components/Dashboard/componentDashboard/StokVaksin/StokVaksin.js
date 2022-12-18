import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import TambahStok from "./TambahStok";
import EditStok from "./EditStok";

const StokVaksin = () => {
  // config headers
  const url = "http://localhost:5000/api";
  let token = sessionStorage.getItem("token");
  let config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  // state modals tambah
  const [showTambahStok, setShowTambahStok] = useState(false);
  const handleCloseTambahStok = () => setShowTambahStok(false);
  const handleShowTambahStok = () => setShowTambahStok(true);

  // state modals edit
  const [showEditStok, setShowEditStok] = useState(false);
  const [editIdStok, setEditIdStok] = useState("");
  const handleCloseEdit = () => {
    setEditIdStok("");
    setShowEditStok(false);
  };
  const handleShowEdit = (id) => {
    setEditIdStok(id);
    setShowEditStok(true);
  };

  // get data stok vaksin
  const [stokVaksin, setStokVaksin] = useState([]);
  const getStok = () => {
    axios.get(url + "/stok", config).then((res) => {
      setStokVaksin(res.data);
    });
  };
  useEffect(() => {
    getStok();
  }, []);

  // hapus stok vaksin
  const hapusStok = (id) => {
    axios
      .delete(url + "/stok/" + id, config)
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
      <Modal show={showTambahStok} onHide={handleCloseTambahStok}>
        <TambahStok link={url} config={config} />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseTambahStok}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* endmodal tambah*/}

      {/* modal edit */}
      <Modal show={showEditStok} onHide={handleCloseEdit} link={url} config={config}>
        <EditStok link={url} idArtikel={editIdStok} config={config} />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* endmodal edit */}

      <div className="container-content__headingadd">
        <h3>Tambah Stok Vaksin</h3>
        <Button variant="primary" onClick={handleShowTambahStok}>
          Tambah
        </Button>
      </div>
      <hr />
      <br />
      <h3>List Stok Vaksin</h3>
      <hr />
      <Table bordered hover className="text-center">
        <thead className="table-primary">
          <tr>
            <th>No</th>
            <th>Tanggal Masuk</th>
            <th>Nama Jenis Vaksin</th>
            <th>Jumlah Stok</th>
            <th>Jumlah Digunakan</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {stokVaksin.map((item) => (
            <tr key={item.id_stok_vaksin}>
              <td>{no++}</td>
              <td>{item.tanggal_masuk.split("T")[0]}</td>
              <td>{item.nama_jenis_vaksin}</td>
              <td>{item.jumlah_stok}</td>
              <td>{item.jumlah_digunakan}</td>
              <td>
                <Button
                  variant="warning"
                  className="mx-2"
                  onClick={() => handleShowEdit(item.id_stok_vaksin)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => hapusStok(item.id_stok_vaksin)}
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

export default StokVaksin;
