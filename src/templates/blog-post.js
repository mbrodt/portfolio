import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Header from '../components/header'

export default ({ data }) => {
  const post = data.markdownRemark
  console.log('post', post)
  return (
    <Layout>
      <div className="pt-24 mb-10 sm:mb-20 sm:pt-32 leading-normal w-full p-4  sm:w-2/3 sm:mx-auto sm:p-0 lg:mx-0 ">
        <div className="mb-8">
          <img
            src={require(`../assets/${post.frontmatter.icon}`)}
            alt=""
            className="w-16 mb-0 mr-4"
          />
          <h1 className="mb-2">{post.frontmatter.title}</h1>
          <p className="text-sm text-grey-dark">{post.frontmatter.date}</p>
        </div>
        <p dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

// const BlogPostWrapper = styled.div`
//   max-width: 600px;
//   margin: 0 auto;
//   padding: 20px;
//   background-color: white;
//   border-radius: 20px;
//   color: #252525;
//   font-family: medium-content-serif-font, Georgia, Cambria, 'Times New Roman',
//     Times, serif;
//   @media (max-width: 620px) {
//     margin: 10px;
//   }
// `

// const PostData = styled.span`
//   font-style: italic;
//   font-size: 1rem;
// `

// const BodyText = styled.p`
//   font-size: 1.1rem;
//   line-height: 2rem;
// `

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        icon
      }
    }
  }
`
