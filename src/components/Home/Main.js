import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import doctor from "../../assets/images/doctor.svg";
import time from "../../assets/images/time.svg";
import review from "../../assets/images/review.svg";
import reading from "../../assets/images/reading.svg";
import { useHistory } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Main = (props) => {
  const history = useHistory();

  const toArtikel = () => {
    history.push("/#artikel");
    props.ubahState(2);
  };

  const toAgenda = () => {
    history.push("/#agenda");
    props.ubahState(3);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="container-main">
      <div className="mainbox-1">
        <Container>
          <div
            data-aos="zoom-in"
            data-aos-duration="1300"
            data-aos-offset="300"
            className="mainbox-1_content"
          >
            <h2>
              Vaksinasi Covid-19 <br /> Puskesmas Cilebut
            </h2>
            <p>
              Daftarkan diri anda untuk mendapatkan vaksinasi di Puskesmas
              Cilebut
            </p>
            <Button variant="light" onClick={() => history.push("/akun")}>Login / Buat Akun</Button>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1300"
            data-aos-offset="300"
            className="mainbox-1_image"
          >
            <Image src={doctor} alt="gambar dokter" fluid />
          </div>
        </Container>
      </div>
      <div className="mainbox-2">
        <Container>
          <div
            data-aos="fade-down"
            data-aos-duration="1300"
            data-aos-offset="300"
            className="mainbox-2_image"
          >
            <Image src={time} alt="gambar jam timer" fluid />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1300"
            data-aos-offset="300"
            className="mainbox-2_content"
          >
            <h2>Jadwal Fleksibel</h2>
            <p>
              Memilih jadwal vaksinasi yang sesuai dengan waktu luang anda.
              Setiap jadwal memiliki kuota yang berbeda, ambil jadwal yang anda
              inginkan sebelum kuota terpenuhi
            </p>
            <Button variant="light" onClick={() => history.push("/vaksinasi")}>Daftar Vaksinasi</Button>
          </div>
        </Container>
      </div>
      <div className="mainbox-3">
        <Container>
          <div
            data-aos="fade-right"
            data-aos-duration="1300"
            data-aos-offset="300"
            className="mainbox-3_content"
          >
            <h2>Antrian Fleksibel</h2>
            <p>
              Nomor antrian diberikan langsung setelah daftar online. Anda
              tinggal menyesuaikan waktu kedatangan ke puskesmas agar bisa
              mendapatkan vaksin tanpa perlu mengantri terlalu lama
            </p>
            <Button variant="light" onClick={() => history.push("/vaksinasi")}>Daftar Vaksinasi</Button>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1300"
            data-aos-offset="300"
            className="mainbox-3_image"
          >
            <Image src={review} alt="gambar 2 orang duduk di 1 meja" fluid />
          </div>
        </Container>
      </div>
      <div className="mainbox-4">
        <Container>
          <div
            data-aos="fade-down"
            data-aos-duration="1300"
            data-aos-offset="300"
            className="mainbox-4_image"
          >
            <Image src={reading} alt="gambar reading" fluid />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1300"
            data-aos-offset="300"
            className="mainbox-4_content"
          >
            <h2>Update Informasi</h2>
            <p>
              Dapatkan informasi terbaru seputar covid-19 dan agenda kegiatan
              puskesmas dengan lebih jelas dan lengkap. Informasi yang
              disediakan di website ini langsung dibuat oleh tim kami, jadi anda
              tidak perlu khawatir akan hoax dan informasi palsu lainnya
            </p>
            <Button variant="outline-primary" onClick={() => toArtikel()}>
              Artikel
            </Button>
            <Button variant="outline-info" onClick={() => toAgenda()}>
              Agenda
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Main;
