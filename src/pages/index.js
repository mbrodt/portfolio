import React from 'react'
import Link from 'gatsby-link'
import Intro from '../components/intro'
import Projects from '../components/projects'
import Blog from '../components/blog'
import Contact from '../components/contact'

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <div>
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
            date(formatString: "DD MMMM, YYYY")
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
          excerpt
        }
      }
    }
  }
`

export default IndexPage
