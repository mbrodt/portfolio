import React from 'react'

const Contact = () => (
  <section id="contact">
    <div className="container">
      <form
        name="contact"
        method="POST"
        className="mx-auto text-center flex flex-col max-w-sm bg-white shadow-lg rounded-lg py-8"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <h2 className="mb-6">Get in touch</h2>
        <p className="mb-6">
          Freelance status:
          <span className="bg-green-light text-white mx-2 p-2 rounded-lg">
            Available
          </span>
        </p>
        <input
          className="input-field border-b border-indigo mb-2 w-4/5 mx-auto h-12 px-4"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
        />
        <input
          className="input-field border-b border-indigo mb-2 w-4/5 mx-auto h-12 px-4"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
        />
        <textarea
          rows="3"
          className="input-field border-b border-indigo mb-2 w-4/5 mx-auto h-auto py-3 px-4"
          id="message"
          name="message"
          placeholder="Message"
        />
        <button className="bg-indigo w-4/5 mx-auto text-xl text-white rounded-lg font-bold py-2 h-12">
          Send message
        </button>
      </form>
    </div>
  </section>
)

export default Contact
