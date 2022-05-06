import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik"

const FormAddCharacteristics = ({content}) => {
    const initialValues = {
        title: "",
        postText: "",
        
    }


    return ( <>
        <h1>{content}</h1>
        <Formik>
            <Form>
                <label htmlFor="">Nome da Taxonomia</label>
                <Field id="inputNomeTaxonomia" name="nomeTaxinomia" placeholder="Ex: Reino"/>
                <label htmlFor="">Nome do Pai</label>
                <Field id="inputNomePaiTaxonomia" name="nomePaiTaxinomia" placeholder={`Ex: "Classe" tem pai "Reino"`}/>
            
                <button type='submit' >Adicionar/Editar</button>
            </Form>
        </Formik>
    </> );
}
 
export default FormAddCharacteristics;