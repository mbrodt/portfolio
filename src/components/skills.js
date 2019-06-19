import React from 'react'
import Tippy from '@tippy.js/react'

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
import SectionHeading from './UI/SectionHeading'

const Skills = () => {
  console.log('running tippy')
  return (
    <section id="skills" data-aos="fade-right">
      <SectionHeading>Skills</SectionHeading>
      <div className="bg-indigo-1000 full-width py-10 sm:py-20 px-6 sm:px-10 flex justify-center flex-wrap ">
        <Skill tooltip="HTML5" icon={HTMLSkill} />
        <Skill tooltip="CSS3" icon={CSSSkill} />
        <Skill tooltip="JavaScript" icon={JS} />
        <Skill tooltip="Vue" icon={Vue} />
        <Skill tooltip="React" icon={ReactSkill} />
        <Skill tooltip="Gatsby" icon={Gatsby} />
        <Skill tooltip="Tailwind" icon={Tailwind} />
        <Skill tooltip="GitHub" icon={GitHub} />
        <Skill tooltip="Git" icon={Git} />
        <Skill tooltip="Terminal" icon={Terminal} />
        <Skill tooltip="Linux" icon={Linux} />
        <Skill tooltip="Webpack" icon={Webpack} />
      </div>
    </section>
  )
}

const Skill = ({ tooltip, icon }) => (
  <Tippy
    className="font-sans mb-4"
    content={tooltip}
    placement="top"
    animation="shift-toward"
  >
    <img
      className="m-6 h-16 opacity-25 hover:opacity-100 skill-transition"
      src={icon}
      alt=""
    />
  </Tippy>
)

export default Skills
