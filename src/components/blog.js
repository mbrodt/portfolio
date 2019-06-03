import React from 'react'
import Link from 'gatsby-link'
import PostList from './post-list'
import Arrow from './arrow'
import SectionHeading from './UI/SectionHeading'

const Blog = ({ blogData }) => {
  const blogPosts = blogData.edges.filter(post => {
    return post.node.frontmatter.type === 'blog-post'
  })
  return (
    <section className="my-20" data-aos="fade-left">
      <SectionHeading>Blog posts</SectionHeading>
      <PostList posts={blogPosts} />
      <div className="flex justify-end pr-4 ">
        <Link
          className="no-underline text-indigo-500 hover:text-indigo-700 inline-flex items-center"
          to="/articles"
        >
          Check out more of my writing <Arrow direction="right" />
        </Link>
      </div>
    </section>
  )
}

export default Blog
