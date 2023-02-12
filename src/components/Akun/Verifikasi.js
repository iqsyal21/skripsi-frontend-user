import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./Akun.css";
import Card from "react-bootstrap/Card";
import FullHeight from "react-full-height";

const Verifikasi = () => {
  const [state, setState] = useState(0);
  const history = useHistory();

  const idUser = sessionStorage.getItem("idUser");

  const setKode = (event) => {
    const value = event.target.value;
    setState(value.length + 1);

    if (state === 6) {
      axios
        .post("http://localhost:5000/api/user/verify/" + idUser, {kode: value})
        .then((response) => {
          alert(response.msg);
          history.push("/akun");
        })
        .catch((error) => {
          alert(error.msg);
        });
    }
  };

  const getKode = () => {
    axios
      .get("http://localhost:5000/api/user/verify/" + idUser)
      .then((response) => {
        alert(response.msg);
      })
      .catch((error) => {
        alert(error.msg);
      });
  };

  return (
    <FullHeight>
      <div className="bg-container-akun">
        <div className="container-verify">
          <Card className="text-center">
            <Card.Header className="text-white bg-primary">
              Verifikasi
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Masukkan kode verifikasi pada kolom berikut
                <div className="form-verifikasi">
                  <input type="text" name="kode" onChange={setKode} />
                </div>
                <br />
                <div>
                  <p>
                    kode tidak ada ? <span onClick={getKode}>kirim ulang kode</span>
                  </p>
                  <p>
                    <span onClick={() => history.push("/akun")}>kembali ke halaman login</span>
                  </p>
                </div>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">copyright@2022</Card.Footer>
          </Card>
        </div>
      </div>
    </FullHeight>
  );
};

export default Verifikasi;
