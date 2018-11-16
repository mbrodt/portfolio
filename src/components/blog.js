import React, { Component } from 'react'
import Link from 'gatsby-link'

const Blog = ({ blogData }) => {
  return (
    <section id="blog" className="my-20">
      <h2 className="text-center mb-8">Blog posts</h2>
      <ul className="mb-0">
        {blogData.edges.map(({ node }) => (
          <Post post={node} key={node.frontmatter.title} />
        ))}
      </ul>
    </section>
  )
}

// const Post = ({ post }) => {
//   return (
//     <Link
//       to={post.fields.slug}
//       className="flex items-center no-underline justify-between p-4 border-b-2 border-grey-light hover:bg-grey-light m-4 lg:m-0"
//     >
//       <img
//         src={require(`../assets/${post.frontmatter.icon}`)}
//         alt=""
//         className="w-8 mb-0 mr-4"
//       />

//       <p className="leading-normal flex-1 font-medium text-black text-md sm:text-xl">
//         {post.frontmatter.title}
//       </p>
//       {/* Only show the date on screens larger than 768 px (the tailwind 'md' size) */}
//       {window.innerWidth > 768 && (
//         <p className="text-grey-darker">{post.frontmatter.date}</p>
//       )}
//     </Link>
//   )
// }

class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayDate: true,
    }
  }

  componentDidMount() {
    let displayDate = window.innerWidth > 768
    this.setState({
      displayDate,
    })
  }
  render() {
    return (
      <Link
        to={this.props.post.fields.slug}
        className="flex items-center no-underline justify-between p-4 border-b-2 border-grey-light hover:bg-grey-light m-4 lg:m-0"
      >
        <img
          src={require(`../assets/${this.props.post.frontmatter.icon}`)}
          alt=""
          className="w-8 mb-0 mr-4"
        />

        <p className="leading-normal flex-1 font-medium text-black text-md sm:text-xl mb-0">
          {this.props.post.frontmatter.title}
        </p>
        {/* Only show the date on screens larger than 768 px (the tailwind 'md' size) */}
        {this.state.displayDate && (
          <p className="text-grey-darker">{this.props.post.frontmatter.date}</p>
        )}
      </Link>
    )
  }
}

export default Blog
