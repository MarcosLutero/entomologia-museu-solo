import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

import "./FormAddCharacteristics.css";

const FormAddCharacteristics = ({ content }) => {
  const initialValues = {
    nome: "",
    TaxonomiaId: "",
  };

  const [valores, setValores] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/taxonomia/options").then((res) => {
      setValores(res.data);
    });
  }, []);

  const validationSchema = Yup.object().shape({
    nome: Yup.string().required("Esse valor não pode ser vazio!"),
    TaxonomiaId: Yup.string(), //aqui pode ser um option
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/taxonomia", data).then((response) => {
      console.log(response);
    });
  };

  return (
    <>
      <h1>{content}</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            <label className="mb-1" >Nome da Taxonomia</label>
            <ErrorMessage name="nome" component="span" />
            <Field className="form-control mb-3" name="nome" placeholder="Ex: Reino" />
            <label className="mb-1">Nome do Pai</label>
            <ErrorMessage name="TaxonomiaId" component="span" />

            <Field className='form-select mb-3' as="select" name="TaxonomiaId">
              {valores.map((value, key) => {
                return (
                  <option key={key} value={value.value.toString()}>
                    {value.label}
                  </option>
                );
              })}
            </Field>
            <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Fechar
                </button>
                <button type="submit" className="btn btn-primary">
                  Salvar
                </button>
              </div>
            {/* <button className="form-button" type="submit">Adicionar/Editar</button> */}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormAddCharacteristics;
