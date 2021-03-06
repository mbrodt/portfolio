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
      <div className="font-sans pb-10 sm:pb-20">
        <Helmet
          meta={[
            {
              name: 'Mads Brodt Portfolio',
              content: 'A portfolio site for Mads Brodt',
            },
          ]}
          title="Mads Brodt"
        >
          <body className="bg-gray-100 min-h-screen overflow-hidden" />
          <html lang="en" />
        </Helmet>
        <Header />
        <div className="text-gray-800 pt-24 sm:pt-32">
          <div id="main-container" className="container mx-auto hide">
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
