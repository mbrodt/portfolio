import React from 'react'
import Link from 'gatsby-link'
import PostList from './post-list'
import Arrow from './arrow'

const Blog = ({ blogData }) => {
  const blogPosts = blogData.edges.filter(post => {
    return post.node.frontmatter.type === 'blog-post'
  })
  return (
    <section className="my-20" data-aos="fade-left">
      <h2 id="blog" className="text-center mb-8">
        Blog posts
      </h2>
      <PostList posts={blogPosts} />
      <div className="flex justify-end pr-4 ">
        <Link
          className="no-underline text-indigo hover:text-indigo-dark inline-flex items-end"
          to="/articles"
        >
          Check out more of my writing <Arrow direction="right" />
        </Link>
      </div>
    </section>
  )
}

export default Blog
