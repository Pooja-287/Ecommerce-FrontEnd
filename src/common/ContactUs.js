import React, { useState } from 'react';


const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been submitted!');
    // You can send formData to your server or API here.
  };

  return (
    <div className="contact-us-container">
      <header className="contact-header">
        <h1>Contact Us</h1>
      </header>

      {/* Contact Information Section */}
      <section className="contact-info">
        <h2>Organic Dog Treats Inc.</h2>
        <p>331 Katpadii, Vellore District </p>
        <p>Email: <a href="mailto:info@herodogtreats.com">pooja28vdl@gmail.com</a></p>
        <p>Main Line: <a href="tel:+19059889666">1-905-988-9666</a></p>
        <p>Toll-Free: <a href="tel:+18558454376">1-855-845-HERO (4376)</a></p>
        <p>Fax: <a href="tel:+18662260563">1-866-226-0563</a></p>

        <h3>Hours of Operation</h3>
        <ul>
          <li>Monday – Friday: 9am – 5pm</li>
          <li>Saturday – CLOSED</li>
          <li>Sunday – CLOSED</li>
        </ul>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form">
        <h2>Contact Hero Dog Treats</h2>
        <p>Please fill out the form below, and we’ll respond to your questions/comments forthwith. Your feedback is greatly appreciated.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name *</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Comment or Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </section>


    

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2024 HeroDogTreats™. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactUs;
