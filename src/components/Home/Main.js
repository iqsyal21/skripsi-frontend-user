import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import doctor from "../../assets/images/doctor.svg";
import time from "../../assets/images/time.svg";
import review from "../../assets/images/review.svg";
import reading from "../../assets/images/reading.svg";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Main = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="container-main">
      <div className="mainbox-1">
        <Container>
          <div data-aos="fade-right" data-aos-duration="1300" data-aos-offset="300" className="mainbox-1_content">
            <h2>
              Vaksinasi Covid-19 <br /> Puskesmas Cilebut
            </h2>
            <p>
              Daftarkan diri anda untuk mendapatkan vaksinasi di Puskesmas
              Cilebut
            </p>
            <Button variant="light">Daftar</Button>
          </div>
          <div data-aos="fade-up" data-aos-duration="1300" data-aos-offset="300" className="mainbox-1_image">
            <Image src={doctor} alt="logo doctor" fluid />
          </div>
        </Container>
      </div>
      <div className="mainbox-2">
        <Container>
          <div data-aos="fade-down" data-aos-duration="1300" data-aos-offset="300" className="mainbox-2_image">
            <Image src={time} alt="logo doctor" fluid />
          </div>
          <div data-aos="fade-left" data-aos-duration="1300" data-aos-offset="300" className="mainbox-2_content">
            <h2>Jadwal Fleksibel</h2>
            <p>
              Memilih jadwal vaksinasi yang sesuai dengan waktu luang anda.
              Setiap jadwal memiliki kuota yang berbeda, ambil jadwal yang anda
              inginkan sebelum kuota terpenuhi
            </p>
            <Button variant="light">Daftar</Button>
          </div>
        </Container>
      </div>
      <div className="mainbox-3">
        <Container>
          <div data-aos="fade-right" data-aos-duration="1300" data-aos-offset="300" className="mainbox-3_content">
            <h2>Antrian Fleksibel</h2>
            <p>
              Nomor antrian diberikan langsung setelah daftar online. Anda
              tinggal menyesuikan waktu kedatangan ke puskesmas agar bisa
              mendapatkan vaksin tanpa perlu mengantri terlalu lama
            </p>
            <Button variant="light">Daftar</Button>
          </div>
          <div data-aos="fade-up" data-aos-duration="1300" data-aos-offset="300" className="mainbox-3_image">
            <Image src={review} alt="logo doctor" fluid />
          </div>
        </Container>
      </div>
      <div className="mainbox-4">
        <Container>
          <div data-aos="fade-down" data-aos-duration="1300" data-aos-offset="300" className="mainbox-4_image">
            <Image src={reading} alt="logo doctor" fluid />
          </div>
          <div data-aos="fade-left" data-aos-duration="1300" data-aos-offset="300" className="mainbox-4_content">
            <h2>Update Informasi</h2>
            <p>
              Dapatkan informasi terbaru seputar covid-19 dan agenda kegiatan
              puskesmas dengan lebih jelas dan lengkap. Informai yang disediakan
              di website ini langsung dibuat oleh tim kami, jadi anda tidak
              perlu khawatir akan hox dan informasi palsu lainnya
            </p>
            <Button variant="outline-primary">Artikel</Button>
            <Button variant="outline-info">Agenda</Button>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
