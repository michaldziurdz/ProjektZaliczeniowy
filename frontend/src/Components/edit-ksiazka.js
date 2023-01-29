// EditKsiazka Component for update Ksiazka data

// Import Modules
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import KsiazkaForm from "./KsiazkaForm";

// EditKsiazka Component
const EditKsiazka = () => {
  let params = useParams();
  let _id = params.id;
  let navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    title: "",
    author: "",
    genre: "",
    kind: "",
  });

  //onSubmit handler
  const onSubmit = (ksiazkaObject) => {
    axios
      .put("http://localhost:4000/ksiazki/update-ksiazka/" + _id, ksiazkaObject)
      .then((res) => {
        if (res.status === 200) {
          alert("Zaktualizowania ksiazke");
          navigate("/ksiazki-list");
        } else Promise.reject();
      })
      .catch((err) => alert("Cos poszlo nie tak"));
  };

  // Load data from server and reinitialize Ksiazka form
  useEffect(() => {
    axios
      .get("http://localhost:4000/Ksiazkas/update-Ksiazka/" + _id)
      .then((res) => {
        const { title, author, genre, kind } = res.data;
        setFormValues({ title, author, genre, kind });
      })
      .catch((err) => console.log(err));
  }, [_id]);

  // Return Ksiazka form
  return (
    <KsiazkaForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Edytuj Ksiazke
    </KsiazkaForm>
  );
};

// Export EditKsiazka Component
export default EditKsiazka;
