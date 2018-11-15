import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/header'
import Layout from '../components/layout'
import Intro from '../components/intro'
import Projects from '../components/projects'
import Blog from '../components/blog'
import Contact from '../components/contact'

if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]')
}

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <div className="font-sans text-grey-darkest">
        <Header />
        <div className="container mx-auto ">
          <Intro />
          <Projects projects={data.allProjectsJson.edges} />
          <Blog blogData={data.allMarkdownRemark} />
          <Contact />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectQuery {
    allProjectsJson {
      edges {
        node {
          img
          title
          description
          link
          footerText
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            icon
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
