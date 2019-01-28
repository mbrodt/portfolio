import React from 'react'
import { graphql } from 'gatsby'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Layout from '../components/layout'
import Intro from '../components/intro'
import Projects from '../components/projects'
import Skills from '../components/skills'
import Blog from '../components/blog'
import Contact from '../components/contact'

if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]')
  AOS.init()
}

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Intro />
      <Projects projects={data.allProjectsJson.edges} />
      <Skills />
      <Blog blogData={data.allMarkdownRemark} />
      <Contact />
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
          label
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
