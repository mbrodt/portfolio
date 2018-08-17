import React from 'react'
import Link from 'gatsby-link'

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ siteTitle, bgColor }) => (
  <header className="container-small center-margin">
    <div
    // style={{
    //   margin: '0 auto',
    //   maxWidth: 960,
    //   padding: '1.45rem 1.0875rem',
    //   display: 'flex',
    //   justifyContent: 'center',
    // }}
    >
      <Link
        to="/"
        // style={{
        //   color: 'white',
        //   textDecoration: 'none',
        //   width: '50%',
        // }}
      >
        {siteTitle}
      </Link>
      <ul
        id="main-navigation"
        // style={{
        //   width: '50%',
        // }}
      >
        <ListLink to="/">Home</ListLink>
        <ListLink to="/">About me</ListLink>
        <ListLink to="/">Blog</ListLink>
      </ul>
    </div>
  </header>
)

export default Header
