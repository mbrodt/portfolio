import React from 'react'
import PostLink from './post-link'
const PostList = ({ title, posts }) => {
  return (
    <div className="mb-8">
      <ul className="mb-6 ml-0">
        {posts.map(({ node }) => {
          return <PostLink post={node} key={node.frontmatter.title} />
        })}
      </ul>
    </div>
  )
}

export default PostList
