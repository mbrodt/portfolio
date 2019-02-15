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
      <h1 className="text-2xl sm:text-3xl mb-8 ml-4 lg:ml-0">Articles</h1>
      <ArticleSection title="Blog Posts" posts={blogPosts} />
      <ArticleSection title="Work Journals" posts={journalPosts} />
    </Layout>
  )
}

const ArticleSection = ({ title, posts }) => {
  return (
    <div className="mb-8">
      <h3 className="mb-4 ml-4 lg:ml-0">{title}</h3>
      <PostList posts={posts} />
    </div>
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
