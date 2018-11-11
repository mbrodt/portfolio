import React from 'react'
import profile from '../assets/profileround.jpg'

import { Image, Transformation, CloudinaryContext } from 'cloudinary-react'

const Intro = () => (
  <section id="home" className="container flex mb-20 pt-32">
    {/* <img
        src="https://res.cloudinary.com/dnbiaqcir/image/upload/c_scale,w_300/v1541261196/profileround.jpg"
        className="rounded-full shadow-lg w-1/3 mb-0"
        alt=""
      /> */}
    <div className="intro-text-container w-4/5">
      <h1 className="mb-8">
        Front-End <span className="text-indigo">Developer</span>
      </h1>
      <p className="leading-normal mb-8 text-xl">
        Hey! My name is Mads Brodt, and I’m a front-end developer living in
        Denmark. I love technology, learning and helping others. I always strive
        to create high quality products, and prioritize clear and fast
        communication.
      </p>
      <p className="leading-normal text-xl">
        Have a look around my website, and don’t hesitate to get in contact if
        you have any questions.
      </p>
    </div>
  </section>
)

export default Intro
