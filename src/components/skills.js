import React from 'react'

import Vue from '../assets/vue.svg'
import GitHub from '../assets/github.svg'
import Terminal from '../assets/devicon.svg'
import JS from '../assets/js.svg'
import Tailwind from '../assets/tailwind.svg'
import ReactSkill from '../assets/react.png'
import Webpack from '../assets/webpack.svg'
import HTMLSkill from '../assets/html.svg'
import CSSSkill from '../assets/css.svg'
import Linux from '../assets/linux.svg'
import Git from '../assets/git.svg'
import Gatsby from '../assets/gatsby.png'

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="text-center mb-8">Skills</h2>
      <div className="bg-indigo-darkest full-width py-10 sm:py-20 px-6 sm:px-10 flex justify-center flex-wrap ">
        <Skill skill={HTMLSkill} />
        <Skill skill={CSSSkill} />
        <Skill skill={JS} />
        <Skill skill={Vue} />
        <Skill skill={ReactSkill} />
        <Skill skill={Gatsby} />
        <Skill skill={Tailwind} />
        <Skill skill={GitHub} />
        <Skill skill={Git} />
        <Skill skill={Terminal} />
        <Skill skill={Linux} />
        <Skill skill={Webpack} />
      </div>
    </section>
  )
}

const Skill = ({ skill }) => (
  <img className="m-6 h-16 opacity-25 hover:opacity-100 skill-transition" src={skill} alt="" />
)

export default Skills
