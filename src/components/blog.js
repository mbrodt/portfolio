import React from 'react'
import Link from 'gatsby-link'

const Blog = ({ blogData }) => {
  return (
    <section className="my-20" data-aos="fade-left">
      <h2 id="blog" className="text-center mb-8">
        Blog posts
      </h2>
      <ul className="mb-0 ml-0">
        {blogData.edges.map(({ node }) => (
          <Post post={node} key={node.frontmatter.title} />
        ))}
      </ul>
    </section>
  )
}

const Post = props => (
  <Link
    to={props.post.fields.slug}
    className="flex items-center no-underline justify-between p-4 border-b-2 border-grey-light hover:bg-grey-light m-4 lg:m-0"
  >
    <img
      src={require(`../assets/${props.post.frontmatter.icon}`)}
      alt=""
      className="w-8 mb-0 mr-4"
    />

    <p className="leading-normal flex-1 font text-black text-md sm:text-lg mb-0 sm:mr-8">
      {props.post.frontmatter.title}
    </p>

    <p className="hidden sm:block text-grey-darker mb-0">
      {props.post.frontmatter.date}
    </p>
  </Link>
)

export default Blog
