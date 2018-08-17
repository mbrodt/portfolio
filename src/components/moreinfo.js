import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const MoreInfo = () => (
  <section id="about">
    <Heading>Wanna know more?</Heading>
    <div class="mb-4 mx-auto">
      <Link to="/about-me">
        <button className="btn primary-btn">About me</button>
      </Link>
      <Link to="blog">
        <button className="btn secondary-btn">Blog</button>
      </Link>
    </div>
  </section>
)

const Heading = styled.h2`
  text-align: center;
  margin: 1.5rem;
`

export default MoreInfo
