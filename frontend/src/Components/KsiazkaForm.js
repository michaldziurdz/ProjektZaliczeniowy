import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";

const KsiazkaForm = (props) => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Wymagane"),
    author: Yup.string().required("Wymagane"),
    genre: Yup.string().required("Wymagane"),
    kind: Yup.string().required("Wymagane"),
  });
  console.log(props);
  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <FormGroup>
            <Field
              name="title"
              placeholder="Tytuł"
              type="text"
              className="form-control"
            />
            <ErrorMessage
              name="author"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <br></br>

          <FormGroup>
            <Field
              name="author"
              placeholder="Autor"
              type="text"
              className="form-control"
            />
            <ErrorMessage
              name="author"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <br></br>
          <FormGroup>
            <Field
              placeholder="Gatunek"
              name="genre"
              type="text"
              className="form-control"
            />
            <ErrorMessage
              name="genre"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <br></br>

          <FormGroup>
            <Field
              name="kind"
              placeholder="Rodzaj Literacki"
              type="text"
              className="form-control"
            />
            <ErrorMessage
              name="kind"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <br></br>
          <Button variant="primary" size="lg" block="block" type="submit">
            {props.children}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default KsiazkaForm;
