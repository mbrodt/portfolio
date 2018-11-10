import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const Blog = ({ blogData }) => {
  return (
    <section id="blog" className="my-16">
      <h2 className="text-center mb-8">Blog posts</h2>
      <ul>
        {blogData.edges.map(({ node }) => (
          <Post post={node} key={node.frontmatter.title} />
        ))}
      </ul>
    </section>
  )
}

const Post = ({ post }) => {
  return (
    <Link
      to={post.fields.slug}
      className="flex items-center bg-white no-underline justify-between p-4 border border-b-grey"
    >
      <svg
        width="30"
        viewBox="0 0 110 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-4"
      >
        <path
          d="M50.7763 82.5L41.25 63.4473L31.7238 82.5H-1.00031e-06L41.25 8.29277e-07L82.5 82.5H50.7763Z"
          transform="translate(0 110) scale(1.33333 -1.33333)"
          fill="#4DBA87"
        />
        <path
          d="M34.2762 49.4999L24.75 30.4472L15.2238 49.4999H-1.02596e-06L24.75 -1.0366e-06L49.5 49.4999H34.2762Z"
          transform="translate(22.0002 66) scale(1.33333 -1.33333)"
          fill="#435466"
        />
      </svg>

      <p className="flex-1 font-medium text-black text-xl">
        {post.frontmatter.title}
      </p>
      <p className="text-grey-darker">{post.frontmatter.date}</p>
    </Link>
  )
}

export default Blog
