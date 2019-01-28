import React from 'react'

const Contact = () => (
  <section id="contact" data-aos="fade-up" data-aos-delay="200">
    <div className="container">
      <form
        name="contact"
        method="POST"
        className="mx-auto text-center flex flex-col max-w-xs px-4 sm:px-0"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <h2 className="mb-8">Get in touch</h2>
        <p className="mb-8">
          Freelance status:
          <span className="bg-green-lighter text-green-darker font-bold rounded-full mx-2 py-2 px-4 text-sm">
            Available
          </span>
        </p>
        <input
          className="input-field border-b-2 border-indigo mb-2  h-12 px-4 bg-grey-lighter "
          type="text"
          id="name"
          name="name"
          placeholder="Name"
        />
        <input
          className="input-field border-b-2 border-indigo mb-2  h-12 px-4 bg-grey-lighter"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
        />
        <textarea
          rows="3"
          className="input-field border-b-2 border-indigo mb-2  h-auto py-3 px-4 bg-grey-lighter"
          id="message"
          name="message"
          placeholder="Message"
        />
        <button className="bg-indigo w-2/5 text-md text-white rounded-lg p-2 sm:p-3  self-end hover:bg-indigo-dark">
          Send message
        </button>
      </form>
    </div>
  </section>
)

export default Contact
