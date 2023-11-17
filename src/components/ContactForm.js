import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
  const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  const [errorMessage, setErrorMessage] = useState('')
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .matches(/^[A-Za-z]+$/, 'The name can only contain letters')
        .required('Name is required'),
      email: Yup.string()
        .matches(emailRegEx, 'Invalid email format')
        .required('Email is required'),
      message: Yup.string().required('Message is required'),
    }),

    onSubmit: async (values, { setStatus }) => {
      try {
        const response = await fetch(
          'https://win23-assignment.azurewebsites.net/api/contactform',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          }
        )

        switch (response.status) {
          case 200:
            setStatus('Message sent successfully')
            setSubmitted(true);
            console.log(response.status)
            break;
          case 400:
            setErrorMessage('Invalid form data, please try again.')
            console.log(response.status)
            break;
          default:
            console.log(response.status)
        }
      } catch (error) {
        console.error(error);
        setErrorMessage('An error occurred, please try again later.');
      }
    },
  })

  return (
    <section className="message-form">
      <div className="container">
        <h2>Leave us a message<br />for any information.</h2>
        {submitted ? (
          <>
            <div className="submission-message">
              <p>{formik.status}</p>
              <button className="btn-yellow" onClick={() => {formik.resetForm();setSubmitted(false);}}>
                Return to Form
              </button>
            </div>
          </>
        ) : (
          <>
            <form id="messageForm" onSubmit={formik.handleSubmit} noValidate>
            <div className="mb-3 mt-4">
                  <input
                    className="form-input"
                    type="text"
                    id="name"
                    name="name"
                    title="Name"
                    placeholder="Name*"
                    tabIndex="1"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <div className="error-message">{formik.errors.name}</div>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    className="form-input"
                    type="email"
                    id="email"
                    name="email"
                    title="Email"
                    placeholder="Email*"
                    tabIndex="2"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="error-message">{formik.errors.email}</div>
                  )}
                </div>
                <div className="mb-5">
                  <textarea
                    className="form-input"
                    id="message"
                    name="message"
                    title="Message"
                    placeholder="Your Message*"
                    tabIndex="3"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></textarea>
                  {formik.touched.message && formik.errors.message && (
                    <div className="error-message">{formik.errors.message}</div>
                  )}
                </div>
                <div className="d-grid">
                  <button className="btn-yellow" type="submit" disabled={formik.isSubmitting}>
                    Send Message <ion-icon id="arrow" name="arrow-forward-outline"></ion-icon>
                  </button>
                </div>
              </form>
              </>
              )}
        </div>
    </section>
  )
}

export default ContactForm