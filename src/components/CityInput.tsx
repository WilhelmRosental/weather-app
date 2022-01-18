import React from 'react';
import {Field, Form, Formik, ErrorMessage} from "formik";
import * as Yup from "yup";

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
        <div className="input-form card p-2 w-25">
            <Formik
                initialValues={values}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                <Form>
                    <label htmlFor="city">Entrez le nom d'une ville : </label>
                    <Field id="city" name="city" />
                    <button className="btn btn-primary" type="submit">Submit</button>
                    <ErrorMessage name="city"/>
                </Form>
            </Formik>
        </div>
    );
};

export default CityInput;