import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const KsiazkaTableRow = (props) => {
  const { _id, title, author, genre, kind } = props.obj;

  const deleteKsiazka = () => {
    axios
      .delete("http://localhost:4000/ksiazki/delete-ksiazka/" + _id)
      .then((res) => {
        if (res.status === 200) {
          alert("Usunięto ksiązkę!");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => alert("Coś poszło nie tak!"));
  };

  return (
    <tr>
      <td>{title}</td>
      <td>{author}</td>
      <td>{genre}</td>
      <td>{kind} </td>
      <td>
        <Link className="edit-link" to={"/edit-ksiazka/" + _id}>
          Edytuj
        </Link>
        <Button onClick={deleteKsiazka} size="sm" variant="danger">
          Usuń
        </Button>
      </td>
    </tr>
  );
};

export default KsiazkaTableRow;
