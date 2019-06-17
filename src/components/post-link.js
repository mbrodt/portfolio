import React from 'react'
import Link from 'gatsby-link'

const PostLink = props => (
  <Link
    to={props.post.fields.slug}
    className="flex items-center no-underline justify-between p-4 border-b-2 border-gray-300 hover:bg-gray-300 mx-4 lg:mx-0"
  >
    <img
      src={require(`../assets/${props.post.frontmatter.icon}`)}
      alt=""
      className="w-8 mb-0 mr-4"
    />

    <p className="leading-normal flex-1 font text-gray-900 text-md sm:text-lg mb-0 sm:mr-8">
      {props.post.frontmatter.title}
    </p>

    <p className="hidden sm:block text-gray-600 mb-0">
      {props.post.frontmatter.date}
    </p>
  </Link>
)

export default PostLink
