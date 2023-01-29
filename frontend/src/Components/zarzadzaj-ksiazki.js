import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import KsiazkaTableRow from "./table-ksiazka";

const KsiazkiList = () => {
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

  const DataTable = () => {
    return ksiazki.map((res, i) => {
      return <KsiazkaTableRow obj={res} key={i} />;
    });
  };

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
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};

export default KsiazkiList;
