import React from 'react'

const Arrow = ({ direction }) => {
  if (direction === 'right') {
    return (
      <svg
        className="fill-current w-4 mb-0 arrow-anim arrow-anim-right ml-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M16.172 9l-6.071-6.071 1.414-1.414L20 10l-.707.707-7.778 7.778-1.414-1.414L16.172 11H0V9z" />
      </svg>
    )
  } else if (direction === 'left') {
    return (
      <svg
        className="fill-current w-4 mb-0 arrow-anim arrow-anim-left ml-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M3.828 9.99986L9.899 16.0709L8.485 17.4849L0 8.99986L0.707001 8.29286L8.485 0.514862L9.899 1.92886L3.828 7.99986L20 7.99986V9.99986L3.828 9.99986Z" />
      </svg>
    )
  }
  return null
}

export default Arrow
