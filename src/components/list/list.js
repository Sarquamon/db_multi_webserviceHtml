import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";

const webServiceAPI = "https://webserviceapidbmulti.herokuapp.com/";

export const List = () => {
  const history = useHistory();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    listAllUsers();
  }, [users]);

  const deleteUser = userEmail => {
    axios.delete(`${webServiceAPI}user/${userEmail}`);
  };

  const listAllUsers = () => {
    axios
      .get(`${webServiceAPI}user/all`)
      .then(result => {
        setUsers(result.data.content);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="col-md-10 offset-md-1 mt-5">
        <div className="jumbotron">
          <h1 className="display-4">Lista de usuarios</h1>
          <p className="lead font-italic">CRUD</p>
          <hr className="my-4" />

          <table className="table table-borderless">
            <thead className="border-bottom font-weight-bold">
              <tr>
                <td>Email:</td>
                <td>Nombre:</td>
                <td>
                  <button
                    onClick={() => {
                      history.push("/");
                      window.location.reload();
                    }}
                    className="btn btn-outline-success"
                  >
                    Añadir nuevo
                  </button>
                </td>
              </tr>
            </thead>
            <tbody>
              {users.map(user => {
                return (
                  <tr key={user.Email}>
                    <td>{user.Email}</td>
                    <td>{user.Name}</td>
                    <td>
                      <Link
                        to={{
                          pathname: `/update/${user.Email}`,
                          state: { userEmail: user.Email, userName: user.Name }
                        }}
                        className="btn btn-warning text secondary px-0"
                      >
                        Editar
                      </Link>
                      <button
                        onClick={() => deleteUser(user.Email)}
                        className="btn btn-danger"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default List;
