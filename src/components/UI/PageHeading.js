import React from 'react'

const PageHeading = ({ className, children }) => {
  return (
    <h1 className={`mb-8 text-2xl sm:text-3xl font-bold ${className}`}>
      {children}
    </h1>
  )
}

export default PageHeading
