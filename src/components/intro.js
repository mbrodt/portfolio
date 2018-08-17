import React from 'react'
import profile from '../assets/profile.png'

const Intro = () => (
  <section id="home">
    <div
      className="container"
      style={{ display: 'flex', alignItems: 'center' }}
    >
      <div style={{ width: '50%', textAlign: 'center' }}>
        <img src={profile} className="profile-pic" alt="" />
      </div>
      <div style={{ width: '50%' }}>
        <h1 className="role-text">
          Front-End <span className="orange">Developer</span>
        </h1>
        <p className="">
          Hey! My name is Mads Brodt, and I’m a front-end developer/designer
          living in Denmark. Have a look around my website, and don’t hesitate
          to get in contact if you have any question
          <b className="orange">.</b>
        </p>
      </div>
    </div>
  </section>
)

export default Intro
