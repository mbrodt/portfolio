import React from 'react'
import profile from '../assets/profileround.jpg'

import { Image, Transformation, CloudinaryContext } from 'cloudinary-react'

const Intro = () => (
  <section id="home">
    <div
      id="intro-container"
      className="container"
      style={{ display: 'flex', alignItems: 'center' }}
    >
      <div style={{ width: '80%', textAlign: 'center' }}>
        <img
          src="https://res.cloudinary.com/dnbiaqcir/image/upload/c_scale,w_300/v1541261196/profileround.jpg"
          className="profile-pic"
          alt=""
        />
      </div>
      <div className="intro-text-container" style={{ width: '80%' }}>
        <h1 className="role-text">
          Front-End <span className="orange">Developer</span>
        </h1>
        <p className="">
          Hey! My name is Mads Brodt, and I’m a front-end developer living in
          Denmark. I love technology, learning and helping others. I always
          strive to create high quality products, and prioritize clear and fast
          communication. Have a look around my website, and don’t hesitate to
          get in contact if you have any questions
          <b className="orange">.</b>
        </p>
      </div>
    </div>
  </section>
)

export default Intro
