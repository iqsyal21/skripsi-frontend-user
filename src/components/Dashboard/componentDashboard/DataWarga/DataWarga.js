import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import EditWarga from "./EditWarga";
import TambahWarga from "./TambahWarga";
import DetailWarga from "./DetailWarga";

const DataWarga = () => {
  // config headers
  const url = "http://localhost:5000/api";
  let token = sessionStorage.getItem("token");
  let config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  // state modals tambah
  const [showTambahWarga, setShowTambahWarga] = useState(false);
  const handleCloseTambahWarga = () => setShowTambahWarga(false);
  const handleShowTambahWarga = () => setShowTambahWarga(true);

  // state modals edit
  const [showEditWarga, setShowEditWarga] = useState(false);
  const [editIdWarga, setEditIdWarga] = useState(null);
  const handleCloseEditWarga = () => {
    setEditIdWarga("");
    setShowEditWarga(false);
  };
  const handleShowEditWarga = (id) => {
    setEditIdWarga(id);
    setShowEditWarga(true);
  };

  // state modal detail
  const [showDetailWarga, setShowDetailWarga] = useState(false);
  const [detailIdWarga, setDetailIdWarga] = useState(null);
  const handleCloseDetailWarga = () => {
    setDetailIdWarga("");
    setShowDetailWarga(false);
  }
  const handleShowDetailWarga = (id) => {
    setDetailIdWarga(id);
    setShowDetailWarga(true);
  }

  // get data warga
  const [dataWarga, setDataWarga] = useState([]);
  const getDataWarga = () => {
    axios.get(url + "/warga", config).then((res) => {
      setDataWarga(res.data);
    });
  };
  useEffect(() => {
    getDataWarga();
  }, []);

  // hapus data warga
  const hapusWarga = (id) => {
    axios
      .delete(url + "/warga/" + id, config)
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
      <div className="container-content__headingadd">
        {/* modal tambah*/}
        <Modal show={showTambahWarga} onHide={handleCloseTambahWarga}>
          <TambahWarga link={url} config={config} />
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseTambahWarga}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        {/* endmodal tambah*/}

        {/* modal edit */}
        <Modal show={showEditWarga} onHide={handleCloseEditWarga}>
          <EditWarga link={url} idWarga={editIdWarga} config={config} />
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEditWarga}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        {/* end modal edit */}

        {/* modal detail */}
        <Modal show={showDetailWarga} onHide={handleCloseDetailWarga}>
          <DetailWarga link={url} idWarga={detailIdWarga} config={config} />
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseDetailWarga}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        {/* end modal detail */}
        <h3>Tambah Data Warga</h3>
        <Button variant="primary" onClick={handleShowTambahWarga}>
          Tambah
        </Button>
      </div>
      <hr />
      <br />
      <h3>List Data Warga</h3>
      <hr />
      <Table bordered hover className="text-center">
        <thead className="table-primary">
          <tr>
            <th>No</th>
            <th>NIK</th>
            <th>Nama Lengkap</th>
            <th>Alamat</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {dataWarga.map((item) => (
            <tr key={item.id_data_warga}>
              <td>{no++}</td>
              <td>{item.nik}</td>
              <td>{item.nama_lengkap}</td>
              <td>{item.alamat}</td>
              <td>
                <Button
                  variant="primary"
                  className="mx-2"
                  onClick={() => handleShowDetailWarga(item.id_data_warga)}
                >
                  Detail
                </Button>
                <Button
                  variant="warning"
                  className="mx-2"
                  onClick={() => handleShowEditWarga(item.id_data_warga)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => hapusWarga(item.id_data_warga)}
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

export default DataWarga;
