import React from 'react'
import Link from 'gatsby-link'

import Arrow from './arrow'

const Demo = ({ children }) => {
  return (
    <div className="bg-white w-screen h-screen font-sans flex justify-center items-center">
      <BackButton />
      {children}
    </div>
  )
}

const BackButton = () => {
  return (
    <Link
      className="absolute top-0 left-0 bg-indigo-500 p-12 rounded-br-full text-white no-underline "
      to={`/demos/`}
    >
      <div className="-ml-8 flex justify-center items-center ">
        <Arrow direction="left" /> <p className="mb-0 ml-2">Go back</p>
      </div>
    </Link>
  )
}

export default Demo
