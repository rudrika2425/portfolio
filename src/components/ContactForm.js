import React, { useState } from 'react';
import './ContactFormStyle.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm({ id }) {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://sheetdb.io/api/v1/0y1fxrrvoa92t', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([formData])  // Wrap formData in an array
      });

      if (!response.ok) {
        const errorData = await response.text();  
        throw new Error(`Network response was not ok: ${errorData}`);
      }

      toast.success('Form submitted successfully. Thank you!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      
      setFormData({ name: '', contact: '', email: '', message: '' });  // Clear the form
    } catch (error) {
      toast.error(`Failed to submit the form. Please try again. ${error.message}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.error('Error:', error);
    }
  };

  return (
    <div className='contact-window' id={id}>
      <h1>Have a vision? </h1>
      <p>I have the skills. Drop a line and let’s make it happen!</p>
      <div className="contact-container">
        <form onSubmit={handleFormSubmit} className="contact-wrapper-right">
          <input
            id='name'
            type="text"
            name="name"
            placeholder='Full Name'
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            id='contact'
            type="text"
            name="contact"
            placeholder='Contact Number'
            value={formData.contact}
            onChange={handleChange}
            required
          />
          <input
            id='email'
            type="email"
            name="email"
            placeholder='Email ID'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            id='message'
            name="message"
            rows='5'
            placeholder='Share your thoughts; they’re the spark that ignites our innovation.'
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button className='btn' id='submitBtn' type="submit">Send Message</button>
          <ToastContainer />
        </form>
      </div>
    </div>
  )
}
