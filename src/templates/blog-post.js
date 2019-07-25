import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import PageHeading from '../components/UI/PageHeading'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="leading-normal w-full p-4  sm:w-2/3 sm:mx-auto sm:p-0 lg:mx-0 min-h-screen ">
        <div className="mb-8">
          <img
            src={require(`../assets/${post.frontmatter.icon}`)}
            alt=""
            className="w-16 mb-0 mr-4"
          />
          <PageHeading>{post.frontmatter.title}</PageHeading>
          <p className="text-sm text-gray-600">{post.frontmatter.date}</p>
        </div>
        <div
          className="markdown-article"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        icon
      }
    }
  }
`
