import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

import PostList from '../components/post-list'

const Articles = ({ data }) => {
  const blogPosts = data.allMarkdownRemark.edges.filter(post => {
    return post.node.frontmatter.type === 'blog-post'
  })
  const journalPosts = data.allMarkdownRemark.edges.filter(post => {
    return post.node.frontmatter.type === 'journal'
  })
  return (
    <Layout>
      <h1 className="text-2xl sm:text-3xl mb-8">Articles</h1>
      <h3 className="mb-4">Blog posts</h3>
      <PostList posts={blogPosts} />
      <h3 className="mb-4">Work journals</h3>
      <PostList posts={journalPosts} />
    </Layout>
  )
}

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            icon
            type
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Articles
