// src/pages/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted', formData);
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  return (
    <main className="container my-5">
      <h2 className="about-title text-center">Contact Me</h2>
      <form className="contact-form mx-auto" style={{ maxWidth: '600px' }} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" required value={formData.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" required value={formData.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="4" required value={formData.message} onChange={handleChange}></textarea>
        </div>
        <button type="submit" className="btn btn-submit">Submit</button>
      </form>
    </main>
  );
};

export default Contact;
