import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

const NaszeKsiazki = () => {
  const [ksiazki, setKsiazki] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/ksiazki/")
      .then(({ data }) => {
        setKsiazki(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="table-wrapper">
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

export default NaszeKsiazki;
