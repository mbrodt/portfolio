import React from 'react'
import PostLink from './post-link'
const PostList = ({ title, posts }) => {
  return (
    <ul className="mb-4 ml-0">
      {posts.map(({ node }) => {
        return <PostLink post={node} key={node.frontmatter.title} />
      })}
    </ul>
  )
}

export default PostList
