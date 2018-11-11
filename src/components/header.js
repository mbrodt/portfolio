import React from 'react'
import { TwitterIcon, GithubIcon, LinkedinIcon } from './svgIcons'

const Header = () => (
  <nav className="bg-grey-lighter fixed top pin-t pin-l border-b-2 border-grey-light w-full py-4">
    <ul className="container mx-auto flex justify-between items-center">
      <a
        href="/"
        className="flex items-center no-underline text-grey-darkest font-bold"
      >
        <img
          className="w-8 mr-4"
          src={require(`../assets/devicon.svg`)}
          alt=""
        />
        <span className="text-xl">Mads Brodt</span>
      </a>
      <div className="">
        <a className="p-2" href="https://twitter.com/madsbrodt" target="_blank">
          <TwitterIcon className="w-6" fill="grey-darker" />
        </a>
        <a className="p-2" href="https://github.com/mbrodt" target="_blank">
          <GithubIcon className="w-6" fill="grey-darker" />
        </a>
        {/* For some reason the linkedin svg breaks if its a react component, so the fill is hardcoded into the svg */}
        <a
          className="p-2"
          href="https://www.linkedin.com/in/mads-brodt-nielsen-a35874152/"
          target="_blank"
        >
          <img className="w-6" src={require(`../assets/linkedin.svg`)} alt="" />
        </a>
      </div>
    </ul>
  </nav>
)

export default Header
