import React from 'react'

const Header = () => (
  <nav className="bg-grey-lighter fixed top pin-t pin-l border-b-2 border-grey-light w-full py-4">
    <ul className="container mx-auto">
      <a href="/#home">Home</a>
      <a href="/#projects">Projects</a>
      <a href="/#blog">Blog</a>
      <a href="/#contact">Contact</a>
    </ul>
  </nav>
)

export default Header
