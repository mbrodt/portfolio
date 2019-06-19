import React from 'react'
import { TwitterIcon, GithubIcon, LinkedinIcon } from './svgIcons'

const Header = () => (
  <nav className="bg-gray-100 fixed top-0 left-0 shadow w-full py-4 z-10">
    <ul className="container mx-auto flex justify-between items-center mb-0">
      <a
        href="/"
        className="ml-4 lg:ml-0  flex items-center no-underline font-bold"
      >
        <img
          className="w-6 mr-2 sm:w-8 sm:mr-4 mb-0"
          src={require(`../assets/devicon.svg`)}
          alt=""
        />
        <span className="text-lg sm:text-xl">Mads Brodt</span>
      </a>
      <div className="flex items-center mr-4 lg:mr-0">
        <a
          className="rounded p-2 hover:bg-gray-300 link-hover-transition"
          href="https://twitter.com/madsbrodt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon className="w-5 sm:w-6 text-gray-500 fill-current" />
        </a>
        <a
          className="rounded p-2 hover:bg-gray-300 link-hover-transition"
          href="https://github.com/mbrodt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon className="w-5 sm:w-6 text-gray-500 fill-current" />
        </a>
        {/* For some reason the linkedin svg breaks if its a react component, so the fill is hardcoded into the svg */}
        <a
          className="rounded p-2 hover:bg-gray-300 link-hover-transition"
          href="https://www.linkedin.com/in/mads-brodt-nielsen-a35874152/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon className="w-5 sm:w-6 text-gray-500 fill-current" />
        </a>
      </div>
    </ul>
  </nav>
)

export default Header
