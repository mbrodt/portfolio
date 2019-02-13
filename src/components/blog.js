import React from 'react'
import Link from 'gatsby-link'
// import PostLink from './post-link'
import PostList from './post-list'

const Blog = ({ blogData }) => {
  console.log('blogdata', blogData)
  const blogPosts = blogData.edges.filter(post => {
    return post.node.frontmatter.type === 'blog-post'
  })
  return (
    <section className="my-20" data-aos="fade-left">
      <h2 id="blog" className="text-center mb-8">
        Blog posts
      </h2>
      <PostList title="lol" posts={blogPosts} />
      <Link className="no-underline text-blue" to="/articles">
        Check out more of my writing ->
      </Link>
    </section>
  )
}

export default Blog
