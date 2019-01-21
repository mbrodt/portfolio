import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from './header'
import '../css/generated.css'
import './transition.css'
require('prismjs/themes/prism-tomorrow.css')

class Layout extends React.Component {
  componentDidMount() {
    let mainContainer = document.getElementById('main-container')
    setTimeout(() => (mainContainer.className += ' fade-in'), 50)
  }
  render() {
    return (
      <div className="bg-grey-lighter font-sans pb-10 sm:pb-20">
        <Helmet
          meta={[
            {
              name: 'Mads Brodt Portfolio',
              content: 'A portfolio site for Mads Brodt',
            },
          ]}
          title="Mads Brodt"
        >
          <html lang="en" />
        </Helmet>
        <Header />
        <div className="text-grey-darkest">
          <div
            id="main-container"
            className="container mx-auto hide"
            style={{ transition: 'all 0.7s ease' }}
          >
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.array,
}

export default Layout

// const Layout = ({ children, data }) => (
//   <div className="bg-grey-lighter font-sans pb-10 sm:pb-20">
//     <Helmet
//       meta={[
//         {
//           name: 'Mads Brodt Portfolio',
//           content: 'A portfolio site for Mads Brodt',
//         },
//       ]}
//       title="Mads Brodt"
//     >
//       <html lang="en" />
//     </Helmet>
//     <Header />
//     <div className="text-grey-darkest">
//       <div className="container mx-auto ">{children}</div>
//     </div>
//   </div>
// )

// Layout.propTypes = {
//   children: PropTypes.array,
// }

// export default Layout

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
