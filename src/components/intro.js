import React from 'react'
import profile from '../assets/profileround.jpg'

const Intro = () => (
  <section id="home">
    <div
      id="intro-container"
      className="container"
      style={{ display: 'flex', alignItems: 'center' }}
    >
      <div style={{ width: '80%', textAlign: 'center' }}>
        <img src={profile} className="profile-pic" alt="" />
      </div>
      <div className="intro-text-container" style={{ width: '80%' }}>
        <h1 className="role-text">
          Front-End <span className="orange">Developer</span>
        </h1>
        <p className="">
          Hey! My name is Mads Brodt, and I’m a front-end developer living in
          Denmark. Have a look around my website, and don’t hesitate to get in
          contact if you have any question
          <b className="orange">.</b>
        </p>
      </div>
    </div>
  </section>
)

export default Intro
