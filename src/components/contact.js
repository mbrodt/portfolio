import React from 'react'
import SectionHeading from './UI/SectionHeading'

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
        <SectionHeading>Get in touch</SectionHeading>
        <p className="mb-8">
          Freelance status:
          <span className="bg-green-200 text-green-900 font-bold rounded-full mx-2 py-2 px-4 text-sm">
            Available
          </span>
        </p>
        <input
          className="input-field border-b-2 border-indigo-500 mb-2  h-12 px-4 bg-gray-100 "
          type="text"
          id="name"
          name="name"
          placeholder="Name"
        />
        <input
          className="input-field border-b-2 border-indigo-500 mb-2  h-12 px-4 bg-gray-100"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
        />
        <textarea
          rows="3"
          className="input-field border-b-2 border-indigo-500 mb-2  h-auto py-3 px-4 bg-gray-100"
          id="message"
          name="message"
          placeholder="Message"
        />
        <button className="bg-indigo-500 w-2/5 text-md text-white rounded-lg p-2  self-end hover:bg-indigo-700">
          Send message
        </button>
      </form>
    </div>
  </section>
)

export default Contact
