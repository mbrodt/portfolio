import React from 'react'
import { TwitterIcon, GithubIcon } from './svgIcons'

const Header = () => (
  <nav className="bg-grey-lighter fixed top pin-t pin-l shadow w-full py-4">
    <ul className="container mx-auto flex justify-between items-center mb-0">
      <a
        href="/"
        className="ml-4 lg:ml-0  flex items-center no-underline text-grey-darkest font-bold"
      >
        <img
          className="w-6 mr-2 sm:w-8 sm:mr-4 mb-0"
          src={require(`../assets/devicon.svg`)}
          alt=""
        />
        <span className="text-lg sm:text-xl">Mads Brodt</span>
      </a>
      <div className="mr-4 lg:mr-0">
        <a
          className="p-2 hover:bg-grey-light"
          href="https://twitter.com/madsbrodt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon className="w-5 sm:w-6" fill="grey-darker" />
        </a>
        <a
          className="p-2 hover:bg-grey-light"
          href="https://github.com/mbrodt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon className="w-5 sm:w-6" fill="grey-darker" />
        </a>
        {/* For some reason the linkedin svg breaks if its a react component, so the fill is hardcoded into the svg */}
        <a
          className="p-2 hover:bg-grey-light"
          href="https://www.linkedin.com/in/mads-brodt-nielsen-a35874152/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-5 sm:w-6 mb-0"
            src={require(`../assets/linkedin.svg`)}
            alt=""
          />
        </a>
      </div>
    </ul>
  </nav>
)

export default Header
