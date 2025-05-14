
// src/components/ContactForm/ContactForm.jsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';

const ContactForm = ({ onAdd }) => {
  const initialValues = { name: '', number: '' };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Must be min 3 chars')
      .max(50, 'Must be max 50 chars')
      .required('This field is required'),
    number: Yup.string()
      .min(3, 'Must be min 3 chars')
      .max(50, 'Must be max 50 chars')
      .required('This field is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newContact = { id: nanoid(), ...values };
    onAdd(newContact);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className={styles.form}>
        <label>
          Name
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </label>
        <label>
          Number
          <Field name="number" type="text" />
          <ErrorMessage name="number" component="div" className={styles.error} />
        </label>
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

