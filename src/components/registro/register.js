import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import "./loginRegister.css";
import RegisterForm from "./registerForm/registerForm";

const webServiceAPI = "https://webserviceapidbmulti.herokuapp.com/";

export const Register = () => {
  const history = useHistory();

  const register = e => {
    e.preventDefault();

    const useremail = e.target.elements.userEmail.value;
    const username = e.target.elements.userName.value;

    axios
      .post(`${webServiceAPI}user/signup`, {
        userEmail: useremail,
        userName: username
      })
      .then(result => {
        history.push("/list");
        window.location.reload();
        alert("Usuario creado!");
      })
      .catch(err => {
        console.log(err);

        alert("Email ya tomado!");
      });
  };

  return (
    <div className="container justify-content-around form">
      <div className="row">
        <div className={`col-lg-12`}>
          <RegisterForm register={register} />
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-lg-12 text-center">
          <div className="btn-group">
            <button
              className={`btn btn-outline-primary btn-lg`}
              onClick={() => {
                history.push("/list");
              }}
            >
              Ver lista de usuarios
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
