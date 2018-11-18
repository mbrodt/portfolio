import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from './header'
import '../layouts/generated.css'
require('prismjs/themes/prism-tomorrow.css')

const Layout = ({ children, data }) => (
  <div className="bg-grey-lighter font-sans">
    <Helmet
      meta={[
        {
          name: 'description',
          content: 'A portfolio site for Mads Brodt',
        },
      ]}
      title="Mads Brodt"
    >
      <html lang="en" />
    </Helmet>
    <Header />
    <div className="text-grey-darkest">
      <div className="container mx-auto ">{children}</div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

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
