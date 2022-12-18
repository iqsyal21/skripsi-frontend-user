import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import TambahJadwal from "./TambahJadwal";
import EditJadwal from "./EditJadwal";

const JadwalVaksinasi = () => {
  // config headers
  const url = "http://localhost:5000/api";
  let token = sessionStorage.getItem("token");
  let config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  // state modals tambah
  const [showTambahJadwal, setShowTambahJadwal] = useState(false);
  const handleCloseTambahJadwal = () => setShowTambahJadwal(false);
  const handleShowTambahJadwal = () => setShowTambahJadwal(true);

  // state modals edit
  const [showEditJadwal, setShowEditJadwal] = useState(false);
  const [editIdJadwal, setEditIdJadwal] = useState("");
  const handleCloseEdit = () => {
    setEditIdJadwal("");
    setShowEditJadwal(false);
  };
  const handleShowEdit = (id) => {
    setEditIdJadwal(id);
    setShowEditJadwal(true);
  };

  // get data jadwal vaksinasi
  const [stokVaksin, setStokVaksin] = useState([]);
  const [jadwalVaksinasi, setJadwalVaksinasi] = useState([]);
  const getJadwal = () => {
    axios.get(url + "/stok", config).then((res) => {
      setStokVaksin(res.data);
    });

    axios.get(url + "/jadwal", config).then((res) => {
      setJadwalVaksinasi(res.data);
    });
  };
  useEffect(() => {
    getJadwal();
  }, []);

  // hapus jadwal
  const hapusJadwal = (id) => {
    axios
      .delete(url + "/jadwal/" + id, config)
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
      <Modal show={showTambahJadwal} onHide={handleCloseTambahJadwal}>
        <TambahJadwal link={url} token={token} stokvaksin={stokVaksin} />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseTambahJadwal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* endmodal tambah*/}
      {/* modal edit */}
      <Modal show={showEditJadwal} onHide={handleCloseEdit}>
        <EditJadwal link={url} idJadwal={editIdJadwal} token={token} stokvaksin={stokVaksin} />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* endmodal edit*/}
      <div className="container-content__headingadd">
        <h3>Tambah Jadwal Vaksinasi</h3>
        <Button variant="primary" onClick={handleShowTambahJadwal}>
          Tambah
        </Button>
      </div>
      <hr />
      <br />
      <h3>List Jadwal Vaksinasi</h3>
      <hr />
      <Table bordered hover className="text-center">
        <thead className="table-primary">
          <tr>
            <th>No</th>
            <th>Tanggal Vaksinasi</th>
            <th>Nama Jenis Vaksin</th>
            <th>Kuota</th>
            <th>Keterangan</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {jadwalVaksinasi.map((item) => (
            <tr key={item.id_jadwal_vaksinasi}>
              <td>{no++}</td>
              <td>{item.tanggal_vaksinasi.split("T")[0]}</td>
              {item.stokvaksin ? (
                <td>{item.stokvaksin.nama_jenis_vaksin}</td>
              ) : (
                <td>data tidak sesuai, segera update atau hapus</td>
              )}
              {item.stokvaksin ? (
                <td>
                  {item.stokvaksin.jumlah_stok -
                    item.stokvaksin.jumlah_digunakan}
                </td>
              ) : (
                <td>data tidak sesuai, segera update atau hapus</td>
              )}
              <td>{item.keterangan}</td>
              <td>
                <Button
                  variant="warning"
                  className="mx-2"
                  onClick={() => handleShowEdit(item.id_jadwal_vaksinasi)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => hapusJadwal(item.id_jadwal_vaksinasi)}
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

export default JadwalVaksinasi;
