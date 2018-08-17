import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const Blog = ({ blogData }) => {
  console.log('hey', blogData)
  return (
    <section className="container">
      <h2 style={{ textAlign: 'center' }}>Blog posts</h2>
      <div className="line" />
      {/* <h4>Amount of posts: {blogData.totalCount}</h4> */}
      <div className="grid">
        {blogData.edges.map(({ node }) => (
          <Post post={node} key={node.frontmatter.title} />
        ))}
      </div>
    </section>
  )
}

const Post = ({ post }) => {
  return (
    <Link to={post.fields.slug}>
      <div className="blog-card ">
        <Img
          sizes={post.frontmatter.featuredImage.childImageSharp.sizes}
          alt=""
        />
        <div className="blog-card-content">
          <h2 style={{ marginTop: '1.45rem' }}>{post.frontmatter.title}</h2>
          <p className="blog-post-date">Posted on {post.frontmatter.date}</p>
          <div>
            <p style={{ paddingBottom: '20px' }}>{post.excerpt}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Blog
