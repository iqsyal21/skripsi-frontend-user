import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import TambahAgenda from "./TambahAgenda";
import EditAgenda from "./EditAgenda";

const Agenda = () => {
  // config headers
  const url = "http://localhost:5000/api";
  let token = sessionStorage.getItem("token");
  let config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  // state modals tambah
  const [showTambahAgenda, setShowTambahAgenda] = useState(false);
  const handleCloseTambahAgenda = () => setShowTambahAgenda(false);
  const handleShowTambahAgenda = () => setShowTambahAgenda(true);

  // state modals edit
  const [showEditAgenda, setShowEditAgenda] = useState(false);
  const [editIdAgenda, setEditIdAgenda] = useState(null);
  const handleCloseEdit = () => {
    setEditIdAgenda("");
    setShowEditAgenda(false);
  };
  const handleShowEdit = (id) => {
    setEditIdAgenda(id);
    setShowEditAgenda(true);
  };

  // get data agenda
  const [agenda, setAgenda] = useState([]);
  const getAgenda = () => {
    axios.get(url + "/agenda", config).then((res) => {
      setAgenda(res.data);
    });
  };
  useEffect(() => {
    getAgenda();
  }, []);

  // hapus agenda
  const hapusAgenda = (id) => {
    axios
      .delete(url + "/agenda/" + id, config)
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
      <Modal show={showTambahAgenda} onHide={handleCloseTambahAgenda}>
        <TambahAgenda link={url} config={config} />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseTambahAgenda}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* endmodal tambah*/}

      {/* modal edit */}
      <Modal show={showEditAgenda} onHide={handleCloseEdit}>
        <EditAgenda link={url} idAgenda={editIdAgenda} config={config} />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* end modal edit */}

      <div className="container-content__headingadd">
        <h3>Tambah Agenda</h3>
        <Button variant="primary" onClick={handleShowTambahAgenda}>
          Tambah
        </Button>
      </div>
      <hr />
      <br />
      <h3>List Agenda</h3>
      <hr />
      <Table bordered hover className="text-center">
        <thead className="table-primary">
          <tr>
            <th>No</th>
            <th>Tanggal</th>
            <th>Keterangan</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {agenda.map((item) => (
            <tr key={item.id_agenda}>
              <td>{no++}</td>
              <td>{item.tanggal.split("T")[0]}</td>
              <td>{item.keterangan}</td>
              <td>
                <Button
                  variant="warning"
                  className="mx-2"
                  onClick={() => handleShowEdit(item.id_agenda)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => hapusAgenda(item.id_agenda)}
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

export default Agenda;
