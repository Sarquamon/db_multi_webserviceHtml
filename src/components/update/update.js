import React from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

const webServiceAPI = "https://webserviceapidbmulti.herokuapp.com/";

const Update = props => {
  const history = useHistory();
  const userEmail = props.location.state.userEmail;
  const userName = props.location.state.userName;

  const updateUser = e => {
    e.preventDefault();
    // console.log(e.target.elements.newUserName.value);

    const newUserName = e.target.elements.newUserName.value;

    Axios.put(`${webServiceAPI}user/${userEmail}/${newUserName}`)
      .then(result => {
        console.log(`Exito! ${result}`);
        alert(`Se actualizo el usuario ${userEmail}`);
        history.push("/list");
        window.location.reload();
      })
      .catch(err => {
        console.log(`Error! ${err}`);
      });
  };

  return (
    <div className="container">
      <div className="col-md-10 offset-md-1 mt-5">
        <div className="jumbotron">
          <h1 className="display-4">Actualizar usuario</h1>
          <p className="lead font-italic">{userEmail}</p>
          <hr className="my-4" />

          <form onSubmit={updateUser}>
            <table className="table table-borderless">
              <thead className="border-bottom font-weight-bold">
                <tr>
                  <td>Nombre antiguo:</td>
                  <td>Nombre nuevo:</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{userName}</td>
                  <td>
                    <input
                      name="newUserName"
                      id="newUserName"
                      type="text"
                      placeholder="Ingrese el nuevo nombre"
                    />
                  </td>
                  <td>
                    <button
                      type="submit"
                      //   onClick={e => {
                      //     updateUser(e);
                      //   }}
                      className="btn btn-outline-success"
                    >
                      Guardar
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
