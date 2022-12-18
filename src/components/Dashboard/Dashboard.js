import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Sidebar";
import "./dashboard.css";
import NavbarAdmin from "./NavbarAdmin";
import Agenda from "./componentDashboard/Agenda/Agenda";
import Artikel from "./componentDashboard/Artikel/Artikel";
import StokVaksin from "./componentDashboard/StokVaksin/StokVaksin";
import JadwalVaksinasi from "./componentDashboard/JadwalVaksinasi/JadwalVaksinasi";
import DataWarga from "./componentDashboard/DataWarga/DataWarga";

const Dashboard = () => {
  // config headers
  const url = "http://localhost:5000/api/admin/token";
  let token = sessionStorage.getItem("token");
  let config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  const history = useHistory();
  const [statusToken, setStatusToken] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get(url, config)
        .then((res) => {
          setStatusToken(true);
        })
        .catch((error) => {
          clearInterval(interval);
          setStatusToken(false);
          sessionStorage.removeItem("token");
          history.push("/akun");
          window.location.reload();
        });
    }, 10000);
  });

  const sessionToken = sessionStorage.getItem("token");

  if (sessionToken == undefined || statusToken == false) {
    history.push("/akun");
  }

  return (
    <div>
      <div className="container-dashboard">
        <div className="container-sidebar">
          <h2>Dashboard</h2>
          <Sidebar />
        </div>
        <div className="container-contentdashboard">
        <NavbarAdmin />
        <Route exact path="/dashboard" component={Agenda} />
        <Route path="/dashboard/agenda" component={Agenda} />
        <Route path="/dashboard/artikel" component={Artikel} />
        <Route path="/dashboard/stok" component={StokVaksin} />
        <Route path="/dashboard/jadwal" component={JadwalVaksinasi} />
        <Route path="/dashboard/warga" component={DataWarga} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
