import React from 'react';
import {Field, Form, Formik, ErrorMessage} from "formik";
import * as Yup from "yup";
import logo from '../assets/weather-logo.png';

const CityInput = ({onSearch = (city : string) => {}}) => {
    interface Values {
        city: string;
    }

    const values : Values = {
        city: ''
    }

    //Retrieves weather infos of the city by submitting the form
    const onSubmit = async (values: Values) => {
        onSearch(values.city);
    }

    const validationSchema = Yup.object({
        city: Yup.string()
            .required("Ce champ ne peut être vide !")
            .min(2, "Le nom de la ville doit avoir plus d'un caractère !")
            .max(60, "Le nom de la ville doit avoir moins de 60 caractères !")
    })

    return (
        <div className="input-form card d-flex flex-column align-items-center p-2 w-25">
            <img className="weather-logo mb-3" src={logo}></img>
            <Formik
                initialValues={values}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                <Form className="d-flex flex-column">
                    <label className="mb-1" htmlFor="city">Entrez le nom d'une ville : </label>
                    <Field className="mb-1" id="city" name="city" />
                    <ErrorMessage className="error-msg" name="city"/>
                    <button className="btn btn-primary mt-3" type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
};

export default CityInput;