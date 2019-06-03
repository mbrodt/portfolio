import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

import PostList from '../components/post-list'
import PageHeading from '../components/UI/PageHeading'

const Articles = ({ data }) => {
  const blogPosts = data.allMarkdownRemark.edges.filter(post => {
    return post.node.frontmatter.type === 'blog-post'
  })
  const journalPosts = data.allMarkdownRemark.edges.filter(post => {
    return post.node.frontmatter.type === 'journal'
  })
  return (
    <Layout>
      <PageHeading className="ml-4 lg:ml-0">Articles</PageHeading>
      <ArticleSection title="Blog Posts" posts={blogPosts} />
      <ArticleSection title="Work Journals" posts={journalPosts} />
    </Layout>
  )
}

const ArticleSection = ({ title, posts }) => {
  return (
    <div className="mb-8">
      <h3 className="mb-4 ml-4 lg:ml-0 font-semibold text-lg">{title}</h3>
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
