import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/header'
import Helmet from 'react-helmet'
import './index.css'
require('prismjs/themes/prism-tomorrow.css')

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      meta={[
        {
          name: 'description',
          content: 'A portfolio site for Mads Brodt',
        },
      ]}
      title="Mads Brodt"
    >
      {/* <meta charSet="utf-8" />
      <meta name="Description" content="" />
      <title>My Title</title> */}
      <html lang="en" />
    </Helmet>
    <Header />
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

// export const query = graphql`
//   query ProjectsQuery {
//     allProjectsJson {
//       edges {
//         node {
//           img
//           title
//           description
//           link
//           footerText
//         }
//       }
//     }
//   }
// `
