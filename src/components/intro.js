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
        {/* <img
          src="https://res.cloudinary.com/dnbiaqcir/image/upload/v1541257535/newprofile.jpg"
          className="profile-pic"
          alt=""
        /> */}

        <Image
          className="profile-pic"
          cloudName="dnbiaqcir"
          publicId="profileround"
          width="300"
          crop="scale"
        >
          {/* <Transformation radius="max" /> */}
        </Image>
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
