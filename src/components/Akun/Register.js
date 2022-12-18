import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import undraw_register from "../../assets/images/undraw_register.svg";
import FullHeight from "react-full-height";

const Register = (props) => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onRegister = (data) => {
    axios
      .post("http://localhost:5000/api/user/register", data)
      .then((response) => {
        alert(response.msg)
        sessionStorage.setItem("idUser", response.id);
        history.push("/verifikasi");
      })
      .catch((error) => {
        alert(error.msg);
      });
  };

  return (
    <FullHeight startWidth={1024}>
      <div className="bg-container-akun">
        <div className="container-register">
          <div className="box-form-register">
            <Form onSubmit={handleSubmit(onRegister)}>
              <h2 className="text-center mb-2">Form Register</h2>
              <br />
              <Form.Group className="mb-2">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  {...register("username", { required: true })}
                />
              </Form.Group>
              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  {...register("email", { required: true })}
                />
              </Form.Group>
              <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  {...register("password", { required: true })}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Register
              </Button>
            </Form>
            <div className="text-center mt-4">
              <p>
                sudah punya akun ?{" "}
                <span onClick={() => props.ubahState(true)}>login</span>
              </p>
              <p>
                <a href="/">kembali ke halaman utama</a>
              </p>
            </div>
          </div>
          <div className="box-form-img-register">
            <div className="img-box-flex">
              <Image src={undraw_register} alt="logo register" fluid />
            </div>
          </div>
        </div>
      </div>
    </FullHeight>
  );
};

export default Register;
