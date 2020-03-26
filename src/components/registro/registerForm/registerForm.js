import React from "react";

const RegisterForm = props => {
  return (
    <div>
      <h1 className="loginRegisterTitle">Registro nuevo usuario</h1>

      <form onSubmit={props.register}>
        <div className="field-wrap">
          <label>
            <span className="req">* </span>Correo electrónico:
          </label>
          <input type="email" name="userEmail" id="emailUserRe" required />
        </div>
        <div className="field-wrap">
          <label>
            <span className="req">* </span>Nombre:
          </label>
          <input type="text" name="userName" id="userNameRe" required />
        </div>
        <button type="submit" className="button button-block">
          Registrar usuario
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
