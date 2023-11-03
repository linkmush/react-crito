import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [nameError, setNameError] = useState('');
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }

  const isNameValid = (name) => {
    const nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(name)) {
      setNameError('The name can only contain letters');
      return false;
    } else {
      setNameError('');
      return true;
    }
  }

  const handleNameChange = (e) => {
    setFormData({ ...formData, name: e.target.value });
  }

  const handleEmailChange = (e) => {
    setFormData({ ...formData, email: e.target.value });
  }

  const handleMessageChange = (e) => {
    setFormData({ ...formData, message: e.target.value });
  }

  const handleReturnToForm = () => {
    setFormSubmitted(false);
    setFormData({
      name: '',
      email: '',
      message: '',
    })
    setSubmissionMessage('');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Submit button clicked');

    if (!isNameValid(formData.name) || !isEmailValid(formData.email)) {
      setSubmissionMessage('Invalid form data, please try again.')
      setFormSubmitted(true);
      return;
    }

    try {
      const response = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('HTTP Status:', response.status);

      if (response.status === 200) {
        const successMessage = 'Message sent successfully';
        setSubmissionMessage(successMessage);
        setFormSubmitted(true);
      } else if (response.status === 400) {
        const errorMessage = 'Invalid form data, please try again.';
        setSubmissionMessage(errorMessage);
        setFormSubmitted(true);
      }
    } catch (error) {
      const errorMessage = 'An error occurred, please try again later.';
      setSubmissionMessage(errorMessage);
      setFormSubmitted(true);
      console.error(errorMessage);
    }
  }
  return (
    <section className="message-form">
      <div className="container">
        <h2>Leave us a message<br />for any information.</h2>
        {formSubmitted && submissionMessage === 'Message sent successfully' ? (
          <div className="submission-message">
            {submissionMessage}
            <button className="btn-yellow" onClick={handleReturnToForm}>
              Return to Form
            </button>
          </div>
        ) : (
          <form id="messageForm" method="post" onSubmit={handleSubmit}>
            <div className="mb-3 mt-4">
              <input
                className="form-input"
                type="text"
                id="name"
                name="name"
                title="Name"
                placeholder="Name*"
                tabIndex="1"
                value={formData.name}
                onChange={handleNameChange}
              />
              <div className="error-message">{nameError}</div>
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
                value={formData.email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="mb-5">
              <textarea
                className="form-input"
                id="message"
                name="message"
                title="Message"
                placeholder="Your Message*"
                tabIndex="3"
                value={formData.message}
                onChange={handleMessageChange}
              ></textarea>
            </div>
            <div className="d-grid">
              <button className="btn-yellow" type="submit">
                Send Message <ion-icon id="arrow" name="arrow-forward-outline"></ion-icon>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}

export default ContactForm