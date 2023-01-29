// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import KsiazkaForm from "./KsiazkaForm";

// CreateKsiazka Component
const CreateKsiazka = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    rollno: "",
  });
  // onSubmit handler
  const onSubmit = (ksiazka) => {
    axios
      .post("http://localhost:4000/ksiazki/create-ksiazka", ksiazka)
      .then((res) => {
        if (res.status === 200) alert("Dodano ksiązkę!");
        else Promise.reject();
      })
      .catch((err) => alert("Coś poszło nie tak!"));
  };

  // Return book form
  return (
    <KsiazkaForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Dodaj ksiązke
    </KsiazkaForm>
  );
};

// Export Create Book` Component
export default CreateKsiazka;
