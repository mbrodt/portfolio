import React from 'react'

const Contact = () => (
  <section id="contact">
    <div className="container">
      <form netlify method="POST" className="contact-form">
        <h2>Get in touch</h2>
        <div className="line" />
        <p>
          Freelance status:
          <span className="status">Available</span>
        </p>
        <input
          className="input-field"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
        />
        <input
          className="input-field"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
        />
        <textarea
          rows="3"
          className="input-field message-area"
          id="message"
          name="message"
          placeholder="Message"
        />
        <button className="btn success-btn">SEND MESSAGE</button>
      </form>
    </div>
  </section>
)

export default Contact
