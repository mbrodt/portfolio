import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
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
    <div className="font-sans container mx-auto text-black">
      <Header />
      <Intro />
      <Projects projects={data.allProjectsJson.edges} />
      <Blog blogData={data.allMarkdownRemark} />
      <Contact />
    </div>
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
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 600) {
                  ...GatsbyImageSharpSizes_tracedSVG
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt(pruneLength: 100)
        }
      }
    }
  }
`

export default IndexPage
