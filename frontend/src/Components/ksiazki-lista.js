import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

const KsiazkiLista = () => {
  const [ksiazki, setKsiazki] = useState([]);

  useEffect(() => {
    axios
      .get("https://wolnelektury.pl/api/books/")
      .then(({ data }) => {
        setKsiazki(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const pokazKsiazki = () => {
    return ksiazki.map((ksiazki) => {
      return ksiazki.kind;
    });
  };

  const ksiazkiall = pokazKsiazki();

  console.log(ksiazkiall);
  return (
    <div className="table-wrapper ksiazki">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Tytuł</th>
            <th>Autor</th>
            <th>Gatunek </th>
            <th>Rodzaj Literacki</th>
          </tr>
        </thead>
        <tbody>
          {ksiazki.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>{item.genre}</td>
              <td>{item.kind}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default KsiazkiLista;
