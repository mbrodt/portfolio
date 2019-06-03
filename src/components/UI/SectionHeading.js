import React from 'react'

const SectionHeading = ({ className, children }) => {
  return (
    <h2 className={`text-center mb-8 text-2xl font-bold ${className}`}>
      {children}
    </h2>
  )
}

export default SectionHeading
