import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import FullHeight from "react-full-height";

// api https://data.covid19.go.id/public/api/update.json
const Artikel = () => {
  const history = useHistory();

  const url = "http://localhost:5000/";

  // get data update covid19 public api
  const [dataCovid, setDataCovid] = useState([]);
  const [tanggalUpdate, setTanggalUpdate] = useState([]);
  const getDataCovid = () => {
    axios
      .get("https://apicovid19indonesia-v2.vercel.app/api/indonesia")
      .then((res) => {
        setDataCovid(res);
        setTanggalUpdate(res.lastUpdate.split("T")[0]);
      });
  };

  // get detail artikel
  const [detailArtikel, setDetailArtikel] = useState([]);
  const getDetailArtikel = (idArtikel) => {
    axios.get(url + "api/artikel/" + idArtikel).then((res) => {
      setDetailArtikel(res.data);
    });
    handleShow();
  };
  const [fullscreen, setFullscreen] = useState(false);
  const [show, setShow] = useState(false);

  function handleShow() {
    setFullscreen(true);
    setShow(true);
  }

  // get data artikel
  const [artikel, setArtikel] = useState([]);
  const getArtikel = () => {
    axios.get(url + "api/artikel").then((res) => {
      setArtikel(res.data);
    });
  };

  useEffect(() => {
    getArtikel();
    getDataCovid();
  }, []);

  return (
    <div>
      <FullHeight canExceed>
        <div className="container-info">
          <br />
          <Container>
            <h2>Info Kasus Covid-19 Indonesia</h2>
            <h4>
              update tanggal{" "}
              {tanggalUpdate === (undefined || null)
                ? "server error"
                : tanggalUpdate}
            </h4>
            <div className="container-card-counter">
              <Card>
                <Card.Body>
                  {" "}
                  <h5>Jumlah Positif</h5>{" "}
                  {dataCovid.positif === (undefined || null)
                    ? "server error"
                    : dataCovid.positif}
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  {" "}
                  <h5>Jumlah Dirawat</h5>{" "}
                  {dataCovid.dirawat === (undefined || null)
                    ? "server error"
                    : dataCovid.dirawat}
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  {" "}
                  <h5>Jumlah Sembuh </h5>{" "}
                  {dataCovid.sembuh === (undefined || null)
                    ? "server error"
                    : dataCovid.sembuh}
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  {" "}
                  <h5>Jumlah Meninggal</h5>{" "}
                  {dataCovid.meninggal === (undefined || null)
                    ? "server error"
                    : dataCovid.meninggal}
                </Card.Body>
              </Card>
            </div>
          </Container>
        </div>
        <Container>
          <div className="container-artikel">
            {artikel.map((item) => (
              <Card style={{ width: "100%" }} key={item.id_artikel}>
                <Card.Img
                  variant="top"
                  src={url + item.gambar}
                  alt={item.judul}
                />
                <Card.Body>
                  <Card.Title>{item.judul}</Card.Title>
                  <Card.Text className="content-deskripsi">
                    {item.deskripsi}
                  </Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => getDetailArtikel(item.id_artikel)}
                  >
                    Detail
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Container>
        <Modal
          show={show}
          fullscreen={fullscreen}
          onHide={() => setShow(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>{detailArtikel.judul}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="content-detail">
            <Image
              src={url + detailArtikel.gambar}
              alt={detailArtikel.judul}
              className="image-detail"
            />{" "}
            <br /> <br />
            <p>{detailArtikel.deskripsi}</p>
            <p>{detailArtikel.deskripsi}</p>
            <p>{detailArtikel.deskripsi}</p>
            <p className="d-flex justify-content-end">
              diupdate pada tanggal ({" "}
              {detailArtikel.updatedAt === (null || undefined)
                ? ""
                : detailArtikel.updatedAt.split("T")[0]}{" "}
              )
            </p>
          </Modal.Body>
        </Modal>
      </FullHeight>
    </div>
  );
};

export default Artikel;
